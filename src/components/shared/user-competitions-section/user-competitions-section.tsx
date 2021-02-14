import './user-competitions-section.scss';

import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import NewCompetitionModal from '../new-competition-modal/new-competition-modal';

export interface IUserCompetitionsSection {}

export const UserCompetitionsSection: React.FC<IUserCompetitionsSection> = () => {
  const [showNewCompetitionModal, setShowNewCompetitionModal] = useState(false);

  return (
    <Col xs="12">
      <Row>
        <Button onClick={() => setShowNewCompetitionModal(true)}>+</Button>
        <>Competition 1</>
        <>Competition 2</>
        <>Competition 3</>
        <NewCompetitionModal
          show={showNewCompetitionModal}
          setShow={setShowNewCompetitionModal}
        />
      </Row>
    </Col>
  );
};

export default UserCompetitionsSection;
