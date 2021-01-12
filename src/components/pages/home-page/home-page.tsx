import React from 'react';

import NavBar from '../../shared/nav-bar/nav-bar';
import HomePageContainer from './home-page-container/home-page-container';

export interface IHomePage {}

// currently unused
export const HomePage: React.FC<IHomePage> = () => {
  return (
    <HomePageContainer>
      <NavBar />
    </HomePageContainer>
  );
};

export default HomePage;
