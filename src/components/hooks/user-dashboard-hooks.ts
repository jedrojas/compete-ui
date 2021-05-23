import { useAuth0 } from '@auth0/auth0-react';

import { ICompetition } from '../../models/data-models';
import { useGet } from './fetch';

export const useDashboardCompetitions = () => {
  const { user } = useAuth0();

  const { data, error } = useGet<ICompetition[]>(
    `http://localhost:3000/user/${user?.sub}/competitions`
  );

  if (error) console.log("--error fetching dashboard competitions--", error);

  return { dashboardCompetitions: data ?? ([] as ICompetition[]) };
};
