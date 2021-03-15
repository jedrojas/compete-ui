import '../../../styles/variables.scss';

import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import BaseNeoButton from '../../bases/base-neo-button/base-neo-button';
import { useFirstAndLastNameCheck } from '../../hooks/first-and-last-name-check-hooks';
import { useGetStravaActivities } from '../../hooks/strava-hooks';
import { useUpdateUserMetadata } from '../../hooks/user-metadata-hooks';
import SideBar from '../../shared/side-bar/side-bar';
import UserCompetitionsSection from '../../shared/user-competitions-section/user-competitions-section';
import UserDashboardActivityWidget from '../../shared/user-dashboard-activity-widget/user-dashboard-activity-widget';
import DashboardPageContainer from './dashboard-page-container/dashboard-page-container';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
  // TODO: is this really the most efficient way to handle sign up? (low priority)
  const { showSignUpModal, setShowSignUpModal } = useFirstAndLastNameCheck();
  const { updateUser } = useUpdateUserMetadata();
  const { register, handleSubmit, errors } = useForm();

  // This should be replaced with a user field that
  // says whether or not the user has connected to strava
  const stravaAccessToken = localStorage.getItem("stravaAccessToken");

  const { getStravaActivities, loading } = useGetStravaActivities();

  return (
    <DashboardPageContainer>
      <SideBar />
      <Col>
        <div>
          Things to add to this page: Competitions section (list comps, create
          new comp), Teams section (list teams), activity summary,
        </div>

        <UserCompetitionsSection />

        {/* TODO - Jed: make this look good */}

        {stravaAccessToken ? (
          <>
            Strava Synced
            <UserDashboardActivityWidget />
          </>
        ) : (
          <BaseNeoButton
            height="50px"
            onClick={() =>
              (window.location.href = `http://www.strava.com/oauth/authorize?client_id=54661&response_type=code&redirect_uri=http://localhost:3001/dashboard/exchange_token&approval_prompt=force&scope=activity:read&state=strava_auth_code`)
            }
          >
            Connect to Strava
          </BaseNeoButton>
        )}

        {/* end strava import component  */}

        {/* strava import component */}
        {/* TODO - Jed: make this look good */}

        {stravaAccessToken && (
          <BaseNeoButton height="50px" onClick={() => getStravaActivities()}>
            {loading ? "Retrieving" : "Get Strava activities"}
            {/* add loading component */}
            {/* add feedback telling user activities were retrieved */}
          </BaseNeoButton>
        )}

        {/* end strava import component  */}

        {/* TODO - Jed: extract the following into its own component */}
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
      </Col>
    </DashboardPageContainer>
  );
};

export default DashboardPage;
