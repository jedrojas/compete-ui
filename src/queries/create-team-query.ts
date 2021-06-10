import { useCallback } from 'react';

import { usePostCallback } from '../components/hooks/fetch';
import { BACKEND_ENDPOINT } from '../config';
import { ICreateTeamPayload, ITeam } from '../models/data-models';

export function useCreateTeamQuery() {
  const post = usePostCallback<ITeam, ICreateTeamPayload>();

  const createTeamQuery = useCallback(
    (payload: ICreateTeamPayload) => {
      const accessToken = localStorage.getItem("access_token");
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      return post(`${BACKEND_ENDPOINT}/team`, payload, headers);
    },
    [post]
  );

  return createTeamQuery;
}

export default useCreateTeamQuery;
