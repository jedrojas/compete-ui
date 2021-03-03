import React from 'react';
import { Col, Row } from 'react-bootstrap';

import ActivityWidget from '../../shared/activity-widget/activity-widget';
import CompetitionStatusWidget from '../../shared/competition-status-widget/competition-status-widget';
import JoinCompetitionWidget from '../../shared/join-competition-widget/join-competition-widget';
import LeaderboardWidget from '../../shared/leaderboard-widget/leaderboard-widget';
import NavBar from '../../shared/nav-bar/nav-bar';
import { CompetitionProvider } from './competition-context';
import CompetitionsPageContainer from './competitions-page-container/competitions-page-container';

export interface ICompetitionsPage {}

export const CompetitionsPage: React.FC<ICompetitionsPage> = () => {
  return (
    <CompetitionProvider>
      <CompetitionsPageContainer>
        <NavBar />
        <Row className="m-2">
          <Col xs="3">
            <ActivityWidget />
          </Col>
          <Col xs="4">
            <LeaderboardWidget />
          </Col>
          <Col xs="3">
            <CompetitionStatusWidget />
          </Col>
          <Col xs="2">
            <JoinCompetitionWidget />
          </Col>
        </Row>
      </CompetitionsPageContainer>
    </CompetitionProvider>
  );
};

export default CompetitionsPage;
