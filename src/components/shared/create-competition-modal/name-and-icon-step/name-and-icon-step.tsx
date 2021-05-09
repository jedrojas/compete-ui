import './name-and-icon-step.scss';

import React from 'react';
import { Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import BaseNeoButton from '../../../bases/base-neo-button/base-neo-button';

export interface NameAndIconStepProps {}

export const NameAndIconStep: React.FC<NameAndIconStepProps> = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          // setStep(INewCompetitionStep.REVIEW);
          // setStepStack([...stepStack, INewCompetitionStep.NAME_AND_ICON]);
        })}
      >
        <Modal.Header closeButton className="justify-content-center">
          <Modal.Title className="position-absolute">
            Customize the competition
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Upload an icon (to be implemented)
          <input
            // defaultValue={competitionName ?? ""}
            name="competitionName"
            placeholder="competition name"
            ref={register({ required: true })}
            className="w-100 form-text-field my-2"
            // onChange={(e) => setCompetitionName(e.target.value)}
          />
          <Row noGutters className="text-danger mb-3">
            {errors.competitionName && <span>This field is required</span>}
          </Row>
        </Modal.Body>
        <Modal.Footer className="cursor-pointer justify-content-between">
          <span
            className="cursor-pointer"
            onClick={() => {
              // const step = stepStack.pop();
              // if (step) {
              // setStep(step);
              // }
              // setStepStack([...stepStack]);
            }}
          >
            back
          </span>
          <BaseNeoButton
            className="w-25 p-0"
            // onClick={() => {
            //   setStep(INewCompetitionStep.REVIEW);
            //   setStepStack([...stepStack, INewCompetitionStep.NAME_AND_ICON]);
            // }}
          >
            <input
              type="submit"
              className="w-100 sign-up-submit-btn"
              value="Review"
            />
          </BaseNeoButton>
          {/* </span> */}
        </Modal.Footer>
      </form>
    </>
  );
};

export default NameAndIconStep;
