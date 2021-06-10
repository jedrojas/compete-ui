import { useCallback } from 'react';

import { usePostCallback } from '../components/hooks/fetch';
import { BACKEND_ENDPOINT } from '../config';
import { ICreateUserTeamPayload } from '../models/data-models';

export function useJoinTeamQuery() {
  const post = usePostCallback<never, ICreateUserTeamPayload>();

  const JoinTeamQuery = useCallback(
    (payload: ICreateUserTeamPayload) => {
      const accessToken = localStorage.getItem("access_token");
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      return post(`${BACKEND_ENDPOINT}/user-team`, payload, headers);
    },
    [post]
  );

  return JoinTeamQuery;
}

export default useJoinTeamQuery;
