import './user-competitions-page-container.scss';

import React from 'react';

import BasePageContainer from '../../../bases/base-page-container/base-page-container';

export interface IUserCompetitionsPageContainer {}

export const UserCompetitionsPageContainer: React.FC<IUserCompetitionsPageContainer> = ({
  children,
}) => {
  return <BasePageContainer flexRow>{children}</BasePageContainer>;
};

export default UserCompetitionsPageContainer;
