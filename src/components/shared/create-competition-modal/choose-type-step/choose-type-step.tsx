import './choose-type-step.scss';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import BaseNeoButton from '../../../bases/base-neo-button/base-neo-button';
import { useMultiStepModalState } from '../../../contexts/multi-step-modal-context';
import { ICompetitionType } from '../../new-competition-modal/new-competition-modal';

export interface ChooseTypeStepProps {
  stepNum?: number;
}

export const ChooseTypeStep: React.FC<ChooseTypeStepProps> = ({ stepNum }) => {
  const {
    stepCount,
    setStepCount,
    payload,
    setPayload,
  } = useMultiStepModalState();

  const handleTypeSelected = (type: ICompetitionType) => {
    setPayload({ ...payload, type });
    setStepCount((count) => count + 1);
  };

  return stepNum === stepCount ? (
    <>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute" role="heading">
          Choose a competition type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Note: This cannot be changed later</label>

        <BaseNeoButton
          title={"Team Competition"}
          onClick={() => handleTypeSelected(ICompetitionType.TEAM)}
          className="my-2"
        >
          Team
        </BaseNeoButton>
        <BaseNeoButton
          title={"Individual Competition"}
          onClick={() => handleTypeSelected(ICompetitionType.INDIVIDUAL)}
          className="my-2"
        >
          Individual
        </BaseNeoButton>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button
          title="Back"
          className="cursor-pointer mr-auto"
          onClick={() => setStepCount((count) => count - 1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      </Modal.Footer>
    </>
  ) : null;
};

export default ChooseTypeStep;
