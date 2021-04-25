import './competitions-page-container.scss';

import React from 'react';

import BasePageContainer from '../../../bases/base-page-container/base-page-container';

export interface IHCompetitionsPageContainer {}

export const HCompetitionsPageContainer: React.FC<IHCompetitionsPageContainer> = ({
  children,
}) => {
  return <BasePageContainer>{children}</BasePageContainer>;
};

export default HCompetitionsPageContainer;
