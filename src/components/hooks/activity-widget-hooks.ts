import { useEffect, useState } from 'react';

import { useUserActivitiesByCompetitionQuery } from './activities-queries';

export const useActivityWidgetData = (cId: string) => {
  const [points, setPoints] = useState<number>();
  const [numActivities, setNumActivities] = useState<number>(0);

  const { data, loading, error } = useUserActivitiesByCompetitionQuery(cId);

  const activities = data?.errorMessage ? null : data;

  useEffect(() => {
    setPoints(
      activities?.reduce(
        (totalPoints, activity) => totalPoints + activity.points,
        0
      )
    );

    setNumActivities(activities?.length ?? 0);
  }, [activities]);

  return { activities, loading, error, numActivities, points };
};
