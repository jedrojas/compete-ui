import React from 'react';
import { Col } from 'react-bootstrap';

import ActivityWidget from '../../shared/activity-widget/activity-widget';
import NavBar from '../../shared/nav-bar/nav-bar';
import DashboardPageContainer from './dashboard-page-container/dashboard-page-container';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
  return (
    <DashboardPageContainer>
      <NavBar />
      <Col xs="3" className="m-2">
        <ActivityWidget>Hi there</ActivityWidget>
      </Col>
    </DashboardPageContainer>
  );
};

export default DashboardPage;
