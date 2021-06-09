import './side-bar.scss';

import { faFlagCheckered, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import BaseNeoCard from '../../bases/base-neo-card/base-neo-card';

export interface ISideBar {}

export const SideBar: React.FC<ISideBar> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Row
      noGutters
      className="side-bar position-absolute"
      style={{ height: "100vh" }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <BaseNeoCard
        className="d-flex flex-column overflow-hidden h-100 position-sticky"
        rounded={false}
      >
        <div
          // noGutters
          className="font-montserrat color-teal my-3 pl-2 px-auto cursor-pointer justify-content-center"
          style={{
            fontSize: "44px",
            borderBottom: "2px solid #ffc033",
          }}
        >
          <span>C</span>
          <span className={classnames("fade-title", { show: isExpanded })}>
            ompete
          </span>
        </div>

        <NavLink to="/dashboard" className="px-auto" activeClassName="active">
          <Row
            noGutters
            className="side-bar-item no-hover-line p-3 cursor-pointer justify-content-center"
            style={{ width: "300px" }}
          >
            <Col xs="2">
              <FontAwesomeIcon icon={faHome} />
            </Col>
            <Col xs="10">Dashboard</Col>
          </Row>
        </NavLink>

        <NavLink
          to="/competitions"
          className="px-auto"
          activeClassName="active"
        >
          <Row
            noGutters
            className="side-bar-item no-hover-line p-3 cursor-pointer justify-content-center"
            style={{ width: "300px" }}
          >
            <Col xs="2">
              <FontAwesomeIcon icon={faFlagCheckered} />
            </Col>
            <Col xs="10">Competitions</Col>
          </Row>
        </NavLink>

        <NavLink to="/teams" className="px-auto" activeClassName="active">
          <Row
            noGutters
            className="side-bar-item no-hover-line p-3 cursor-pointer justify-content-center"
            style={{ width: "300px" }}
          >
            <Col xs="2">
              <FontAwesomeIcon icon={faUsers} />
            </Col>
            <Col xs="10">Teams</Col>
          </Row>
        </NavLink>
      </BaseNeoCard>
    </Row>
  );
};

export default SideBar;
