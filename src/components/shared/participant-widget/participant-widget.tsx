import './participant-widget.scss';

import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import useGetCompetitionParticipantsQuery from '../../../queries/get-competition-participants-query';
import BaseWidget from '../../bases/base-widget/base-widget';
import { useCompetitionState } from '../../pages/competition-page/competition-context';
import LoadingSpinnerContainer from '../loading-spinner-container/loading-spinner-container';
import { ICompetitionType } from '../new-competition-modal/new-competition-modal';
import CreateTeamModal from './create-team-modal/create-team-modal';
import { ParticipantWidgetHeader } from './participant-widget-header/participant-widget-header';

export interface IParticipantWidget {}

export const ParticipantWidget: React.FC<IParticipantWidget> = () => {
  const { cid, usersTeamId, type } = useCompetitionState();
  const [listType, setListType] = useState(ICompetitionType.INDIVIDUAL);
  const { data, loading } = useGetCompetitionParticipantsQuery(cid, listType);
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);

  console.log('--data--', data)
  console.log('--utid--', usersTeamId)
  return (
    <>
      <BaseWidget>
        <ParticipantWidgetHeader
          listType={listType}
          setListType={setListType}
        />
        <LoadingSpinnerContainer loading={loading}>
          <BaseWidget.Body>
            {data?.length && !loading ? (
              listType === ICompetitionType.INDIVIDUAL ? (
                data.map((participant: any) => (
                  <Row className="m-2">{participant.first_name}</Row>
                ))
              ) : (
                data.map((team: any) => (
                  <Row className="m-2 align-items-center">
                    <Col xs="8" className="pl-0">
                      {team.name}
                    </Col>
                    <Col xs="4">
                      {!usersTeamId && (
                        <Button className="my-2">{"Join"}</Button>
                      )}
                                            {usersTeamId === team.team_id && (
                        <Button className="my-2">{"Leave"}</Button>
                      )}
                    </Col>
                  </Row>
                ))
              )
            ) : (
              <Col>No participants have joined yet</Col>
            )}
            {type === ICompetitionType.TEAM && listType === "team" && !usersTeamId && (
              <Row className="m-2">
                <Button onClick={() => setShowCreateTeamModal(true)}>
                  Create Team
                </Button>
              </Row>
            )}
          </BaseWidget.Body>
        </LoadingSpinnerContainer>
      </BaseWidget>

      <CreateTeamModal
        show={showCreateTeamModal}
        setShow={setShowCreateTeamModal}
      />
    </>
  );
};

export default ParticipantWidget;
