import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from 'react-bootstrap';

import useJoinCompetitionQuery from '../../../../../queries/join-competition-query';
import BaseWidget from '../../../../bases/base-widget/base-widget';
import { useCompetitionState } from '../../competition-context';

export interface IRequestToJoinWidget {}

export const RequestToJoinWidget: React.FC<IRequestToJoinWidget> = () => {
  const joinCompetitionQuery = useJoinCompetitionQuery();
  const { user } = useAuth0();
  const { cid } = useCompetitionState();

  return (
    <>
      <BaseWidget>
        <BaseWidget.Body>
          <Button
            onClick={() => {
              joinCompetitionQuery({
                user_id: user?.sub ?? "",
                competition_id: cid,
              });
              setTimeout(() => window.location.reload(), 1000);
            }}
          >
            Join competition
          </Button>
        </BaseWidget.Body>
      </BaseWidget>
    </>
  );
};

export default RequestToJoinWidget;
