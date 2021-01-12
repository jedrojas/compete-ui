import './live-laugh-compete.scss';
import '@fontsource/montserrat/700.css';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

export interface ILiveLaughCompete {}

export const LiveLaughCompete: React.FC<ILiveLaughCompete> = () => {
  return (
    <Col
      xs="6"
      className="position-absolute cursor-default noselect ml-3"
      style={{ top: "7%", left: "4%" }}
    >
      <Row
        className="font-montserrat color-teal mb-n4"
        style={{
          fontSize: "44px",
        }}
      >
        LIVE.
      </Row>
      <Row
        className="font-montserrat color-teal mb-n5"
        style={{
          fontSize: "56px",
        }}
      >
        LAUGH.
      </Row>
      <Row
        className="font-montserrat color-yellow mt-2"
        style={{
          fontSize: "100px",
        }}
      >
        COMPETE.
      </Row>
    </Col>
  );
};

export default LiveLaughCompete;
