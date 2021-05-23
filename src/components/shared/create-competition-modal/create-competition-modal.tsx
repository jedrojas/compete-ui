import './create-competition-modal.scss';

import React, { useState } from 'react';

import { ICreateCompetitionPayload } from '../../pages/user-competitions-page/user-competitions-page';
import MultiStepModal from '../multi-step-modal/multi-step-modal';
import ChooseDatesStep from './choose-dates-step/choose-dates-step';
import ChooseTypeStep from './choose-type-step/choose-type-step';
import NameAndIconStep from './name-and-icon-step/name-and-icon-step';
import ReviewStep from './review-step/review-step';

export interface ICreateCompetitionModal {
  show: boolean;
  setShow: (val: boolean) => void;
}

export const CreateCompetitionModal: React.FC<ICreateCompetitionModal> = ({
  show,
  setShow,
}) => {
  const [payload, setPayload] = useState<ICreateCompetitionPayload>({});

  const handleSubmit = (payload: ICreateCompetitionPayload) => {
    console.log("--handle submit invoked--", payload);
    // use payload for whatever request needed
  };

  return (
    <MultiStepModal
      show={show}
      setShow={setShow}
      payload={payload}
      setPayload={setPayload}
      onSubmit={handleSubmit}
    >
      <NameAndIconStep />
      <ChooseTypeStep />
      <ChooseDatesStep />
      <ReviewStep />
    </MultiStepModal>
  );
};

export default CreateCompetitionModal;
