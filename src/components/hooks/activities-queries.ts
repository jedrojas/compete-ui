import { useAuth0 } from '@auth0/auth0-react';

import { BACKEND_ENDPOINT } from '../../config';
import { IActivity } from '../../models/data-models';
import { useGet } from './fetch';

export const useUserActivities = () => {
  const { user } = useAuth0();

  const { data, loading, error } = useGet<IActivity[]>(
    `${BACKEND_ENDPOINT}/user/${user?.sub}/activities`
  );

  return { data: data?.length ? data.slice(0, 10) : [], loading, error };
};

export const useUserActivitiesByCompetitionQuery = (cId: string) => {
  const { user } = useAuth0();

  const { data, loading, error } = useGet<IActivity[] & IError>(
    `${BACKEND_ENDPOINT}/user/${user?.sub}/competition/${cId}/points`
  );

  return { data, loading, error };
};

export interface IError {
  errorMessage?: string;
}
