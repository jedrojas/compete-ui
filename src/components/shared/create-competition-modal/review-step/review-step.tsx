import './review-step.scss';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Modal, Row } from 'react-bootstrap';

import { useMultiStepModalState } from '../../../contexts/multi-step-modal-context';
import { usePrintCompDetails } from './hooks/print-comp-details';

export interface ReviewStepProps {
  stepNum?: number;
  update?: boolean;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({ stepNum, update }) => {
  const {
    stepCount,
    setStepCount,
    payload,
    onSubmit,
  } = useMultiStepModalState();
  const { printCompDetails } = usePrintCompDetails();

  return stepNum === stepCount ? (
    <>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute" role="heading">
          Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Object.entries(payload ?? {}).map(([k, v]) => (
          <Row noGutters key={`${k}${v}`}>
            {printCompDetails(k, v)}
          </Row>
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
          onClick={() => onSubmit(payload)}
        >
          {update ? "Update" : "Create"}
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Button>
      </Modal.Footer>
    </>
  ) : null;
};

export default ReviewStep;
