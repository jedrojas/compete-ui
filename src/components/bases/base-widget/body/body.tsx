import './body.scss';

import React from 'react';

export interface IBody {}

export const Body: React.FC<IBody> = ({ children }) => {
  return (
    <div className="d-flex flex-column justify-content-center">{children}</div>
  );
};

export default Body;
