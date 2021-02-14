import './review-step.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Modal } from 'react-bootstrap';

import { NewCompetitionStepProps } from '../../../../models.ts/data-models';
import BaseNeoButton from '../../../bases/base-neo-button/base-neo-button';
import { useCreateCompetition } from '../hooks';

export const ReviewStep: React.FC<NewCompetitionStepProps> = ({
  competitionName,
  competitionType,
  startDate,
  endDate,
  setStep,
  stepStack,
  setStepStack,
}) => {
  const { createCompetition } = useCreateCompetition();
  const { user } = useAuth0()

  return (
    <>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute">
          Everything look copacetic?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{competitionName.toString()}</div>
        <div>{competitionType.toString()}</div>
        <div>{startDate.toString()}</div>
        <div>{endDate?.toString() ?? "null"}</div>
      </Modal.Body>
      <Modal.Footer className="cursor-pointer justify-content-between">
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

        <BaseNeoButton
          className="w-25 p-0"
          onClick={
            () =>
              createCompetition(
                user.sub,
                competitionName,
                competitionType,
                startDate,
                endDate,
              )
            // .then(() => addUserToCompetition(userId, competitionId))
          }
        >
          Submit
        </BaseNeoButton>
      </Modal.Footer>
    </>
  );
};

export default ReviewStep;