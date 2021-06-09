import './base-page-layout.scss';

import { useAuth0 } from '@auth0/auth0-react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';

import { useUserState } from '../../contexts/user-context';
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
  const { logout } = useAuth0();
  const { user } = useUserState();

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

        <Row className="w-100 mt-4">
          <Col
            xs={{ span: 6, offset: 3 }}
            className="d-flex justify-content-center"
          >
            {pageHeader && <h2>{pageHeader}</h2>}
          </Col>
          <Col
            xs={3}
            className="d-flex justify-content-end align-items-center color-teal"
          >
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size={"2x"}
                  className="cursor-pointer"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.ItemText>
                  {`${user?.last_name}, ${user?.first_name}`}
                </Dropdown.ItemText>
                <Dropdown.Item
                  onClick={() => logout({ returnTo: "http://localhost:3001/" })}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Col xs={{ span: "10", offset: "1" }} className="d-flex">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default BasePageLayout;
