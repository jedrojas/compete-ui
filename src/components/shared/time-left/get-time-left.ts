import { useEffect, useState } from 'react';

import { CompetitionStatus } from '../../../models/enums';

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
