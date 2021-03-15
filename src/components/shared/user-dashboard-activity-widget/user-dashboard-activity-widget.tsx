import './user-dashboard-activity-widget.scss';

import React from 'react';
import { Col } from 'react-bootstrap';

import BaseWidget from '../../bases/base-widget/base-widget';
import { useUserActivities } from '../../hooks/activities-queries';

export interface IUserDashboardActivityWidget {}

export const UserDashboardActivityWidget: React.FC<IUserDashboardActivityWidget> = () => {
  const { data } = useUserActivities();

  console.log("--All user activities--", data);

  return (
    <BaseWidget>
      <BaseWidget.Body>
        <Col xs="12">
          Activities will go here
          {/* <UserActivities activities={activities} /> */}
        </Col>
      </BaseWidget.Body>
    </BaseWidget>
  );
};

export default UserDashboardActivityWidget;
