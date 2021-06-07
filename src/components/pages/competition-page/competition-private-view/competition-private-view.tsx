import React from 'react';
import { Col, Row } from 'react-bootstrap';

import CompetitionStatusWidget from '../../../shared/competition-status-widget/competition-status-widget';
import ParticipantWidget from '../../../shared/participant-widget/participant-widget';
import { useCompetitionState } from '../competition-context';
import RequestToJoinWidget from './request-to-join-widget/request-to-join-widget';

export interface ICompetitionPrivateView {}

export const CompetitionPrivateView: React.FC<ICompetitionPrivateView> = () => {
  const { isUserAdmin, isUserParticipant } = useCompetitionState();

  if (!isUserAdmin && !isUserParticipant)
    return (
      <>
        <Row className="m-2">
          <Col xs="3">
            <CompetitionStatusWidget />
          </Col>
          <Col xs="3">
            <RequestToJoinWidget />
          </Col>
          <Col xs="3">
            <ParticipantWidget />
          </Col>
        </Row>
      </>
    );

  return null;
};

export default CompetitionPrivateView;
