import { useAuth0 } from '@auth0/auth0-react';
import fetch from 'node-fetch';
import { useEffect, useState } from 'react';

export const useUserMetaData = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  //   TODO: type this
  const [userInfo, setUserInfo] = useState<any>();
  const [isFirstLogin, setIsFirstLogin] = useState(false);

  //   TODO: store this in auth provider or something
  const domainName = "https://dev-k8hhju21.us.auth0.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `${domainName}/api/v2/`,
          scope: `read:current_user update:current_user_metadata`,
        });
        const getMetadata = await fetch(
          `${domainName}/api/v2/users/${user.sub}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "content-type": "application/json",
            },
          }
        );
        setUserInfo(await getMetadata.json());
      } catch (e) {
        throw e;
      }
    };
    if (user) {
      fetchData();
    } else {
      setIsFirstLogin(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { userInfo, isFirstLogin };
};
