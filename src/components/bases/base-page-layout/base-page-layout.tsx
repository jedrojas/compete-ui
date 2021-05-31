import './base-page-layout.scss';

import classnames from 'classnames';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { SideBar } from '../../shared/side-bar/side-bar';

export interface IBasePageLayout {
  flexRow?: boolean;
  className?: string;
}

export const BasePageLayout: React.FC<IBasePageLayout> = ({
  children,
  flexRow,
  className,
}) => {
  return (
    <Container
      fluid
      className={classnames("d-flex p-0 base-page-container", {
        "flex-row": flexRow,
        "flex-column": !flexRow,
        className: !!className,
      })}
    >
      <Row noGutters>
        <SideBar />
        <Col xs="11" className="position-absolute" style={{ left: "75px" }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default BasePageLayout;
