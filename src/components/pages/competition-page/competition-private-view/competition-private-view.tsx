import React from 'react';
import { Col, Row } from 'react-bootstrap';

import BasePageLayout from '../../../bases/base-page-layout/base-page-layout';
import CompetitionStatusWidget from '../../../shared/competition-status-widget/competition-status-widget';
import ParticipantWidget from '../../../shared/participant-widget/participant-widget';
import { useCompetitionState } from '../competition-context';
import RequestToJoinWidget from './request-to-join-widget/request-to-join-widget';

export interface ICompetitionPrivateView {}

export const CompetitionPrivateView: React.FC<ICompetitionPrivateView> = () => {
  const { name, isUserAdmin, isUserParticipant } = useCompetitionState();

  console.log("--is user participant--", isUserParticipant);
  if (!isUserAdmin && !isUserParticipant)
    return (
      <BasePageLayout pageHeader={name}>
        <Row className="m-2 w-100">
          <Col xs="4">
            <CompetitionStatusWidget />
            <RequestToJoinWidget />
          </Col>

          <Col xs="4">
            <ParticipantWidget />
          </Col>
        </Row>
      </BasePageLayout>
    );

  return null;
};

export default CompetitionPrivateView;
