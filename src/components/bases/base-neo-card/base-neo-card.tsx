import './base-neo-card.scss';

import classnames from 'classnames';
import React, { CSSProperties } from 'react';

export interface IBaseNeoCard {
  className?: string;
  rounded?: boolean;
  style?: CSSProperties;
  height?: string;
  width?: string;
}

export const BaseNeoCard: React.FC<IBaseNeoCard> = ({
  children,
  className,
  rounded = true,
  style = {},
  height,
  width,
}) => {
  return (
    <div
      className={classnames("d-flex base-neo-card", className, {
        "neo-card-rounded": rounded,
      })}
      style={{
        height: `${height}`,
        width: `${width}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default BaseNeoCard;
