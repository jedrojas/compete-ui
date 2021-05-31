import React from 'react';

import { useCompetitionState } from '../competition-context';

export interface ICompetitionPrivateView {}

export const CompetitionPrivateView: React.FC<ICompetitionPrivateView> = () => {
  const { isUserAdmin, isUserParticipant } = useCompetitionState();

  if (!isUserAdmin && !isUserParticipant) return <div>comp private view</div>;

  return null;
};

export default CompetitionPrivateView;
