import { useAuth0 } from '@auth0/auth0-react';
import React, { useMemo } from 'react';

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
  const { competitions, is_synced_with_strava } = useUserQuery();

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
  const { user } = useAuth0();
  const { data } = useGet<IUserState>(
    `http://localhost:3000/user/${user?.sub}`
  );

  return {
    competitions: data?.competitions ?? [],
    is_synced_with_strava: data?.is_synced_with_strava,
  };
};

export { UserProvider, useUserState };
