import { faBiking, faRunning, faSwimmer } from '@fortawesome/free-solid-svg-icons';

import { ICompetitionType } from '../components/shared/new-competition-modal/new-competition-modal';
import { CompetitionStatus, INewCompetitionStep } from './enums';

export interface IActivity {
  id?: string;
  strava_id?: string;
  name?: string;
  start_date?: Date;
  end_date: Date;
  distance?: number;
  type: string;
  points: number;
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

export interface IStravaTokenPayload {
  client_id: string;
  client_secret: string;
  code: string;
  grant_type: string;
}

export interface IStravaTokenResponse {
  token_type: string;
  expires_at: string;
  expires_in: string;
  refresh_token: string;
  access_token: string;
  athlete: any;
}