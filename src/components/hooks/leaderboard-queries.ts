import { useMemo } from 'react';

import { ILeaderboardLI } from '../../models/data-models';
import { useCompetitionState } from '../pages/competitions-page/competition-context';
import { usePost } from './fetch';

interface ILeaderboardPayload {
  start_date: Date | undefined;
  end_date: Date | undefined;
}

export const useLeaderboard = (type: string) => {
  const { cid, start_date, end_date } = useCompetitionState();

  const payload = useMemo(() => {
    return { start_date, end_date };
  }, [end_date, start_date]);

  const { data, loading, error } = usePost<
    ILeaderboardLI[],
    ILeaderboardPayload
  >(`http://localhost:3000/competition/${cid}/leaderboard/${type}`, payload);

  return { data, loading, error };
};
