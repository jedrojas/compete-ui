import { useCallback } from 'react';

import { usePostCallback } from '../components/hooks/fetch';
import { ICompetition, ICreateCompetitionPayload } from '../models/data-models';

export function useCreateCompetitionQuery() {
  const post = usePostCallback<ICompetition, ICreateCompetitionPayload>();

  const createCompetitionQuery = useCallback(
    (payload: ICreateCompetitionPayload) => {
      const accessToken = localStorage.getItem("access_token");
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      return post("http://localhost:3000/competition", payload, headers);
    },
    [post]
  );

  return createCompetitionQuery;
}

export default useCreateCompetitionQuery;
