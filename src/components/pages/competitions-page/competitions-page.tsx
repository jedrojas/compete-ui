import React from 'react';
import { Col, Row } from 'react-bootstrap';

import ActivityWidget from '../../shared/activity-widget/activity-widget';
import LeaderboardWidget from '../../shared/leaderboard-widget/leaderboard-widget';
import NavBar from '../../shared/nav-bar/nav-bar';
import CompetitionsPageContainer from './competitions-page-container/competitions-page-container';

export interface ICompetitionsPage {}

export const CompetitionsPage: React.FC<ICompetitionsPage> = () => {
  return (
    <CompetitionsPageContainer>
      <NavBar />
      <Row className="m-2">
        <Col xs="3">
          <ActivityWidget />
        </Col>
        <Col xs="4">
          <LeaderboardWidget />
        </Col>
      </Row>
    </CompetitionsPageContainer>
  );
};

export default CompetitionsPage;
