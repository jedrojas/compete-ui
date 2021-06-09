import { useMemo } from 'react';

import { useGet } from '../components/hooks/fetch';
import { ICompetitionType } from '../components/shared/new-competition-modal/new-competition-modal';
import { IUser } from '../models/data-models';

export const useGetCompetitionParticipantsQuery = (
  cid: string,
  listType?: ICompetitionType
) => {
  const accessToken = localStorage.getItem("access_token");

  const headers: Record<string, string> = useMemo(
    () => ({
      Authorization: `Bearer ${accessToken}`,
    }),
    [accessToken]
  );

  const { data, loading, error } = useGet<IUser[]>(
    `http://localhost:3000/competition/${cid}/participants/${listType}`,
    headers
  );

  return { data, loading, error };
};

export default useGetCompetitionParticipantsQuery;
