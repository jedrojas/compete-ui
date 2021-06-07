import './participant-widget.scss';

import React, { useState } from 'react';

import useGetCompetitionParticipantsQuery from '../../../queries/get-competition-participants-query';
import BaseWidget from '../../bases/base-widget/base-widget';
import { useCompetitionState } from '../../pages/competition-page/competition-context';
import LoadingSpinnerContainer from '../loading-spinner-container/loading-spinner-container';
import { ICompetitionType } from '../new-competition-modal/new-competition-modal';
import { ParticipantWidgetHeader } from './participant-widget-header/participant-widget-header';

export interface IParticipantWidget {}

export const ParticipantWidget: React.FC<IParticipantWidget> = () => {
  const { cid } = useCompetitionState();
  const [listType, setListType] = useState(ICompetitionType.INDIVIDUAL);
  const { data, loading } = useGetCompetitionParticipantsQuery(cid, listType);

  return (
    <BaseWidget>
      <ParticipantWidgetHeader listType={listType} setListType={setListType} />
      <LoadingSpinnerContainer loading={loading}>
        <BaseWidget.Body>
          {data?.length && !loading
            ? data.map((participant) => <div>{participant.first_name}</div>)
            : "No participants have joined yet"}
        </BaseWidget.Body>
      </LoadingSpinnerContainer>
    </BaseWidget>
  );
};

export default ParticipantWidget;
