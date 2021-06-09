import { useMemo, useRef } from 'react';

import { CompetitionStatusConfig } from '../../../models/data-models';
import { useCompetitionState } from '../../pages/competition-page/competition-context';
import CompetitionFinished from './competition-finished/competition-finished';
import CompetitionInProgress from './competition-in-progress/competition-in-progress';
import CompetitionNotStarted from './competition-not-started/competition-not-started';
import DatesNotSet from './dates-not-set/dates-not-set';

export function useCompetitionStatusComponent() {
  const { status } = useCompetitionState();

  const { current: config } = useRef<CompetitionStatusConfig>({
    NOT_SET: DatesNotSet,
    FINISHED: CompetitionFinished,
    NOT_STARTED: CompetitionNotStarted,
    IN_PROGRESS: CompetitionInProgress,
  });

  const Component = useMemo(() => status && config[status], [config, status]);

  return Component ?? DatesNotSet;
}
