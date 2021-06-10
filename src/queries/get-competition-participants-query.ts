import { useMemo } from 'react';

import { useGet } from '../components/hooks/fetch';
import { ICompetitionType } from '../components/shared/new-competition-modal/new-competition-modal';
import { BACKEND_ENDPOINT } from '../config';
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
    `${BACKEND_ENDPOINT}/competition/${cid}/participants/${listType}`,
    headers
  );

  return { data, loading, error };
};

export default useGetCompetitionParticipantsQuery;
