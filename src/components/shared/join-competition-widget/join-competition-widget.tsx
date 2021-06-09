import './join-competition-widget.scss';

import React from 'react';
import { Col } from 'react-bootstrap';

import BaseNeoButton from '../../bases/base-neo-button/base-neo-button';
import BaseWidget from '../../bases/base-widget/base-widget';

export interface IJoinCompetitionWidget {}

export const JoinCompetitionWidget: React.FC<IJoinCompetitionWidget> = () => {
  return (
    <BaseWidget>
      <BaseWidget.Body>
        <BaseNeoButton>
          <Col xs="12" className="sub-title my-2">
            Request to Join
          </Col>
        </BaseNeoButton>
      </BaseWidget.Body>
    </BaseWidget>
  );
};

export default JoinCompetitionWidget;
