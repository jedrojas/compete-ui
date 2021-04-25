import './base-page-container.scss';

import classnames from 'classnames';
import React from 'react';
import { Container } from 'react-bootstrap';

export interface IBasePageContainer {
  flexRow?: boolean;
  className?: string;
}

export const BasePageContainer: React.FC<IBasePageContainer> = ({
  children,
  flexRow,
  className,
}) => {
  return (
    <Container
      fluid
      className={classnames("d-flex p-0 base-page-container", {
        "flex-row": flexRow,
        "flex-column": !flexRow,
        className: !!className,
      })}
    >
      {children}
    </Container>
  );
};

export default BasePageContainer;
