import { faBiking, faRunning, faSwimmer } from '@fortawesome/free-solid-svg-icons';

import { ICompetitionType } from '../components/shared/new-competition-modal/new-competition-modal';
import { CompetitionStatus, INewCompetitionStep } from './enums';

export interface IActivity {
  id: number;
  distance: number;
  end_date: Date;
  type: string;
  points: number;
  name?: string;
}

export interface ILeaderboardLI {
  id: number;
  name: string;
  points: number;
  image?: string;
  first_name?: string;
}

export const sbrIconMap = new Map([
  ["swim", faSwimmer],
  ["bike", faBiking],
  ["run", faRunning],
]);

export interface NewCompetitionStepProps {
  setStep: (val: INewCompetitionStep) => void;
  competitionType: ICompetitionType;
  setType: (type: ICompetitionType) => void;
  stepStack: INewCompetitionStep[];
  setStepStack: (stack: INewCompetitionStep[]) => void;
  startDate?: Date | null;
  setStartDate: (date: Date) => void;
  endDate?: Date | null;
  setEndDate: (date: Date) => void;
  competitionName: string;
  setCompetitionName: (name: string) => void;
}

export type NewCompetitionStepConfig = {
  [step in INewCompetitionStep]?: React.FC<NewCompetitionStepProps>;
};

export interface CompetitionStatusComponentProps {}

export type CompetitionStatusConfig = {
  [step in CompetitionStatus]?: React.FC<CompetitionStatusComponentProps>;
};

export interface ICompetition {
  id: string;
  name?: string;
  type?: string;
  start_date?: Date;
  end_date?: Date;
}

export type IJoinableCompetition = ICompetition & { is_joined: boolean };
