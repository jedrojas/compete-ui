import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { CompetitionStatus } from '../../../../../models/enums';
import useJoinCompetitionQuery from '../../../../../queries/join-competition-query';
import BaseWidget from '../../../../bases/base-widget/base-widget';
import { useCompetitionState } from '../../competition-context';

export interface IAdminParticipantWidget {}

export const AdminParticipantWidget: React.FC<IAdminParticipantWidget> = () => {
  const { cid, status, isUserParticipant } = useCompetitionState();
  const joinCompetitionQuery = useJoinCompetitionQuery();
  const { user } = useAuth0();
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <>
      <BaseWidget>
        <BaseWidget.Body>
          {/* Join as participant button */}
          {!isUserParticipant &&
            (status === CompetitionStatus.NOT_SET ||
              status === CompetitionStatus.NOT_STARTED) && (
              <Button
                onClick={() => {
                  joinCompetitionQuery({
                    user_id: user.sub,
                    competition_id: cid,
                  });
                  setTimeout(() => window.location.reload(), 1000);
                }}
              >
                Join as participant
              </Button>
            )}
          {/* Go to participant view button */}
          {isUserParticipant && (
            <Button
              onClick={() =>
                history.push(url.substring(0, url.lastIndexOf("/")))
              }
            >
              View my stats
            </Button>
          )}
        </BaseWidget.Body>
      </BaseWidget>
    </>
  );
};

export default AdminParticipantWidget;
