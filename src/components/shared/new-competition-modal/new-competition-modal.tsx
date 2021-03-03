import './new-competition-modal.scss';

import React, { useState } from 'react';

import { INewCompetitionStep } from '../../../models.ts/enums';
import BaseModal from '../base-modal/base-modal';
import { useNewCompetitionStep } from './hooks';

export interface INewCompetitionModal {
  show: boolean;
  setShow: (val: boolean) => void;
}

export enum ICompetitionType {
  TEAM = "team",
  INDIVIDUAL = "individual",
}

export const NewCompetitionModal: React.FC<INewCompetitionModal> = ({
  show,
  setShow,
}) => {
  const [competitionType, setCompetitionType] = useState<ICompetitionType>(
    ICompetitionType.TEAM
  );
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [competitionName, setCompetitionName] = useState<string>("");

  const [step, setStep] = useState<INewCompetitionStep>(
    INewCompetitionStep.JOIN_OR_CREATE
  );
  const [stepStack, setStepStack] = useState<INewCompetitionStep[]>([]);

  const NewCompetitionStep = useNewCompetitionStep(step);

  return (
    <BaseModal show={show} setShow={setShow}>
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
      />
    </BaseModal>
  );
};

export default NewCompetitionModal;
