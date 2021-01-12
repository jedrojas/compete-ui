import './points-earned.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

export interface IPointsEarned {
  points?: number;
}

export const PointsEarned: React.FC<IPointsEarned> = ({ children, points }) => {
  return (
    <Row className="w-100 text-center mx-0">
      <Col xs="12">Points Earned</Col>
      {/* TODO: add loading component */}
      <Col xs="12">{points ?? "Loading"}</Col>
    </Row>
  );
};

export default PointsEarned;
