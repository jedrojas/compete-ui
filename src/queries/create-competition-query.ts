import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { usePostCallback } from '../components/hooks/fetch';
import { ICompetition, ICreateCompetitionPayload } from '../models/data-models';

export function useCreateCompetitionQuery() {
  const history = useHistory();
  const post = usePostCallback<ICompetition, ICreateCompetitionPayload>();

  const createCompetitionQuery = useCallback(
    (payload: ICreateCompetitionPayload) => {
      const accessToken = localStorage.getItem("access_token");
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      post("http://localhost:3000/competition", payload, headers)
        .then((data) => history.push(`competitions/${data.id}`))
        .catch((e) => console.log("Error creating competition", e));
    },
    [history, post]
  );

  return createCompetitionQuery;
}

export default useCreateCompetitionQuery;
