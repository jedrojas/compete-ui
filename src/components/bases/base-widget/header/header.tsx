import './header.scss';

import React from 'react';

export interface IHeader {}

export const Header: React.FC<IHeader> = ({ children }) => {
  return (
    <div className="d-flex flex-column justify-content-center font-montserrat color-teal widget-header">
      {children}
    </div>
  );
};

export default Header;
