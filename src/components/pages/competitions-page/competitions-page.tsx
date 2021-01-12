import React from 'react';

import NavBar from '../../shared/nav-bar/nav-bar';
import CompetitionsPageContainer from './competitions-page-container/competitions-page-container';

export interface ICompetitionsPage {}

export const CompetitionsPage: React.FC<ICompetitionsPage> = () => {
  return (
    <CompetitionsPageContainer>
      <NavBar />
      Competitions page
    </CompetitionsPageContainer>
  );
};

export default CompetitionsPage;
