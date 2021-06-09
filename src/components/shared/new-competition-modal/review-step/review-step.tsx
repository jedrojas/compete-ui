import './review-step.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import React from 'react';
import { Modal } from 'react-bootstrap';

import { NewCompetitionStepProps } from '../../../../models/data-models';
import BaseNeoButton from '../../../bases/base-neo-button/base-neo-button';

// import { useHistory } from 'react-router-dom';

// import { useCreateCompetition } from '../hooks';

export const ReviewStep: React.FC<NewCompetitionStepProps> = ({
  competitionName,
  competitionType,
  startDate,
  endDate,
  setStep,
  stepStack,
  setStepStack,
}) => {
  // const { createCompetition } = useCreateCompetition();
  // const history = useHistory();

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
        <div>{startDate?.toString() ?? "null"}</div>
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
          // onClick={() =>
          // createCompetition({
          //   competitionName,
          //   competitionType,
          //   startDate,
          //   endDate,
          // }).then((data) => history.push(`competitions/${data.id}`))
          // }
        >
          Submit
        </BaseNeoButton>
      </Modal.Footer>
    </>
  );
};

export default ReviewStep;
