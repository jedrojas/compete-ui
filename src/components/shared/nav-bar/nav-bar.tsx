import './nav-bar.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import BaseNeoCard from '../../bases/base-neo-card/base-neo-card';
import SectionMenu from '../section-menu/section-menu';
import UserMenu from '../user-menu/user-menu';

export interface INavBar {}

export const NavBar: React.FC<INavBar> = () => {
  return (
    <BaseNeoCard
      className="w-100 align-items-center position-sticky nav-bar"
      rounded={false}
    >
      <Row className="w-100 align-items-center">
        <Col xs="4"></Col>
        <SectionMenu />
        <UserMenu />
      </Row>
    </BaseNeoCard>
  );
};

export default NavBar;
