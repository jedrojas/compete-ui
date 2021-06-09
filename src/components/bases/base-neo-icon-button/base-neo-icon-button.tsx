import './base-neo-icon-button.scss';

import classnames from 'classnames';
import React from 'react';

import BaseNeoButton from '../base-neo-button/base-neo-button';

export interface IBaseNeoIconButton {
  className?: string;
}

export const BaseNeoIconButton: React.FC<IBaseNeoIconButton> = ({
  children,
  className,
}) => {
  return (
    <BaseNeoButton
      className={classnames("neo-icon-btn", className)}
      width="40px"
      height="40px"
    >
      {children}
    </BaseNeoButton>
  );
};

export default BaseNeoIconButton;
