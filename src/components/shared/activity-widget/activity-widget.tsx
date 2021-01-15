import './activity-widget.scss';

import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

import { IActivity } from '../../../models.ts/data-models';
import BaseWidget from '../../bases/base-widget/base-widget';
import { getUserActivitiesByCompetitionQuery } from '../../hooks/activity-query-hooks';
import PointsEarned from '../points-earned/points-earned';
import UserActivitiesSummary from '../user-activities-summary/user-activities-summary';
import UserActivities from '../user-activities/user-activities';

export interface IActivityWidget {}

export const ActivityWidget: React.FC<IActivityWidget> = ({ children }) => {
  const [data, setData] = useState<IActivity[]>();
  const [points, setPoints] = useState<number>();
  const [numActivities, setNumActivities] = useState<number>();

  useEffect(() => {
    getUserActivitiesByCompetitionQuery()
      .then((data) => {
        setData(data);
        setNumActivities(data.length);
        setPoints(
          data.reduce(
            (totalPoints, activity) => totalPoints + activity.points,
            0
          )
        );
      })
      .catch((e) => console.log("Error:", e));
  }, []);

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
          <UserActivities activities={data} />
        </Col>
      </BaseWidget.Body>
    </BaseWidget>
  );
};

export default ActivityWidget;
