import './competition-not-started.scss';

import React from 'react';

import { CompetitionStatusComponentProps } from '../../../../models/data-models';

export const CompetitionNotStarted: React.FC<CompetitionStatusComponentProps> = () => {
  return <>Competition starts in __ days</>;
};

export default CompetitionNotStarted;
