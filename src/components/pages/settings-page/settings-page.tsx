import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from 'react-bootstrap';

import NavBar from '../../shared/nav-bar/nav-bar';
import SettingsPageContainer from './settings-page-container/settings-page-container';

export interface ISettingsPage {}

export interface IUserAccountDetails {
  firstName: string;
  lastName: string;
}

export const SettingsPage: React.FC<ISettingsPage> = () => {
  const { logout } = useAuth0();

  return (
    <SettingsPageContainer>
      <NavBar />
      {/* TODO: handle this logout button better */}
      <Button onClick={() => logout({ returnTo: "http://localhost:3001/" })}>
        Logout
      </Button>
    </SettingsPageContainer>
  );
};

export default SettingsPage;
