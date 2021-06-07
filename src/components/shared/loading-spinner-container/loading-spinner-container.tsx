import React from 'react';
import { Spinner } from 'react-bootstrap';

export interface ILoadingSpinnerContainer {
  loading: boolean;
}

export const LoadingSpinnerContainer: React.FC<ILoadingSpinnerContainer> = ({
  children,
  loading,
}) => {
  if (loading) {
    return <Spinner animation="grow" />;
  }

  return <>{children}</>;
};

export default LoadingSpinnerContainer;
