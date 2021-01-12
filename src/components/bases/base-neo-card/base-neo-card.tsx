import './base-neo-card.scss';

import classnames from 'classnames';
import React from 'react';

export interface IBaseNeoCard {
  className?: string;
  rounded?: boolean;
}

export const BaseNeoCard: React.FC<IBaseNeoCard> = ({
  children,
  className,
  rounded = true,
}) => {
  return (
    <div
      className={classnames("d-flex base-neo-card", className, {
        "neo-card-rounded": rounded,
      })}
    >
      {children}
    </div>
  );
};

export default BaseNeoCard;
