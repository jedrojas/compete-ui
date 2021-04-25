import './time-left.scss';

import React from 'react';

import { CompetitionStatus } from '../../../models.ts/enums';
import { useStatus } from '../../pages/user-competitions-page/user-competition-context';

export interface ITimeLeft {
  start_date?: Date;
  end_date?: Date;
}

export const TimeLeft: React.FC<ITimeLeft> = ({ start_date, end_date }) => {
  const endDate = end_date ? new Date(end_date) : null;
  const status = useStatus(start_date, end_date);
  let res = "";

  if (status === CompetitionStatus.NOT_STARTED) {
    res += "Starts in ";
  }
  if (status === CompetitionStatus.IN_PROGRESS) {
    res += "Ends in ";
  }

  const currTime = new Date();

  let msLeft = endDate!.getTime() - currTime.getTime();

  const msToDaysVar = 1000 * 60 * 60 * 24;
  const msToHoursVar = 1000 * 60 * 60;
  const msToMinutesVar = 1000 * 60;
  const msToSecondsVar = 1000;

  const daysLeft = Math.floor(msLeft / msToDaysVar);
  msLeft = msLeft % msToDaysVar;
  const hoursLeft = Math.floor(msLeft / msToHoursVar);
  msLeft = msLeft % msToHoursVar;
  const minutesLeft = Math.floor(msLeft / msToMinutesVar);
  msLeft = msLeft % msToMinutesVar;
  const secondsLeft = Math.floor(msLeft / msToSecondsVar);

  if (daysLeft > 1) {
    res += `${daysLeft} days`;
  } else if (hoursLeft > 1) {
    res += `${hoursLeft} hours`;
  } else if (minutesLeft > 1) {
    res += `${minutesLeft} minutes`;
  } else if (secondsLeft > 1) {
    res += `${secondsLeft} seconds`;
  }

  return <h4>{res}</h4>;
};

export default TimeLeft;
