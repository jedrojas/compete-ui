import './multi-step-modal.scss';

import React, { PropsWithChildren, ReactElement } from 'react';

import { MultiStepModalProvider } from '../../contexts/multi-step-modal-context';
import BaseModal from '../base-modal/base-modal';

export interface IMultiStepModal<T> {
  show: boolean;
  setShow: (val: boolean) => void;
  payload?: T;
  setPayload?: (payload: T) => void;
  onSubmit?: (payload: T) => void;
}

export const MultiStepModal = <T extends Object>({
  show,
  setShow,
  payload,
  setPayload,
  onSubmit,
  children,
}: PropsWithChildren<IMultiStepModal<T>>) => {
  return (
    <MultiStepModalProvider
      show={show}
      setShow={setShow}
      payload={payload}
      setPayload={setPayload}
      onSubmit={onSubmit}
    >
      <BaseModal show={show} setShow={setShow}>
        {React.Children.toArray(children).map((step, index) =>
          React.cloneElement(step as ReactElement, { stepNum: index })
        )}
      </BaseModal>
    </MultiStepModalProvider>
  );
};

export default MultiStepModal;
