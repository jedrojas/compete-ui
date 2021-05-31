import React from 'react';
import { Col, Row } from 'react-bootstrap';

import ActivityWidget from '../../../shared/activity-widget/activity-widget';
import CompetitionStatusWidget from '../../../shared/competition-status-widget/competition-status-widget';
import LeaderboardWidget from '../../../shared/leaderboard-widget/leaderboard-widget';
import { useCompetitionState } from '../competition-context';

export interface ICompetitionParticipantView {}

export const CompetitionParticipantView: React.FC<ICompetitionParticipantView> = () => {
  const { isUserParticipant } = useCompetitionState();

  if (isUserParticipant)
    return (
      <>
        {/* <NavBar /> */}
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
        </Row>
      </>
    );

  return null;
};

export default CompetitionParticipantView;
