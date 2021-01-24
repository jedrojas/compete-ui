import { useAuth0 } from '@auth0/auth0-react';
import fetch from 'node-fetch';
import { useEffect, useState } from 'react';

export const useGetUserMetaData = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  //   TODO: type this
  const [userInfo, setUserInfo] = useState<any>();
  const [loading, setLoading] = useState(false);

  //   TODO: store this in auth provider or something
  const domainName = "https://dev-k8hhju21.us.auth0.com";

  useEffect(() => {
    setLoading(true);
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
        )
          .then((res) => {
            setLoading(false);
            return res.json();
          })
          .catch((e) => {
            setLoading(false);
            console.log("-error getting user info-");
            return e;
          });
        setUserInfo(getMetadata);
      } catch (e) {
        throw e;
      }
    };
    if (user) {
      fetchData();
    }
  }, [getAccessTokenSilently, user]);

  return { userInfo, loading };
};

export const useUpdateUserMetadata = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  const updateUser = async (firstName: string, lastName: string) => {
    let accessToken;

    const payload = {
      user_metadata: {
        first_name: firstName,
        last_name: lastName,
      },
    };

    try {
      accessToken = await getAccessTokenSilently({
        // TODO: pull this out to config file or something
        audience: "https://dev-k8hhju21.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata",
      });
      console.log("--got access token token--", accessToken);
    } catch (e) {
      throw e;
    }

    await fetch(`https://dev-k8hhju21.us.auth0.com/api/v2/users/${user.sub}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => console.log("--successfully updated user--", user))
      .catch((e) => console.log("--error--", e));
  };

  return { updateUser };
};
