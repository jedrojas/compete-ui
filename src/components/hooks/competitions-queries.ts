import { useAuth0 } from '@auth0/auth0-react';

import { BACKEND_ENDPOINT } from '../../config';
import { ICompetition } from '../../models/data-models';
import { useGet } from './fetch';

export const useCompetitionById = (cId: string) => {
  const { data } = useGet<ICompetition>(
    `${BACKEND_ENDPOINT}/competition/${cId}`
  );

  const { start_date, end_date, name, type } = data ?? ({} as ICompetition);

  return { competition: data, start_date, end_date, name, type };
};

export const useUserCompetitions = () => {
  const { user } = useAuth0();

  const { data, error } = useGet<ICompetition[]>(
    `${BACKEND_ENDPOINT}/user/${user?.sub}/competitions`
  );

  if (error) console.log("Error fetching dashboard competitions", error);

  return { userCompetitions: data ?? ([] as ICompetition[]) };
};
