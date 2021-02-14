import './dates-step.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import { useForm } from 'react-hook-form';

import { NewCompetitionStepProps } from '../../../../models.ts/data-models';
import { INewCompetitionStep } from '../../../../models.ts/enums';

export const DatesStep: React.FC<NewCompetitionStepProps> = ({
  stepStack,
  setStepStack,
  setStep,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const [state, setState] = useState([
    {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    },
  ]);

  return (
    <>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute">
          Select the start and end dates
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DateRange
          endDatePlaceholder={"End Date"}
          onChange={(item) => {
            setStartDate(item.selection.startDate);
            setEndDate(item.selection.endDate);
            setState([item.selection]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
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

        <span
          className="cursor-pointer"
          onClick={() => {
            setStep(INewCompetitionStep.NAME_AND_ICON);
            setStepStack([...stepStack, INewCompetitionStep.DATES]);
          }}
        >
          next
        </span>
      </Modal.Footer>
    </>
  );
};

export default DatesStep;
