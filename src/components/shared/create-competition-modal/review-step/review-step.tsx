import './review-step.scss';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React from 'react';
import { Button, Modal, Row } from 'react-bootstrap';

import { useMultiStepModalState } from '../../../contexts/multi-step-modal-context';

export interface ReviewStepProps {
  stepNum?: number;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({ stepNum }) => {
  const {
    stepCount,
    setStepCount,
    setShow,
    payload,
    onSubmit,
  } = useMultiStepModalState();

  return stepNum === stepCount ? (
    <>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute" role="heading">
          Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Object.entries(payload ?? {}).map(([k, v]) => (
          <Row noGutters key={`${k}${v}`}>{`${k}: ${
            ["startDate", "endDate"].includes(k) ? format(v, "MM/dd/yyyy") : v
          }`}</Row>
        ))}
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
          title="Submit"
          className="cursor-pointer ml-auto"
          onClick={() => {
            onSubmit(payload);
            setShow(false);
          }}
        >
          Create
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Button>
      </Modal.Footer>
    </>
  ) : null;
};

export default ReviewStep;
