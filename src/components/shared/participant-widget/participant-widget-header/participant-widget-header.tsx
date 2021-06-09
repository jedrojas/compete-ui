import './participant-widget-header.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import BaseNeoButton from '../../../bases/base-neo-button/base-neo-button';
import BaseWidget from '../../../bases/base-widget/base-widget';
import { useCompetitionState } from '../../../pages/competition-page/competition-context';
import { ICompetitionType } from '../../new-competition-modal/new-competition-modal';

export interface IParticipantWidgetHeader {
  listType: ICompetitionType;
  setListType: (type: ICompetitionType) => void;
}

export const ParticipantWidgetHeader: React.FC<IParticipantWidgetHeader> = ({
  listType,
  setListType,
}) => {
  const { type, isUserParticipant } = useCompetitionState();

  return (
    <BaseWidget.Header>
      <Row noGutters className="m-2">
        <Col xs="6">Participants</Col>
        {type === ICompetitionType.TEAM && isUserParticipant && (
          <Col xs="6" className="d-flex flex-row font-size-12">
            <BaseNeoButton
              onClick={() => setListType(ICompetitionType.TEAM)}
              className="mx-2"
              pressed={listType === ICompetitionType.TEAM}
            >
              Teams
            </BaseNeoButton>
            <BaseNeoButton
              onClick={() => setListType(ICompetitionType.INDIVIDUAL)}
              className="ml-2"
              pressed={listType === ICompetitionType.INDIVIDUAL}
            >
              Athletes
            </BaseNeoButton>
          </Col>
        )}
      </Row>
    </BaseWidget.Header>
  );
};

export default ParticipantWidgetHeader;
