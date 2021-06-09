import './competition-status-widget.scss';

import React from 'react';
import { Col } from 'react-bootstrap';

import BaseWidget from '../../bases/base-widget/base-widget';
import { useCompetitionState } from '../../pages/competition-page/competition-context';
import { useCompetitionStatusComponent } from './hooks';

export interface ICompetitionStatusWidget {}

export const CompetitionStatusWidget: React.FC<ICompetitionStatusWidget> = () => {
  const StatusComponent = useCompetitionStatusComponent();
  const { type } = useCompetitionState();

  return (
    <BaseWidget>
      <BaseWidget.Header>
        <Col xs="12" className="my-2">
          Status
        </Col>
      </BaseWidget.Header>
      <BaseWidget.Body>
        <Col xs="12" className="sub-title my-2">
          <StatusComponent />
        </Col>
        <Col xs="12" className="sub-title my-2">
          <span>{`Competition type: ${type}`}</span>
        </Col>
      </BaseWidget.Body>
    </BaseWidget>
  );
};

export default CompetitionStatusWidget;
