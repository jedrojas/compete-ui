import './team-or-individual-step.scss';

import React from 'react';
import { Modal } from 'react-bootstrap';

import { NewCompetitionStepProps } from '../../../../models/data-models';
import { INewCompetitionStep } from '../../../../models/enums';
import BaseNeoButton from '../../../bases/base-neo-button/base-neo-button';
import { ICompetitionType } from '../new-competition-modal';

export const TeamOrIndividualStep: React.FC<NewCompetitionStepProps> = ({
  setStep,
  setType,
  stepStack,
  setStepStack,
}) => {
  return (
    <>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute">
          Choose competition type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BaseNeoButton
          onClick={() => {
            setType(ICompetitionType.TEAM);
            setStep(INewCompetitionStep.DATES);
            setStepStack([
              ...stepStack,
              INewCompetitionStep.TEAM_OR_INDIVIDUAL,
            ]);
          }}
          className="my-2"
        >
          Team
        </BaseNeoButton>
        <BaseNeoButton
          onClick={() => {
            setStep(INewCompetitionStep.DATES);
            setType(ICompetitionType.INDIVIDUAL);
          }}
          className="my-2"
        >
          Individual
        </BaseNeoButton>
      </Modal.Body>
      <Modal.Footer className="cursor-pointer justify-content-start">
        <span
          className="cursor-pointer"
          onClick={() => {
            const step = stepStack.pop();

            if (step) {
              setStep(step);
            }

            setStepStack([...stepStack]);
          }}
        >
          back
        </span>
      </Modal.Footer>
    </>
  );
};

export default TeamOrIndividualStep;
