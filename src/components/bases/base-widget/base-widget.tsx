import './base-widget.scss';

import React from 'react';

import BaseNeoCard from '../base-neo-card/base-neo-card';
import Body, { IBody } from './body/body';
import Header, { IHeader } from './header/header';

export interface IBaseWidget {}

export interface IBaseWidgetComposition {
  Body: React.FC<IBody>;
  Header: React.FC<IHeader>;
}

export const BaseWidget: React.FC<IBaseWidget> & IBaseWidgetComposition = ({
  children,
}) => {
  return (
    <BaseNeoCard className="d-flex flex-column justify-content-center mx-2 my-4 p-2">
      {children}
    </BaseNeoCard>
  );
};

BaseWidget.Body = Body;
BaseWidget.Header = Header;

export default BaseWidget;
