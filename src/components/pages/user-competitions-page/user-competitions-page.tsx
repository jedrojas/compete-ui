import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { useUserCompetitions } from '../../hooks/competitions-queries';
import CompetitionCard from '../../shared/competition-card/competition-card';
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
      </Col>
    </UserCompetitionsPageContainer>
  );
};

export default UserCompetitionsPage;
