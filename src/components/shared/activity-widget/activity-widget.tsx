import './activity-widget.scss';

import React from 'react';
import { Col } from 'react-bootstrap';

import BaseNeoCard from '../../bases/base-neo-card/base-neo-card';
import BaseWidget from '../../bases/base-widget/base-widget';
import { useActivityWidgetData } from '../../hooks/activity-widget-hooks';
import { useCompetitionState } from '../../pages/competition-page/competition-context';
import PointsEarned from '../points-earned/points-earned';
import UserActivitiesSummary from '../user-activities-summary/user-activities-summary';
import UserActivities from '../user-activities/user-activities';

export interface IActivityWidget {}

export const ActivityWidget: React.FC<IActivityWidget> = ({ children }) => {
  const { cid } = useCompetitionState();

  const { activities, numActivities, points } = useActivityWidgetData(cid);

  const targetPoints = 5000;

  return (
    <BaseWidget>
      <BaseWidget.Body>
        <Col xs="12">
          <PointsEarned points={points} targetPoints={targetPoints} />
        </Col>
        <Col xs="12">
          <UserActivitiesSummary
            numActivities={numActivities}
            points={points}
            targetPoints={targetPoints}
          />
        </Col>
        <Col xs="12">
          <BaseNeoCard className="base-neo-card-depressed flex-column my-3">
            <UserActivities activities={activities} />
          </BaseNeoCard>
        </Col>
      </BaseWidget.Body>
    </BaseWidget>
  );
};

export default ActivityWidget;
