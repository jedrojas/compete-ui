import { useAuth0 } from '@auth0/auth0-react';
import React, { useMemo } from 'react';

import { useFetch } from '../hooks/fetch';

interface IUserState {
  first_name?: string;
  last_name?: string;
  competitions?: string[];
}

const UserStateContext = React.createContext<IUserState>({} as IUserState);

const useUserContext = () => {
  const { competitions } = useUserQuery();

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
  const { data } = useFetch<IUserState>(
    `http://localhost:3000/user/${user?.sub}`,
    "GET"
  );

  return { competitions: data?.competitions ?? [] };
};

export { UserProvider, useUserState };
