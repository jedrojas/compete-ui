import './section-menu.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import SectionMenuButton from '../section-menu-button/section-menu-button';

export interface ISectionMenu {}

export const SectionMenu: React.FC<ISectionMenu> = () => {
  return (
    <Col xs="4">
      <Row className="my-2">
        <Col xs="4">
          <SectionMenuButton to="/dashboard">Dashboard</SectionMenuButton>
        </Col>
        <Col xs="4">
          <SectionMenuButton to="/competitions">Competitions</SectionMenuButton>
        </Col>
        <Col xs="4">
          <SectionMenuButton to="/teams">Teams</SectionMenuButton>
        </Col>
      </Row>
    </Col>
  );
};

export default SectionMenu;
