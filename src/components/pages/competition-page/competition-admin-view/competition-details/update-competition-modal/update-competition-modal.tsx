import './update-competition-modal.scss';

import React, { useState } from 'react';

import { ICreateCompetitionPayload } from '../../../../../../models/data-models';
import useUpdateCompetitionQuery from '../../../../../../queries/update-competition-query';
import ChooseDatesStep from '../../../../../shared/create-competition-modal/choose-dates-step/choose-dates-step';
import NameAndIconStep from '../../../../../shared/create-competition-modal/name-and-icon-step/name-and-icon-step';
import { ReviewStep } from '../../../../../shared/create-competition-modal/review-step/review-step';
import MultiStepModal from '../../../../../shared/multi-step-modal/multi-step-modal';
import { useCompetitionState } from '../../../competition-context';

export interface IUpdateCompetitionModal {
  show: boolean;
  setShow: (val: boolean) => void;
}

export const UpdateCompetitionModal: React.FC<IUpdateCompetitionModal> = ({
  show,
  setShow,
}) => {
  const [payload, setPayload] = useState<ICreateCompetitionPayload>({});
  const { updateCompetitionQuery } = useUpdateCompetitionQuery();
  const { cid, name, type, start_date, end_date } = useCompetitionState();

  const handleSubmit = (payload: ICreateCompetitionPayload) => {
    updateCompetitionQuery(cid, { ...payload, type });
  };

  return (
    <MultiStepModal
      show={show}
      setShow={setShow}
      payload={payload}
      setPayload={setPayload}
      onSubmit={handleSubmit}
    >
      <NameAndIconStep update defaultName={name} />
      <ChooseDatesStep
        defaultStartDate={start_date}
        defaultEndDate={end_date}
      />
      <ReviewStep update />
    </MultiStepModal>
  );
};

export default UpdateCompetitionModal;
