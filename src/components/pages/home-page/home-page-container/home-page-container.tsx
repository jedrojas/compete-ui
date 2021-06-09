import './home-page-container.scss';

import React from 'react';

import BasePageContainer from '../../../bases/base-page-container/base-page-container';

export interface IHomePageContainer {}

export const HomePageContainer: React.FC<IHomePageContainer> = ({
  children,
}) => {
  return <BasePageContainer>{children}</BasePageContainer>;
};

export default HomePageContainer;
