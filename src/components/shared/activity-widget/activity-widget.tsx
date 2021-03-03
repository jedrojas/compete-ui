import './activity-widget.scss';

import React from 'react';
import { Col } from 'react-bootstrap';

import BaseWidget from '../../bases/base-widget/base-widget';
import { useActivityWidgetData } from '../../hooks/activity-widget-hooks';
import { useCompetitionState } from '../../pages/competitions-page/competition-context';
import PointsEarned from '../points-earned/points-earned';
import UserActivitiesSummary from '../user-activities-summary/user-activities-summary';
import UserActivities from '../user-activities/user-activities';

export interface IActivityWidget {}

export const ActivityWidget: React.FC<IActivityWidget> = ({ children }) => {
  const { cid } = useCompetitionState();

  // TODO: consider creating adding a user competition activities
  // context for these variables
  const { activities, numActivities, points } = useActivityWidgetData(cid);

  // TODO: this should be added to user_competition table
  // If no targetPoints, prompt user to set goal
  // default progress percentage to 5%, but display correct points
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
          <UserActivities activities={activities} />
        </Col>
      </BaseWidget.Body>
    </BaseWidget>
  );
};

export default ActivityWidget;
