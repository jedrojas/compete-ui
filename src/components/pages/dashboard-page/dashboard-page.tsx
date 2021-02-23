import '../../../styles/variables.scss';

import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import BaseNeoButton from '../../bases/base-neo-button/base-neo-button';
import { useFirstAndLastNameCheck } from '../../hooks/first-and-last-name-check-hooks';
import { useUpdateUserMetadata } from '../../hooks/user-metadata-hooks';
import DashboardCompetitionsSection from '../../shared/dashboard-competitions-section/dashboard-competitions-section';
import NavBar from '../../shared/nav-bar/nav-bar';
import UserCompetitionsSection from '../../shared/user-competitions-section/user-competitions-section';
import DashboardPageContainer from './dashboard-page-container/dashboard-page-container';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
  // TODO: is this really the most efficient way to handle sign up? (low priority)
  const { showSignUpModal, setShowSignUpModal } = useFirstAndLastNameCheck();
  const { updateUser } = useUpdateUserMetadata();
  const { register, handleSubmit, errors } = useForm();

  return (
    <DashboardPageContainer>
      <NavBar />
      <DashboardCompetitionsSection />
      <div>
        Things to add to this page: Competitions section (list comps, create new
        comp), Teams section (list teams), activity summary,
      </div>

      <UserCompetitionsSection />

      {/* TODO: extract the following into its own component */}
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
