import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import BasePageLayout from '../../bases/base-page-layout/base-page-layout';
import { useUserCompetitions } from '../../hooks/competitions-queries';
import CompetitionCard from '../../shared/competition-card/competition-card';
import CreateCompetitionModal from '../../shared/create-competition-modal/create-competition-modal';
import FindCompetitionModal from '../../shared/find-competition-modal/find-competition-modal';
import NoUserCompetitionsFoundMsg from '../../shared/no-user-competitions-found-msg/no-user-competitions-found-msg';

export interface IUserCompetitionsPage {}

export const UserCompetitionsPage: React.FC<IUserCompetitionsPage> = () => {
  const { userCompetitions } = useUserCompetitions();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showFindModal, setShowFindModal] = useState(false);

  return (
    <BasePageLayout>
      <Col>
        <Row className="mt-4">
          <h2>Competitions</h2>
        </Row>

        {userCompetitions.length ? (
          userCompetitions.map((competition) => (
            <CompetitionCard competition={competition} />
          ))
        ) : (
          <NoUserCompetitionsFoundMsg />
        )}

        <Button onClick={() => setShowCreateModal(true)} className="mx-2">
          Create a competition
        </Button>
        <Button onClick={() => setShowFindModal(true)} className="mx-2">
          Find existing competition
        </Button>
      </Col>

      <CreateCompetitionModal
        show={showCreateModal}
        setShow={setShowCreateModal}
      />
      <FindCompetitionModal show={showFindModal} setShow={setShowFindModal} />
    </BasePageLayout>
  );
};

export default UserCompetitionsPage;
