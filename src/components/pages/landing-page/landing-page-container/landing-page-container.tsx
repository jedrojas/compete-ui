import './landing-page-container.scss';

import React from 'react';

import BasePageContainer from '../../../bases/base-page-container/base-page-container';

export interface ILandingPageContainer {}

export const LandingPageContainer: React.FC<ILandingPageContainer> = ({
  children,
}) => {
  return <BasePageContainer>{children}</BasePageContainer>;
};

export default LandingPageContainer;
