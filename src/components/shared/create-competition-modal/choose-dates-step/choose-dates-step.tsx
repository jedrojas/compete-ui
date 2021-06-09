import './choose-dates-step.scss';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { DateRange } from 'react-date-range';

import { useMultiStepModalState } from '../../../contexts/multi-step-modal-context';

export interface ChooseDatesStepProps {
  stepNum?: number;
  defaultStartDate?: Date;
  defaultEndDate?: Date;
}

export const ChooseDatesStep: React.FC<ChooseDatesStepProps> = ({
  stepNum,
  defaultStartDate,
  defaultEndDate,
}) => {
  const {
    stepCount,
    setStepCount,
    payload,
    setPayload,
  } = useMultiStepModalState();
  const [startDate, setStartDate] = useState<Date>(
    defaultStartDate ? new Date(defaultStartDate) : new Date()
  );
  const [endDate, setEndDate] = useState<Date>(
    defaultEndDate ? new Date(defaultEndDate) : new Date()
  );

  const [state, setState] = useState([
    {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    },
  ]);

  return stepNum === stepCount ? (
    <>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute" role="heading">
          Choose competition dates
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify-content-center">
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
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button
          title="Back"
          className="cursor-pointer mr-auto"
          onClick={() => setStepCount((count) => count - 1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button
          title="Next"
          className="cursor-pointer ml-auto"
          onClick={() => {
            setPayload({
              ...payload,
              start_date: startDate,
              end_date: endDate,
            });
            setStepCount((count) => count + 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Modal.Footer>
    </>
  ) : null;
};

export default ChooseDatesStep;
