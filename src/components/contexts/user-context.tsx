import { useAuth0 } from '@auth0/auth0-react';
import React, { useMemo, useState } from 'react';

import { useGet } from '../hooks/fetch';
import { useStravaAccessCode } from '../hooks/strava-hooks';

interface IUserState {
  first_name?: string;
  last_name?: string;
  competitions?: string[];
  is_synced_with_strava?: boolean;
}

const UserStateContext = React.createContext<IUserState>({} as IUserState);

const useUserContext = () => {
  useStravaAccessCode();
  const { competitions, is_synced_with_strava, user } = useUserQuery();

  console.log("--user is--", user);

  return useMemo(
    () => ({
      competitions,
    }),
    [competitions]
  );
};

const UserProvider = ({ children }) => {
  const userState = useUserContext();

  return (
    <UserStateContext.Provider value={userState}>
      {children}
    </UserStateContext.Provider>
  );
};

const useUserState = () => {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
};

const useUserQuery = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { data } = useGet<IUserState>(
    `http://localhost:3000/user/${user?.sub}`
  );
  // TODO - Jed: store this in auth provider or something
  // also found in user metadata hooks
  const domainName = "https://dev-k8hhju21.us.auth0.com";

  const fetchToken = async () => {
    try {
      return await getAccessTokenSilently({
        // TODO - Jed: extract audience and scope from here
        audience: `${domainName}/api/v2/`,
        scope: `read:current_user update:current_user_metadata`,
      });
    } catch (e) {
      throw e;
    }
  };

  // TODO - Jed: consider extracting this into another hook
  fetchToken()
    .then((token) => localStorage.setItem("access_token", token))
    .catch((e) => console.log("Error fetching auth0 access token:", e));

  return {
    competitions: data?.competitions ?? [],
    is_synced_with_strava: data?.is_synced_with_strava,
    user,
  };
};

export { UserProvider, useUserState };
