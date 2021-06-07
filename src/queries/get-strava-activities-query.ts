import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useMemo, useState } from 'react';

import { usePostCallback } from '../components/hooks/fetch';
import { SyncStravaActivitiesPayload } from '../models/data-models';

export function useGetStravaActivities() {
  const post = usePostCallback<string, SyncStravaActivitiesPayload>();
  const token = localStorage.getItem("stravaAccessToken");
  const { user } = useAuth0();
  const [loading, setLoading] = useState(false);

  const payload = useMemo(
    () => ({
      token,
      user_id: user?.sub ?? "",
    }),
    [token, user]
  );

  const getStravaActivities = useCallback(() => {
    setLoading(true);
    post(`http://localhost:3000/activity/strava`, payload)
      .then((res) => {
        console.log("Successfully retrieved activities from Strava!");
      })
      .catch((e) => console.log("Error retrieving activities from Strava", e))
      .finally(() => setLoading(false));
  }, [payload, post]);

  return { getStravaActivities, loading };
}
