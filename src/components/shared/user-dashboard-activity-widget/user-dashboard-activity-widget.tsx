import './user-dashboard-activity-widget.scss';

import React from 'react';
import { Col } from 'react-bootstrap';

import BaseWidget from '../../bases/base-widget/base-widget';
import { useUserActivities } from '../../hooks/activities-queries';
import UserActivities from '../user-activities/user-activities';

export interface IUserDashboardActivityWidget {}

export const UserDashboardActivityWidget: React.FC<IUserDashboardActivityWidget> = () => {
  const { data } = useUserActivities();

  return (
    <BaseWidget>
      <BaseWidget.Body>
        <Col xs="12">
          <UserActivities activities={data} />
        </Col>
      </BaseWidget.Body>
    </BaseWidget>
  );
};

export default UserDashboardActivityWidget;
