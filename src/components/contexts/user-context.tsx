import { useAuth0 } from '@auth0/auth0-react';
import React, { useMemo } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import useCreateUserQuery from '../../queries/create-user-query';
import { useStravaAccessCode } from '../../queries/get-strava-access-code-query';
import BaseNeoButton from '../bases/base-neo-button/base-neo-button';
import { useFirstAndLastNameCheck } from '../hooks/first-and-last-name-check-hooks';
import { useUpdateUserMetadata } from '../hooks/user-metadata-hooks';

interface IUserState {}

const UserStateContext = React.createContext<IUserState>({} as IUserState);

const useUserContext = async () => {
  useStravaAccessCode();
  useAuth0AccessToken();

  return useMemo(() => ({}), []);
};

const UserProvider = ({ children }) => {
  const userState = useUserContext();
  const { showSignUpModal, setShowSignUpModal } = useFirstAndLastNameCheck();
  const { register, handleSubmit, errors } = useForm();
  const { updateUser } = useUpdateUserMetadata();
  const createUserQuery = useCreateUserQuery();
  const { user } = useAuth0();

  return (
    <>
      <UserStateContext.Provider value={userState}>
        {children}
      </UserStateContext.Provider>

      <Modal
        show={showSignUpModal}
        onHide={() => setShowSignUpModal(false)}
        contentClassName="bg-light-grey"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Complete Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row noGutters className="mb-3">
            Fill in your first and last name to complete sign up:
          </Row>
          <form
            onSubmit={handleSubmit((data) => {
              updateUser(data.firstName, data.lastName);
              createUserQuery({
                id: user?.sub,
                first_name: data.firstName,
                last_name: data.lastName,
              });
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
                <BaseNeoButton className="w-25 p-0">
                  <input type="submit" className="w-100 sign-up-submit-btn" />
                </BaseNeoButton>
              </Col>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

const useUserState = () => {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
};

const useAuth0AccessToken = () => {
  const { getAccessTokenSilently } = useAuth0();

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

  fetchToken()
    .then((token) => localStorage.setItem("access_token", token))
    .catch((e) => console.log("Error fetching auth0 access token:", e));
};

export { UserProvider, useUserState };
