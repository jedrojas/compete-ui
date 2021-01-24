import '../../../styles/variables.scss';

import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import BaseNeoButton from '../../bases/base-neo-button/base-neo-button';
import { useFirstAndLastNameCheck } from '../../hooks/first-and-last-name-check-hooks';
import { useUpdateUserMetadata } from '../../hooks/user-metadata-hooks';
import NavBar from '../../shared/nav-bar/nav-bar';
import DashboardPageContainer from './dashboard-page-container/dashboard-page-container';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
  const { showSignUpModal, setShowSignUpModal } = useFirstAndLastNameCheck();
  const { logout } = useAuth0();
  const { updateUser } = useUpdateUserMetadata();
  const { register, handleSubmit, errors } = useForm();

  return (
    <DashboardPageContainer>
      <NavBar />
      {/* TODO: handle this better */}
      <Button onClick={() => logout({ returnTo: "http://localhost:3001/" })}>
        Logout
      </Button>

      <Modal
        show={showSignUpModal}
        onHide={() => setShowSignUpModal(false)}
        contentClassName="bg-light-grey"
      >
        <Modal.Header closeButton>
          <Modal.Title>Complete Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row noGutters className="mb-3">
            Fill in your first and last name to complete sign up:
          </Row>
          <form
            onSubmit={handleSubmit((data) => {
              updateUser(data.firstName, data.lastName);
              setShowSignUpModal(false);
            })}
          >
            <Row>
              <Col>
                <input
                  name="firstName"
                  placeholder="first name"
                  ref={register({ required: true })}
                  className="w-100 form-text-field my-2"
                />
                <Row noGutters className="text-danger mb-3">
                  {errors.firstName && <span>This field is required</span>}
                </Row>

                <input
                  name="lastName"
                  placeholder="last name"
                  ref={register({ required: true })}
                  className="w-100 form-text-field my-2"
                />
                <Row noGutters className="text-danger mb-3">
                  {errors.lastName && <span>This field is required</span>}
                </Row>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                {/* TODO: make padding 0 here take priority over padding set in base neo button */}
                {/* change this button to not stay in depressed state after being clicked */}
                <BaseNeoButton className="w-25 p-0">
                  <input type="submit" className="w-100 sign-up-submit-btn" />
                </BaseNeoButton>
              </Col>
            </Row>
          </form>
        </Modal.Body>
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
