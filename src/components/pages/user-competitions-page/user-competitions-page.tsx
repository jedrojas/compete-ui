import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { useUserCompetitions } from '../../hooks/competitions-queries';
import { useModal } from '../../hooks/modal-hooks';
import CompetitionCard from '../../shared/competition-card/competition-card';
import CreateCompetitionModal from '../../shared/create-competition-modal/create-competition-modal';
import NoUserCompetitionsFoundMsg from '../../shared/no-user-competitions-found-msg/no-user-competitions-found-msg';
import SideBar from '../../shared/side-bar/side-bar';
import UserCompetitionsPageContainer from './user-competitions-page-container/user-competitions-page-container';

export interface IUserCompetitionsPage {}

export const UserCompetitionsPage: React.FC<IUserCompetitionsPage> = () => {
  const { userCompetitions } = useUserCompetitions();
  const [show, setShow] = useModal();

  return (
    <UserCompetitionsPageContainer>
      <SideBar />
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

        <Button onClick={() => setShow(true)}>Create A Competition</Button>
      </Col>

      <CreateCompetitionModal show={show} setShow={setShow} />
    </UserCompetitionsPageContainer>
  );
};

export default UserCompetitionsPage;
