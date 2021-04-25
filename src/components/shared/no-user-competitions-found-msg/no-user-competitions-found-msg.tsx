import './no-user-competitions-found-msg.scss';

import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

import NeoButton from '../../bases/neo-button/neo-button';
import NewCompetitionModal from '../new-competition-modal/new-competition-modal';

export interface INoUserCompetitionsFoundMsg {}

export const NoUserCompetitionsFoundMsg: React.FC<INoUserCompetitionsFoundMsg> = () => {
  const [showNewCompetitionModal, setShowNewCompetitionModal] = useState(false);

  return (
    <>
      <NeoButton
        className="flex-column color-teal mt-4 mx-auto"
        height="25vh"
        width="50vw"
        onClick={() => setShowNewCompetitionModal(true)}
      >
        <span className="my-auto">
          <Row className="justify-content-center">
            <h3>Uh oh. You haven't joined any competitions yet!</h3>
          </Row>
          <Row className="justify-content-center">
            <h3>Click here to join or create your first competition!</h3>
          </Row>
          <Row className="justify-content-center mb-n4">
            <h1>+</h1>
          </Row>
        </span>
      </NeoButton>
      <NewCompetitionModal
        show={showNewCompetitionModal}
        setShow={setShowNewCompetitionModal}
      />
    </>
  );
};

export default NoUserCompetitionsFoundMsg;
