import './side-bar.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import BaseNeoCard from '../../bases/base-neo-card/base-neo-card';

export interface ISideBar {}

export const SideBar: React.FC<ISideBar> = () => {
  // TODO: modularize this page
  return (
    <Col xs="3" className="h-100 pl-0">
      <BaseNeoCard
        className="d-flex flex-column h-100 w-100 position-sticky"
        rounded={false}
      >
        <Row
          noGutters
          className="font-montserrat color-teal m-3"
          style={{
            fontSize: "44px",
            borderBottom: "2px solid #ffc033",
          }}
        >
          COMPETE
        </Row>

        <NavLink
          to="/dashboard"
          className="side-bar-item no-hover-line"
          activeClassName="active"
        >
          <Row
            noGutters
            className="side-bar-item no-hover-line p-3 cursor-pointer"
          >
            <div className="bg-transparent">Dashboard</div>
          </Row>
        </NavLink>

        <NavLink to="/competitions" className="" activeClassName="active">
          <Row
            noGutters
            className="side-bar-item no-hover-line p-3 cursor-pointer"
          >
            <div className="bg-transparent">Competitions</div>
          </Row>
        </NavLink>

        <NavLink to="/teams" className="" activeClassName="active">
          <Row
            noGutters
            className="side-bar-item no-hover-line p-3 cursor-pointer"
          >
            <div className="bg-transparent">Teams</div>
          </Row>
        </NavLink>
      </BaseNeoCard>
    </Col>
  );
};

export default SideBar;
