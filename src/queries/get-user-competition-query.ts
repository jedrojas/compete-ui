import { useMemo } from 'react';

import { useGet } from '../components/hooks/fetch';
import { BACKEND_ENDPOINT } from '../config';
import { IUserCompetitionData } from '../models/data-models';

export function useGetUserCompetitionQuery(cid: string) {
  const accessToken = localStorage.getItem("access_token");
  const headers: Record<string, string> = useMemo(
    () => ({
      Authorization: `Bearer ${accessToken}`,
    }),
    [accessToken]
  );

  const { data, loading, error } = useGet<IUserCompetitionData>(
    `${BACKEND_ENDPOINT}/user-competition/${cid}`,
    headers
  );
  const {
    isUserAdmin,
    isUserParticipant,
    userTeamId,
    currTeamId,
    activities,
    points,
  } = data ?? {};

  return {
    isUserAdmin,
    isUserParticipant,
    userTeamId,
    currTeamId,
    activities,
    points,
    loading,
    error,
  };
}

export default useGetUserCompetitionQuery;
