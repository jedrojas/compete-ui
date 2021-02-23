import './join-or-create-step.scss';

import React from 'react';
import { Modal } from 'react-bootstrap';

import { NewCompetitionStepProps } from '../../../../models.ts/data-models';
import { INewCompetitionStep } from '../../../../models.ts/enums';
import BaseNeoButton from '../../../bases/base-neo-button/base-neo-button';

export const JoinOrCreateStep: React.FC<NewCompetitionStepProps> = ({
  setStep,
  stepStack,
  setStepStack,
}) => {
  return (
    <>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute">
          Create a competition
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BaseNeoButton
          onClick={() => {
            setStep(INewCompetitionStep.TEAM_OR_INDIVIDUAL);
            setStepStack([...stepStack, INewCompetitionStep.JOIN_OR_CREATE]);
          }}
          className="my-2"
        >
          Create My Own Competition
        </BaseNeoButton>
        <BaseNeoButton
          className="my-2"
          onClick={() => {
            setStep(INewCompetitionStep.FIND_COMPETITION);
            setStepStack([...stepStack, INewCompetitionStep.JOIN_OR_CREATE]);
          }}
        >
          Join Existing Competition
        </BaseNeoButton>
      </Modal.Body>
    </>
  );
};

export default JoinOrCreateStep;
