import { useCallback, useState } from 'react';

import { usePutCallback } from '../components/hooks/fetch';
import { BACKEND_ENDPOINT } from '../config';
import { ICompetition, IUpdateCompetitionPayload } from '../models/data-models';

export function useUpdateCompetitionQuery() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const put = usePutCallback<ICompetition, IUpdateCompetitionPayload>();

  const updateCompetitionQuery = useCallback(
    async (cid: string, payload: IUpdateCompetitionPayload) => {
      const accessToken = localStorage.getItem("access_token");
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      setLoading(true);
      await put(`${BACKEND_ENDPOINT}/competition/${cid}`, payload, headers)
        .then(() => {
          setTimeout(() => window.location.reload(), 1000);
        })
        .then(() => setLoading(false))
        .catch((e) => {
          setError(e);
          console.log("Error updating competition", e);
        });
    },
    [put]
  );

  return { updateCompetitionQuery, loading, error };
}

export default useUpdateCompetitionQuery;
