import './activity-widget.scss';

import React, { useEffect, useState } from 'react';

import { IActivity } from '../../../models.ts/data-models';
import BaseWidget from '../../bases/base-widget/base-widget';
import { getUserActivitiesQuery } from '../../hooks/activity-query-hooks';
import PointsEarned from '../points-earned/points-earned';

export interface IActivityWidget {}

export const ActivityWidget: React.FC<IActivityWidget> = ({ children }) => {
  const [data, setData] = useState<IActivity[]>();
  const [points, setPoints] = useState<number>();

  useEffect(() => {
    getUserActivitiesQuery()
      .then((data) => {
        console.log("--data--", data);
        setData(data);
        setPoints(
          data.reduce(
            (totalPoints, activity) => totalPoints + activity.points,
            0
          )
        );
      })
      .catch((e) => console.log("Error:", e));
  }, []);

  console.log("--current state--", data, points);

  return (
    <BaseWidget>
      <BaseWidget.Body>
        <PointsEarned points={points} />
      </BaseWidget.Body>
      {/* {children} */}
    </BaseWidget>
  );
};

export default ActivityWidget;
