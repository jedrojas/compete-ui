import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { useUserCompetitions } from '../../hooks/competitions-queries';
import { useModal } from '../../hooks/modal-hooks';
import CompetitionCard from '../../shared/competition-card/competition-card';
import NameAndIconStep from '../../shared/create-competition-modal/name-and-icon-step/name-and-icon-step';
import { MultiStepModal } from '../../shared/multi-step-modal/multi-step-modal';
import NoUserCompetitionsFoundMsg from '../../shared/no-user-competitions-found-msg/no-user-competitions-found-msg';
import SideBar from '../../shared/side-bar/side-bar';
import UserCompetitionsPageContainer from './user-competitions-page-container/user-competitions-page-container';

export interface IUserCompetitionsPage {}

// to add:
// search bar to find competitions
// order by: user competitions at top, other competitions at bottom
export const UserCompetitionsPage: React.FC<IUserCompetitionsPage> = () => {
  // get user competitions
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

      <MultiStepModal show={show} setShow={setShow}>
        {/* team or individual step */}
        {/* name and icon step */}
        {/* dates step */}
        {/* review step */}
        <NameAndIconStep />

        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </MultiStepModal>
    </UserCompetitionsPageContainer>
  );
};

export default UserCompetitionsPage;
