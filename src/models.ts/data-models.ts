import { faBiking, faRunning, faSwimmer } from '@fortawesome/free-solid-svg-icons';

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
}

export const sbrIconMap = new Map([
  ["swim", faSwimmer],
  ["bike", faBiking],
  ["run", faRunning],
]);
