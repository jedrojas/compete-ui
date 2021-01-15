import React from 'react';

import NavBar from '../../shared/nav-bar/nav-bar';
import DashboardPageContainer from './dashboard-page-container/dashboard-page-container';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
  return (
    <DashboardPageContainer>
      <NavBar />
    </DashboardPageContainer>
  );
};

export default DashboardPage;
