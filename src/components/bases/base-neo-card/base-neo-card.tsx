import './base-neo-card.scss';

import classnames from 'classnames';
import React, { CSSProperties, useState } from 'react';

export interface IBaseNeoCard {
  className?: string;
  rounded?: boolean;
  style?: CSSProperties;
  height?: string;
  width?: string;
  flexColumn?: boolean;
  onClick?: () => void;
  isMouseDownClass?: string;
}

export const BaseNeoCard: React.FC<IBaseNeoCard> = ({
  children,
  className,
  rounded = true,
  style = {},
  height,
  width,
  flexColumn,
  onClick,
  isMouseDownClass,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div
      className={classnames(
        "d-flex base-neo-card",
        className,
        isMouseDown ? isMouseDownClass : "",
        {
          "neo-card-rounded": rounded,
          "flex-column": flexColumn,
        }
      )}
      style={{
        height: `${height}`,
        width: `${width}`,
        ...style,
      }}
      onClick={handleClick}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      {children}
    </div>
  );
};

export default BaseNeoCard;
