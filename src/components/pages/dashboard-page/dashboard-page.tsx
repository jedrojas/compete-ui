import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { useFirstAndLastNameCheck } from '../../hooks/first-and-last-name-check-hooks';
import NavBar from '../../shared/nav-bar/nav-bar';
import DashboardPageContainer from './dashboard-page-container/dashboard-page-container';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
  const { logout } = useAuth0();
  const showCompleteSignUpForm = useFirstAndLastNameCheck();
  const [showSignUpModal, setShowSignUpModal] = useState(
    showCompleteSignUpForm
  );

  return (
    <DashboardPageContainer>
      <NavBar />
      <Button onClick={() => logout({ returnTo: "http://localhost:3001/" })}>
        Logout
      </Button>

      <Modal show={showSignUpModal} onHide={() => setShowSignUpModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Complete Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Add sign on fields here. Use react forms here to make this look dope
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => console.log("--button clicked--")}>
            Submit
          </Button>
          Make this match the theme
        </Modal.Footer>
      </Modal>
    </DashboardPageContainer>
  );
};

export default DashboardPage;

// TODO: Must do today:
// user login, and let user add settings (first name, last name, profile picture (unique color as default))
// FIGURE OUT AWS IMAGES this has to be done eventually, "just do it" now YOU GOT THIS
// set up settings page so user can see what they set
// give user option (on settings page) to edit theirs settings
