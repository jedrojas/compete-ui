import React from 'react';

import NavBar from '../../shared/nav-bar/nav-bar';
import SettingsPageContainer from './settings-page-container/settings-page-container';

export interface ISettingsPage {}

export interface IUserAccountDetails {
  firstName: string;
  lastName: string;
}

export const SettingsPage: React.FC<ISettingsPage> = () => {
  return (
    <SettingsPageContainer>
      <NavBar />
    </SettingsPageContainer>
  );
};

export default SettingsPage;
