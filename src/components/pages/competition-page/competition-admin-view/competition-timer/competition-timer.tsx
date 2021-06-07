import React from 'react';

import BaseWidget from '../../../../bases/base-widget/base-widget';
import { useCompetitionStatusComponent } from '../../../../shared/competition-status-widget/hooks';

export interface ICompetitionTimer {}

export const CompetitionTimer: React.FC<ICompetitionTimer> = () => {
  const StatusComponent = useCompetitionStatusComponent();

  return (
    <>
      <BaseWidget>
        <BaseWidget.Header>Status</BaseWidget.Header>
        <BaseWidget.Body>
          <StatusComponent isAdminPage />
        </BaseWidget.Body>
      </BaseWidget>
    </>
  );
};

export default CompetitionTimer;
