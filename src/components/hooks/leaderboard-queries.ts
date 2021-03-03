import { useMemo } from 'react';

import { ILeaderboardLI } from '../../models.ts/data-models';
import { useCompetitionState } from '../pages/competitions-page/competition-context';
import { useFetchPost } from './fetch';

export const useLeaderboard = (type: string) => {
  const { cid, start_date, end_date } = useCompetitionState();

  const payload = useMemo(() => {
    return { start_date, end_date };
  }, [end_date, start_date]);

  const { data, loading, error } = useFetchPost<ILeaderboardLI[]>(
    `http://localhost:3000/competition/${cid}/leaderboard/${type}`,
    payload
  );

  return { data, loading, error };
};
