import './base-widget.scss';

import React from 'react';

import BaseNeoCard from '../base-neo-card/base-neo-card';
import Body, { IBody } from './body/body';

export interface IBaseWidget {}

export interface IBaseWidgetComposition {
  Body: React.FC<IBody>;
}

// components:
// Header
// Body
// Footer
export const BaseWidget: React.FC<IBaseWidget> & IBaseWidgetComposition = ({
  children,
}) => {
  return <BaseNeoCard className="m-2 p-2">{children}</BaseNeoCard>;
};

BaseWidget.Body = Body;

export default BaseWidget;
