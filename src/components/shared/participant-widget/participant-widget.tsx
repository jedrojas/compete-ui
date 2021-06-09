import './participant-widget.scss';

import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import useGetCompetitionParticipantsQuery from '../../../queries/get-competition-participants-query';
import useJoinTeamQuery from '../../../queries/join-team-query';
import useLeaveTeamQuery from '../../../queries/leave-team-query';
import BaseWidget from '../../bases/base-widget/base-widget';
import { useCompetitionState } from '../../pages/competition-page/competition-context';
import LoadingSpinnerContainer from '../loading-spinner-container/loading-spinner-container';
import { ICompetitionType } from '../new-competition-modal/new-competition-modal';
import CreateTeamModal from './create-team-modal/create-team-modal';
import { ParticipantWidgetHeader } from './participant-widget-header/participant-widget-header';

export interface IParticipantWidget {}

export const ParticipantWidget: React.FC<IParticipantWidget> = () => {
  const { cid, currTeamId, userTeamId, type } = useCompetitionState();
  const [listType, setListType] = useState(ICompetitionType.INDIVIDUAL);
  const { data, loading } = useGetCompetitionParticipantsQuery(cid, listType);
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const joinTeamQuery = useJoinTeamQuery();
  const leaveTeamQuery = useLeaveTeamQuery();

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
                    <Col xs="4" className="d-flex justify-content-end pr-0">
                      {!currTeamId && (
                        <Button
                          className="my-2"
                          onClick={() =>
                            joinTeamQuery({ tid: team.team_id }).then(() =>
                              window.location.reload()
                            )
                          }
                        >
                          {"Join"}
                        </Button>
                      )}
                      {currTeamId === team.team_id && (
                        <Button
                          className="my-2"
                          onClick={() =>
                            leaveTeamQuery({ utid: userTeamId }).then(() =>
                              window.location.reload()
                            )
                          }
                        >
                          {"Leave"}
                        </Button>
                      )}
                    </Col>
                  </Row>
                ))
              )
            ) : (
              <Col>No teams have joined yet</Col>
            )}
            {type === ICompetitionType.TEAM &&
              listType === "team" &&
              !currTeamId && (
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
