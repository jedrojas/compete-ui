import { ICompetition } from '../../models.ts/data-models';
import { useGet } from './fetch';

export const useCompetitionById = (cId: string) => {
  const { data } = useGet<ICompetition>(
    `http://localhost:3000/competition/${cId}`
  );

  const { start_date, end_date, name, type } = data ?? ({} as ICompetition);

  return { competition: data, start_date, end_date, name, type };
};
