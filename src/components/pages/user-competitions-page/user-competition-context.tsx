import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CompetitionStatus } from '../../../models/enums';
import { useCompetitionById } from '../../hooks/competitions-queries';

interface ICompetitionState {
  cid: string;
  start_date?: Date;
  end_date?: Date;
  name?: string;
  type?: string;
  status?: CompetitionStatus;
}

const CompetitionStateContext = React.createContext<ICompetitionState>(
  {} as ICompetitionState
);

export const useStatus = (start_date?: Date, end_date?: Date) => {
  const [status, setStatus] = useState<CompetitionStatus>(
    CompetitionStatus.NOT_SET
  );

  useEffect(() => {
    const now = new Date();
    const startDate = start_date ? new Date(start_date) : null;
    const endDate = end_date ? new Date(end_date) : null;

    if (!startDate || !endDate) {
      setStatus(CompetitionStatus.NOT_SET);
    } else if (now.getTime() < startDate.getTime()) {
      setStatus(CompetitionStatus.NOT_STARTED);
    } else if (now.getTime() < endDate.getTime()) {
      setStatus(CompetitionStatus.IN_PROGRESS);
    } else {
      setStatus(CompetitionStatus.FINISHED);
    }
  }, [end_date, start_date]);

  return status;
};

const useCompetitionContext = () => {
  const { cid } = useParams<{ cid: string }>();
  const { start_date, end_date, name, type } = useCompetitionById(cid);
  const status = useStatus(start_date, end_date);

  return useMemo(
    () => ({
      cid,
      start_date,
      end_date,
      name,
      type,
      status,
    }),
    [cid, end_date, name, start_date, status, type]
  );
};

// TODO - Jed: remove this file, should be unused
const CompetitionProvider = ({ children }) => {
  const competitionState = useCompetitionContext();

  return null;
};

const useCompetitionState = () => {
  const context = React.useContext(CompetitionStateContext);
  if (context === undefined) {
    throw new Error(
      "useCompetitionState must be used within a CompetitionProvider"
    );
  }
  return context;
};

export { CompetitionProvider, useCompetitionState };
