import './section-menu-button.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

import BaseNeoButton from '../../bases/base-neo-button/base-neo-button';

export interface ISectionMenuButton {
  to: string;
}

export const SectionMenuButton: React.FC<ISectionMenuButton> = ({
  to,
  children,
}) => {
  return (
    <div className="no-hover-line">
      <NavLink to={to} activeClassName="active">
        <BaseNeoButton isNavLink>
          <div className="underlined bg-transparent">{children}</div>
        </BaseNeoButton>
      </NavLink>
    </div>
  );
};

export default SectionMenuButton;
