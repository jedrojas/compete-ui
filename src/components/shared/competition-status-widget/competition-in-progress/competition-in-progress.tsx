import './competition-in-progress.scss';

import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { CompetitionStatusComponentProps } from '../../../../models.ts/data-models';
import { useCompetitionState } from '../../../pages/competitions-page/competition-context';

export const CompetitionInProgress: React.FC<CompetitionStatusComponentProps> = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return clearInterval(handle);
  }, []);

  const { end_date } = useCompetitionState();

  const endDate = new Date(end_date!);

  let msLeft = endDate.getTime() - time.getTime();

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
  msLeft = msLeft % msToSecondsVar;

  return (
    <Col>
      <Row>In Progress</Row>
      <Row>Time Left:</Row>
      <Row>
        <Col xs="3" className="text-center">
          Days
        </Col>
        <Col xs="3" className="text-center">
          Hours
        </Col>
        <Col xs="3" className="text-center">
          Minutes
        </Col>
        <Col xs="3" className="text-center">
          Seconds
        </Col>
      </Row>
      <Row>
        <Col xs="3" className="text-center">{`${daysLeft}`}</Col>
        <Col xs="3" className="text-center">{`${hoursLeft}`}</Col>
        <Col xs="3" className="text-center">{`${minutesLeft}`}</Col>
        <Col xs="3" className="text-center">{`${secondsLeft}`}</Col>
      </Row>
    </Col>
  );
};

export default CompetitionInProgress;
