import { useCallback } from 'react';

import { usePostCallback } from '../components/hooks/fetch';
import { BACKEND_ENDPOINT } from '../config';
import { ICompetition, IJoinCompetitionPayload } from '../models/data-models';

export function useJoinCompetitionQuery() {
  const post = usePostCallback<ICompetition, IJoinCompetitionPayload>();

  const joinCompetitionQuery = useCallback(
    (payload: IJoinCompetitionPayload) => {
      const accessToken = localStorage.getItem("access_token");
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      post(`${BACKEND_ENDPOINT}/user-competition`, payload, headers)
        .then((data) => console.log("--joined competition--", data))
        .catch((e) => console.log("Error joining competition", e));
    },
    [post]
  );

  return joinCompetitionQuery;
}

export default useJoinCompetitionQuery;
