import { ICompetition } from '../../models.ts/data-models';
import { useFetch } from './fetch';

export const useCompetitionById = (cId: string) => {
  const { data } = useFetch<ICompetition>(
    `http://localhost:3000/competition/${cId}`,
    "GET"
  );

  const { start_date, end_date, name, type } = data ?? ({} as ICompetition);

  return { competition: data, start_date, end_date, name, type };
};
