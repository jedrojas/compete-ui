import './user-activities.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { IActivity } from '../../../models/data-models';
import UserActivity from '../user-activity/user-activity';

export interface IUserActivities {
  activities: IActivity[] | null;
}

export const UserActivities: React.FC<IUserActivities> = ({ activities }) => {
  return activities ? (
    <>
      {/* TODO: Abstract this into its own component */}
      <Row className="m-2 py-2 font-montserrat user-activity-li uat-header">
        <Col
          xs="5"
          className="d-flex justify-content-center align-items-center"
        >
          <Col>{"Name"}</Col>
        </Col>

        <Col xs="2">
          <Col className="d-flex justify-content-end">
            {"Distance (meters)"}
          </Col>
        </Col>
        {/* 
        <Col xs="2">
          <Row xs="1">
            <Col className="d-flex justify-content-end">{"Points"}</Col>
          </Row>
        </Col> */}

        <Col xs="3">
          <Col className="d-flex justify-content-end">{"Date"}</Col>
        </Col>
      </Row>
      {activities.map((activity) => {
        return <UserActivity key={activity.id} activity={activity} />;
      })}
    </>
  ) : (
    <>"Loading"</>
  );
};

export default UserActivities;
