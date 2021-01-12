import React from 'react';

import { LandingPageContainer } from './landing-page-container/landing-page-container';
import LandingPageMenu from './landing-page-menu/landing-page-menu';
import LiveLaughCompete from './live-laugh-compete/live-laugh-compete';

export interface ILandingPage {}

export const LandingPage: React.FC<ILandingPage> = () => {
  return (
    <LandingPageContainer>
      <LiveLaughCompete />
      <LandingPageMenu />
    </LandingPageContainer>
  );
};

export default LandingPage;
