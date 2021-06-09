import './neo-button.scss';

import classnames from 'classnames';
import React from 'react';

import BaseNeoCard from '../base-neo-card/base-neo-card';

export interface INeoButton {
  className?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
}

export const NeoButton: React.FC<INeoButton> = ({
  children,
  className,
  onClick,
  width = "100%",
  height = "100%",
}) => {
  return (
    <BaseNeoCard
      onClick={onClick}
      className={classnames(className, "cursor-pointer")}
      width={width}
      height={height}
      isMouseDownClass="pressed-btn"
    >
      {children}
    </BaseNeoCard>
  );
};

export default NeoButton;
