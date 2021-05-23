import './dates-not-set.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { CompetitionStatusComponentProps } from '../../../../models/data-models';

export const DatesNotSet: React.FC<CompetitionStatusComponentProps> = () => {
  return (
    <Row>
      <Col xs="12">Dates not set</Col>
      <Col xs="12">Choose start and end dates</Col>
    </Row>
  );
};

export default DatesNotSet;
