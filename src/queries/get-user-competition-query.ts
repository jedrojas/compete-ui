import { useMemo } from 'react';

import { useGet } from '../components/hooks/fetch';
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
    `http://localhost:3000/user-competition/${cid}`,
    headers
  );
  const { isUserAdmin, isUserParticipant, usersTeamId, activities, points } =
    data ?? {};

  return {
    isUserAdmin,
    isUserParticipant,
    usersTeamId,
    activities,
    points,
    loading,
    error,
  };
}

export default useGetUserCompetitionQuery;
