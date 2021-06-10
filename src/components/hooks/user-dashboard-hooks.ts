import { useAuth0 } from '@auth0/auth0-react';

import { BACKEND_ENDPOINT } from '../../config';
import { ICompetition } from '../../models/data-models';
import { useGet } from './fetch';

export const useDashboardCompetitions = () => {
  const { user } = useAuth0();

  const { data, error } = useGet<ICompetition[]>(
    `${BACKEND_ENDPOINT}/user/${user?.sub}/competitions`
  );

  return { dashboardCompetitions: data ?? ([] as ICompetition[]) };
};
