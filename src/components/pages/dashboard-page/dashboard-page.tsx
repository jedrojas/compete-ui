import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

import NavBar from '../../shared/nav-bar/nav-bar';
import DashboardPageContainer from './dashboard-page-container/dashboard-page-container';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
  const { user, logout } = useAuth0();

  useEffect(() => {
    console.log("--user--", user);
  }, [user]);

  return (
    <DashboardPageContainer>
      <NavBar />
      <Button onClick={() => logout({ returnTo: "http://localhost:3001/" })}>
        Logout
      </Button>
    </DashboardPageContainer>
  );
};

export default DashboardPage;

// TODO: Must do today:
// user login, and let user add settings (first name, last name, profile picture (unique color as default))
// FIGURE OUT AWS IMAGES this has to be done eventually, "just do it" now YOU GOT THIS
// set up settings page so user can see what they set
// give user option (on settings page) to edit theirs settings
