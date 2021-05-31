import React from 'react';

import BasePageLayout from '../../bases/base-page-layout/base-page-layout';
import CompetitionAdminView from './competition-admin-view/competition-admin-view';
import { CompetitionProvider } from './competition-context';
import CompetitionParticipantView from './competition-participant-view/competition-participant-view';
import CompetitionPrivateView from './competition-private-view/competition-private-view';

export interface ICompetitionPage {}

export const CompetitionPage: React.FC<ICompetitionPage> = () => {
  return (
    <CompetitionProvider>
      <BasePageLayout>
        <CompetitionAdminView />
        <CompetitionParticipantView />
        <CompetitionPrivateView />
      </BasePageLayout>
    </CompetitionProvider>
  );
};

export default CompetitionPage;
