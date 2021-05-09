import { useAuth0 } from '@auth0/auth0-react';

import { ICompetition } from '../../models.ts/data-models';
import { useGet } from './fetch';

export const useCompetitionById = (cId: string) => {
  const { data } = useGet<ICompetition>(
    `http://localhost:3000/competition/${cId}`
  );

  const { start_date, end_date, name, type } = data ?? ({} as ICompetition);

  return { competition: data, start_date, end_date, name, type };
};

export const useGetCompetitionQuery = (cId: string, uId?: string) => {
  const { data } = useGet<ICompetition>(
    `http://localhost:3000/competition/${cId}${uId ? `/user/${uId}` : ""}`
  );

  const { start_date, end_date, name, type } = data ?? ({} as ICompetition);

  return { competition: data, start_date, end_date, name, type };
};

export const useUserCompetitions = () => {
  const { user } = useAuth0();

  const { data, error } = useGet<ICompetition[]>(
    `http://localhost:3000/user/${user?.sub}/competitions`
  );

  if (error) console.log("Error fetching dashboard competitions", error);

  return { userCompetitions: data ?? ([] as ICompetition[]) };
};
