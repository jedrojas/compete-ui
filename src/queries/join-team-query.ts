import { useCallback } from 'react';

import { usePostCallback } from '../components/hooks/fetch';
import { ICreateUserTeamPayload } from '../models/data-models';

export function useJoinTeamQuery() {
  const post = usePostCallback<never, ICreateUserTeamPayload>();

  const JoinTeamQuery = useCallback(
    (payload: ICreateUserTeamPayload) => {
      const accessToken = localStorage.getItem("access_token");
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      return post("http://localhost:3000/user-team", payload, headers);
    },
    [post]
  );

  return JoinTeamQuery;
}

export default useJoinTeamQuery;
