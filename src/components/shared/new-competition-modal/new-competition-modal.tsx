import './new-competition-modal.scss';

import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { INewCompetitionStep } from '../../../models.ts/enums';
import BaseModal from '../base-modal/base-modal';
import { useNewCompetitionStep } from './hooks';

export interface INewCompetitionModal {
  show: boolean;
  setShow: (val: boolean) => void;
}

export enum ICompetitionType {
  TEAM = "team",
  INDIVIDUAL = "individual",
}

export const NewCompetitionModal: React.FC<INewCompetitionModal> = ({
  show,
  setShow,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const [competitionType, setCompetitionType] = useState<ICompetitionType>(
    ICompetitionType.TEAM
  );
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [competitionName, setCompetitionName] = useState<string>("");

  const [step, setStep] = useState<INewCompetitionStep>(
    INewCompetitionStep.JOIN_OR_CREATE
  );
  const [stepStack, setStepStack] = useState<INewCompetitionStep[]>([]);

  const NewCompetitionStep = useNewCompetitionStep(step);

  const foo = () => {
    console.log("id", "random");
    console.log("name", competitionName);
    console.log("type", competitionType);
    console.log("start", startDate);
    console.log("end", endDate);
  };

  return (
    <BaseModal show={show} setShow={setShow}>
      <NewCompetitionStep
        setStep={setStep}
        competitionType={competitionType}
        setType={setCompetitionType}
        stepStack={stepStack}
        setStepStack={setStepStack}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        competitionName={competitionName}
        setCompetitionName={setCompetitionName}
        onSubmit={foo}
      />
    </BaseModal>
  );
};

export default NewCompetitionModal;

/*  <form
          onSubmit={handleSubmit((data) => {
            console.log("--submit clicked-- TODO");
            setShow(false);
          })}
        >
          <Row>
            <Col>
              <input
                name="firstName"
                placeholder="first name"
                ref={register({ required: true })}
                className="w-100 form-text-field my-2"
              />
              <Row noGutters className="text-danger mb-3">
                {errors.firstName && <span>This field is required</span>}
              </Row>

              <input
                name="lastName"
                placeholder="last name"
                ref={register({ required: true })}
                className="w-100 form-text-field my-2"
              />
              <Row noGutters className="text-danger mb-3">
                {errors.lastName && <span>This field is required</span>}
              </Row>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>

              <BaseNeoButton className="w-25 p-0">
                <input type="submit" className="w-100 sign-up-submit-btn" />
              </BaseNeoButton>
            </Col>
          </Row>
        </form> */
