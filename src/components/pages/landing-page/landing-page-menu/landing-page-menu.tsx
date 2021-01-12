import './landing-page-menu.scss';

import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

export interface ILandingPageMenu {}

export const LandingPageMenu: React.FC<ILandingPageMenu> = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Col
      xs="12"
      className="d-flex position-absolute justify-content-center"
      style={{
        color: "#111111",
        fontSize: "48px",
        fontFamily: "Montserrat",
        top: "60%",
      }}
    >
      <Row className="flex-row justify-content-between w-75">
        <Col xs="4" className="d-flex justify-content-center">
          <span className="cursor-pointer landing-page-btn">About</span>
        </Col>
        <Col xs="4" className="d-flex justify-content-center">
          <span
            className="cursor-pointer landing-page-btn"
            onClick={() => loginWithRedirect()}
          >
            Login
          </span>
        </Col>
        <Col xs="4" className="d-flex justify-content-center">
          <span className="cursor-pointer landing-page-btn">Explore</span>
        </Col>
      </Row>
    </Col>
  );
};

export default LandingPageMenu;
