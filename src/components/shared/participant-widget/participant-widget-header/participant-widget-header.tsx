import './participant-widget-header.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import BaseNeoButton from '../../../bases/base-neo-button/base-neo-button';
import BaseWidget from '../../../bases/base-widget/base-widget';
import { ICompetitionType } from '../../new-competition-modal/new-competition-modal';

export interface IParticipantWidgetHeader {
  listType: ICompetitionType;
  setListType: (type: ICompetitionType) => void;
}

export const ParticipantWidgetHeader: React.FC<IParticipantWidgetHeader> = ({
  listType,
  setListType,
}) => {
  return (
    <BaseWidget.Header>
      <Row noGutters>
        <Col xs="6">Participants</Col>
        <Col xs="6" className="d-flex flex-row font-size-12">
          <BaseNeoButton
            onClick={() => setListType(ICompetitionType.TEAM)}
            className="mx-2"
            pressed={listType === ICompetitionType.TEAM}
          >
            Team
          </BaseNeoButton>
          <BaseNeoButton
            onClick={() => setListType(ICompetitionType.INDIVIDUAL)}
            className="ml-2"
            pressed={listType === ICompetitionType.INDIVIDUAL}
          >
            Athlete
          </BaseNeoButton>
        </Col>
      </Row>
    </BaseWidget.Header>
  );
};

export default ParticipantWidgetHeader;
