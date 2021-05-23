import React, { useMemo, useState } from 'react';

import { IMultiStepModalPayload, multiStepModalPayloadTypes } from '../pages/user-competitions-page/user-competitions-page';

interface IMultiStepModalState {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  stepCount: number;
  setStepCount: React.Dispatch<React.SetStateAction<number>>;
  payload: IMultiStepModalPayload;
  setPayload: React.Dispatch<React.SetStateAction<IMultiStepModalPayload>>;
  onSubmit: (payload: multiStepModalPayloadTypes) => void;
}

const MultiStepModalStateContext = React.createContext<IMultiStepModalState>(
  {} as IMultiStepModalState
);

const useMultiStepModalContext = () => {
  const [stepCount, setStepCount] = useState<number>(0);
  const [payload, setPayload] = useState({});

  return useMemo(
    () => ({
      stepCount,
      setStepCount,
      payload,
      setPayload,
    }),
    [stepCount, payload]
  );
};

const MultiStepModalProvider = ({
  show,
  setShow,
  payload,
  setPayload,
  onSubmit,
  children,
}) => {
  const multiStepModalState = useMultiStepModalContext();

  return (
    <MultiStepModalStateContext.Provider
      value={{
        ...multiStepModalState,
        show,
        setShow,
        payload,
        setPayload,
        onSubmit,
      }}
    >
      {children}
    </MultiStepModalStateContext.Provider>
  );
};

const useMultiStepModalState = () => {
  const context = React.useContext(MultiStepModalStateContext);
  if (context === undefined) {
    throw new Error(
      "useMultiStepModalState must be used within a MultiStepModalProvider"
    );
  }
  return context;
};

export { MultiStepModalProvider, useMultiStepModalState };
