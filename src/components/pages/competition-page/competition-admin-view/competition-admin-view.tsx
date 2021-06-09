import React from 'react';
import { Col } from 'react-bootstrap';

import BasePageLayout from '../../../bases/base-page-layout/base-page-layout';
import LeaderboardWidget from '../../../shared/leaderboard-widget/leaderboard-widget';
import ParticipantWidget from '../../../shared/participant-widget/participant-widget';
import { useCompetitionState } from '../competition-context';
import AdminParticipantWidget from './admin-participant-widget/admin-participant-widget';
import CompetitionTimer from './competition-details/competition-details';

export interface ICompetitionAdminView {}

export const CompetitionAdminView: React.FC<ICompetitionAdminView> = () => {
  const { name, isUserAdmin } = useCompetitionState();

  return isUserAdmin ? (
    <BasePageLayout pageHeader={name}>
      <Col xs="4">
        <CompetitionTimer />
        <AdminParticipantWidget />
      </Col>
      <Col xs="4">
        <LeaderboardWidget />
      </Col>
      <Col xs="4">
        <ParticipantWidget />
      </Col>
    </BasePageLayout>
  ) : null;
};

export default CompetitionAdminView;
