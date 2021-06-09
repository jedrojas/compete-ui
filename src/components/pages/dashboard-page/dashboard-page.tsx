import '../../../styles/variables.scss';

import React from 'react';
import { Col } from 'react-bootstrap';

import BasePageLayout from '../../bases/base-page-layout/base-page-layout';
import UserDashboardActivityWidget from '../../shared/user-dashboard-activity-widget/user-dashboard-activity-widget';
import UserDashboardCompetitionsWidget from './user-dashboard-competition-widget/user-dashboard-competition-widget';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
  return (
    <BasePageLayout pageHeader="Dashboard">
      <Col className="d-flex flex-row">
        <Col xs="4">
          <UserDashboardCompetitionsWidget />
        </Col>

        <Col xs="4">
          <UserDashboardActivityWidget />
        </Col>

        {/* <Row>{`User: ${sqlUser?.last_name}, ${sqlUser?.first_name}`}</Row> */}
      </Col>
    </BasePageLayout>
  );
};

export default DashboardPage;
