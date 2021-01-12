import './base-page-container.scss';

import React from 'react';
import { Container } from 'react-bootstrap';

export interface IBasePageContainer {}

export const BasePageContainer: React.FC<IBasePageContainer> = ({
  children,
}) => {
  return (
    <Container fluid className="d-flex flex-column p-0 base-page-container">
      {children}
    </Container>
  );
};

export default BasePageContainer;
