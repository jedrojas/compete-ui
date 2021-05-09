import './multi-step-modal.scss';

import React, { useEffect, useRef, useState } from 'react';

import BaseModal from '../base-modal/base-modal';

export interface IMultiStepModal {
  show: boolean;
  setShow: (val: boolean) => void;
}

export const MultiStepModal: React.FC<IMultiStepModal> = ({
  show,
  setShow,
  children,
}) => {
  const [stepCount, setStepCount] = useState(0);

  return (
    <BaseModal show={show} setShow={setShow}>
      {React.Children.toArray(children).map(
        (step, index) => stepCount === index && <div>{step}</div>
      )}
      {/* 
      

      <NewCompetitionStep
        setStep={setStep}
        competitionType={competitionType}
        setType={setCompetitionType}
        stepStack={stepStack}
        setStepStack={setStepStack}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        competitionName={competitionName}
        setCompetitionName={setCompetitionName}
      /> */}
    </BaseModal>
  );
};

export default BaseModal;
