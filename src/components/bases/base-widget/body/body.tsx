import './body.scss';

import React from 'react';

export interface IBody {}

export const Body: React.FC<IBody> = ({ children }) => {
  return <>{children}</>;
};

export default Body;
