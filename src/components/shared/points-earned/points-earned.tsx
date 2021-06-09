import './points-earned.scss';
import 'react-circular-progressbar/dist/styles.css';

import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import BaseDepressedNeoCard from '../../bases/base-depressed-neo-card/base-depressed-neo-card';
import BaseNeoCard from '../../bases/base-neo-card/base-neo-card';
import ActivityProgressBar from '../activity-progress-bar/activity-progress-bar';
import ProgressBarGradientSVG from '../progress-bar-gradient-svg/progress-bar-gradient-svg';

export interface IPointsEarned {
  points?: number;
  targetPoints?: number;
}

export const PointsEarned: React.FC<IPointsEarned> = ({
  points = 0,
  targetPoints,
}) => {
  const [userPoints, setUserPoints] = useState(points);

  useEffect(() => {
    setTimeout(() => {
      setUserPoints(points);
    }, 1000);
  }, [points]);

  return (
    <>
      <BaseDepressedNeoCard
        className="justify-content-center align-items-center my-3 mx-auto"
        height={"250px"}
        width={"250px"}
        style={{ borderRadius: "50%" }}
      >
        <BaseNeoCard
          height={"215px"}
          width={"215px"}
          style={{ borderRadius: "50%" }}
        >
          <ProgressBarGradientSVG />
          <Row className="w-100 p-1 mx-auto">
            <ActivityProgressBar
              targetPoints={targetPoints}
              userPoints={userPoints}
            >
              <Row className="text-center">
                <Col xs="12">
                  <h1 className="font-montserrat color-yellow">{userPoints}</h1>
                </Col>
                <Col xs="12" className="sub-title">
                  Points Earned
                </Col>
              </Row>
            </ActivityProgressBar>
          </Row>
        </BaseNeoCard>
      </BaseDepressedNeoCard>
    </>
  );
};

export default PointsEarned;
