import './activity-progress-bar.scss';

import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';

export interface IActivityProgressBar {
  targetPoints?: number;
  userPoints?: number;
}

export const ActivityProgressBar: React.FC<IActivityProgressBar> = ({
  children,
  targetPoints,
  userPoints = 0,
}) => {
  return (
    <CircularProgressbarWithChildren
      minValue={0}
      maxValue={targetPoints}
      value={userPoints}
      circleRatio={0.75}
      styles={buildStyles({
        rotation: 0.625,
        pathColor: "url(#points-bar)",
      })}
    >
      {children}
    </CircularProgressbarWithChildren>
  );
};

export default ActivityProgressBar;
