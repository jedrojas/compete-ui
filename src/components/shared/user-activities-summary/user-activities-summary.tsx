import './user-activities-summary.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

export interface IUserActivitiesSummary {
  numActivities?: number;
  points?: number;
  targetPoints?: number;
}

export const UserActivitiesSummary: React.FC<IUserActivitiesSummary> = ({
  numActivities = 0,
  points = 0,
  targetPoints,
}) => {
  return (
    <Row className="text-center" style={{ fontFamily: "Montserrat" }}>
      <Col xs="6">
        <Row xs="1">
          <Col>
            <h4>{`${numActivities}`}</h4>
          </Col>
          <Col className="sub-title">Activities Completed</Col>
        </Row>
      </Col>
      <Col xs="6">
        <Row xs="1">
          <Col>
            <h4>{`${points} / ${targetPoints}`}</h4>
          </Col>
          <Col className="sub-title">Target Progress</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UserActivitiesSummary;
