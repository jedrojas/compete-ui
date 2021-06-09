import { useMemo, useRef } from 'react';

import { NewCompetitionStepConfig } from '../../../models/data-models';
import { INewCompetitionStep } from '../../../models/enums';
import DatesStep from './dates-step/dates-step';
import FindCompetitionStep from './find-competition-step/find-competition-step';
import JoinOrCreateStep from './join-or-create-step/join-or-create-step';
import NameAndIconStep from './name-and-icon-step/name-and-icon-step';
import ReviewStep from './review-step/review-step';
import TeamOrIndividualStep from './team-or-individual-step/team-or-individual-step';

// TODO - Jed: remove this and everything in "new comp modal"
export function useNewCompetitionStep(step: INewCompetitionStep) {
  const { current: config } = useRef<NewCompetitionStepConfig>({
    JOIN_OR_CREATE: JoinOrCreateStep,
    TEAM_OR_INDIVIDUAL: TeamOrIndividualStep,
    FIND_COMPETITION: FindCompetitionStep,
    NAME_AND_ICON: NameAndIconStep,
    DATES: DatesStep,
    REVIEW: ReviewStep,
  });

  const Step = useMemo(() => config[step] ?? JoinOrCreateStep, [config, step]);

  return Step;
}
