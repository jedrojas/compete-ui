import { useCallback } from 'react';

import { usePostCallback } from '../components/hooks/fetch';
import { BACKEND_ENDPOINT } from '../config';
import { ICompetition, ICreateCompetitionPayload } from '../models/data-models';

export function useCreateCompetitionQuery() {
  const post = usePostCallback<ICompetition, ICreateCompetitionPayload>();

  const createCompetitionQuery = useCallback(
    (payload: ICreateCompetitionPayload) => {
      const accessToken = localStorage.getItem("access_token");
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      return post(`${BACKEND_ENDPOINT}/competition`, payload, headers);
    },
    [post]
  );

  return createCompetitionQuery;
}

export default useCreateCompetitionQuery;
