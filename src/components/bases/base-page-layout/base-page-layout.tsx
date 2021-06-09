import './base-page-layout.scss';

import classnames from 'classnames';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { SideBar } from '../../shared/side-bar/side-bar';

export interface IBasePageLayout {
  flexRow?: boolean;
  className?: string;
  pageHeader?: string;
}

export const BasePageLayout: React.FC<IBasePageLayout> = ({
  children,
  flexRow,
  className,
  pageHeader,
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
        {pageHeader && (
          <Row className="justify-content-center w-100 mt-4">
            <h2>{pageHeader}</h2>
          </Row>
        )}
        <Col xs={{ span: "10", offset: "1" }} className="d-flex">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default BasePageLayout;
