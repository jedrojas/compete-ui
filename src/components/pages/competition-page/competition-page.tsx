import React from 'react';

import { CompetitionProvider } from '../../contexts/competition-context';

export interface ICompetitionPage {}

export const CompetitionPage: React.FC<ICompetitionPage> = () => {
  return (
    <CompetitionProvider>
      {/* // <CompetitionAdminPage />
  // <CompetitionParticipantPage />
  // <CompetitionPrivatePage /> */}
    </CompetitionProvider>
  );
};

export default CompetitionPage;
