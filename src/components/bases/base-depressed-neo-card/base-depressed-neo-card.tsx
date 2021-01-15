import './base-depressed-neo-card.scss';

import classnames from 'classnames';
import React, { CSSProperties } from 'react';

import BaseNeoCard from '../base-neo-card/base-neo-card';

export interface IBaseDepressedNeoCard {
  className?: string;
  rounded?: boolean;
  style?: CSSProperties;
  height?: string;
  width?: string;
}

export const BaseDepressedNeoCard: React.FC<IBaseDepressedNeoCard> = ({
  children,
  className,
  style = {},
  height,
  width,
}) => {
  return (
    <BaseNeoCard
      className={classnames("base-neo-card-depressed", className)}
      height={height}
      width={width}
      style={style}
    >
      {children}
    </BaseNeoCard>
  );
};

export default BaseDepressedNeoCard;
