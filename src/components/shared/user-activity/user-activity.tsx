import './user-activity.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import format from 'date-fns/format';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { IActivity, sbrIconMap } from '../../../models/data-models';

export interface IUserActivity {
  activity: IActivity;
}

export const UserActivity: React.FC<IUserActivity> = ({ activity }) => {
  return (
    <Row className="m-2 font-montserrat user-activity-li">
      <Col xs="5" className="d-flex justify-content-center align-items-center">
        <Row>
          <Col xs="1">
            <FontAwesomeIcon
              size={"1x"}
              icon={sbrIconMap.get(activity.type)!}
              className={classnames({
                "fa-flip-horizontal": activity.type === "swim",
              })}
            />
          </Col>
          <Col>{activity.name ?? "Lorem ipsum"}</Col>
        </Row>
      </Col>

      <Col xs="2">
        <Row xs="1">
          <Col className="d-flex justify-content-end">{activity.distance}</Col>
        </Row>
      </Col>

      <Col xs="2">
        <Row xs="1">
          <Col className="d-flex justify-content-end">{activity.points}</Col>
        </Row>
      </Col>

      <Col xs="3">
        <Row xs="1">
          <Col className="d-flex justify-content-end">
            {format(new Date(activity.end_date), "MM/dd/yy")}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UserActivity;
