import './name-and-icon-step.scss';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { useMultiStepModalState } from '../../../contexts/multi-step-modal-context';

export interface NameAndIconStepProps {
  stepNum?: number;
  update?: boolean;
  defaultName?: string;
}

export const NameAndIconStep: React.FC<NameAndIconStepProps> = ({
  stepNum,
  update,
  defaultName,
}) => {
  const { register, watch } = useForm();
  const [charsUsed, setCharsUsed] = useState(0);
  const {
    stepCount,
    setStepCount,
    payload,
    setPayload,
  } = useMultiStepModalState();

  useEffect(() => setCharsUsed(watch("competitionName")?.length ?? 0), [watch]);

  return stepNum === stepCount ? (
    <>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute" role="heading">
          {update ? "Update Competition" : "Create Competition"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="competition-name">Enter a competition name *</label>
        <input
          id="competition-name"
          name="competitionName"
          placeholder="Competition Name"
          ref={register({ required: true, maxLength: 40 })}
          className="w-100 form-text-field my-2"
          defaultValue={defaultName ?? payload?.name ?? ""}
        />
        <Row noGutters>
          <span
            title="Characters Used"
            className={classnames({ "text-danger": charsUsed > 40 })}
          >{`${charsUsed} / 40`}</span>
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button
          title="Next"
          className="cursor-pointer ml-auto"
          disabled={charsUsed > 40 || charsUsed === 0}
          onClick={() => {
            setPayload({
              ...payload,
              name: watch("competitionName") ?? "",
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

export default NameAndIconStep;
