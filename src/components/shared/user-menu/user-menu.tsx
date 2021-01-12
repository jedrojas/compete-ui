import './user-menu.scss';

import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import BaseNeoIconButton from '../../bases/base-neo-icon-button/base-neo-icon-button';

export interface IUserMenu {}

export const UserMenu: React.FC<IUserMenu> = () => {
  return (
    <Col xs="4" className="d-flex justify-content-end">
      <Row className="my-2">
        <BaseNeoIconButton>
          <FontAwesomeIcon icon={faCog} color="#3b7080" />
        </BaseNeoIconButton>
      </Row>
    </Col>
  );
};

export default UserMenu;
