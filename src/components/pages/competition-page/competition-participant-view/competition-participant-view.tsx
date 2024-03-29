import React, { useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useHistory, useRouteMatch } from 'react-router-dom';

import BasePageLayout from '../../../bases/base-page-layout/base-page-layout';
import BaseWidget from '../../../bases/base-widget/base-widget';
import ActivityWidget from '../../../shared/activity-widget/activity-widget';
import CompetitionStatusWidget from '../../../shared/competition-status-widget/competition-status-widget';
import LeaderboardWidget from '../../../shared/leaderboard-widget/leaderboard-widget';
import ParticipantWidget from '../../../shared/participant-widget/participant-widget';
import { useCompetitionState } from '../competition-context';

export interface ICompetitionParticipantView {}

export const CompetitionParticipantView: React.FC<ICompetitionParticipantView> = () => {
  const { name, isUserAdmin, isUserParticipant } = useCompetitionState();
  const history = useHistory();
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!isUserParticipant && isUserAdmin) {
      history.push(`${url.replace(/\/$/, "")}/admin`);
    }
  }, [history, isUserAdmin, isUserParticipant, url]);

  if (isUserParticipant) {
    return (
      <BasePageLayout pageHeader={name}>
        <Col xs="4">
          {isUserAdmin && (
            <BaseWidget>
              <Button
                onClick={() => history.push(`${url.replace(/\/$/, "")}/admin`)}
              >
                Admin View
              </Button>
            </BaseWidget>
          )}
          <ActivityWidget />
          <ParticipantWidget />
        </Col>
        <Col xs="4">
          <LeaderboardWidget />
        </Col>
        <Col xs="4">
          <CompetitionStatusWidget />
        </Col>
      </BasePageLayout>
    );
  }

  return null;
};

export default CompetitionParticipantView;
