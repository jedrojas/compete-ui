import { useAuth0 } from '@auth0/auth0-react';

import { IActivity } from '../../models.ts/data-models';
import { useFetch } from './fetch';

export const useUserActivitiesByCompetitionQuery = (cId: string) => {
  const { user } = useAuth0();

  const { data, loading, error } = useFetch<IActivity[]>(
    `http://localhost:3000/user/${user?.sub}/competition/${cId}/points`,
    "GET"
  );

  return { data, loading, error };
};
