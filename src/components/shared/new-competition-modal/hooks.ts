import { useMemo, useRef } from 'react';

import { ICompetition, NewCompetitionStepConfig } from '../../../models/data-models';
import { INewCompetitionStep } from '../../../models/enums';
import DatesStep from './dates-step/dates-step';
import FindCompetitionStep from './find-competition-step/find-competition-step';
import JoinOrCreateStep from './join-or-create-step/join-or-create-step';
import NameAndIconStep from './name-and-icon-step/name-and-icon-step';
import ReviewStep from './review-step/review-step';
import TeamOrIndividualStep from './team-or-individual-step/team-or-individual-step';

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

// TODO - Jed: use usePost hook here
export function useCreateCompetition() {
  // TODO - Jed: Consider passing arguments as an object
  const createCompetition = (
    name: string,
    type: string,
    start?: Date | null,
    end?: Date | null
  ) => {
    const payload = {
      name,
      type,
      start_date: start,
      end_date: end,
    };

    const accessToken = localStorage.getItem("access_token");

    return new Promise<ICompetition>(async (resolve, reject) => {
      try {
        await fetch(`http://localhost:3000/competition`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((data) => resolve(data))
          .catch((e) => reject(e));
      } catch (e) {
        reject(e);
      }
    });
  };

  return { createCompetition };
}
