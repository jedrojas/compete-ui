import { useAuth0 } from '@auth0/auth0-react';
import queryString from 'query-string';
import { useCallback, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from '../../config';
import { IStravaTokenPayload, IStravaTokenResponse } from '../../models/data-models';
import { usePostCallback } from './fetch';

export interface SyncStravaActivitiesPayload {
  token: string | null;
  user_id: string;
}

export function useStravaAccessCode() {
  const { search } = useLocation();
  const { code, state } = queryString.parse(search);
  const history = useHistory();
  const post = usePostCallback<IStravaTokenResponse, IStravaTokenPayload>();

  if (code && typeof code === "string" && state === "strava_auth_code") {
    // console.log("--code is--", code);
    const payload = {
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
    };

    // TODO: this also gives expiration date.
    // Retrieve from here if needed in the future
    post("https://www.strava.com/oauth/token", payload)
      .then((data) => {
        // console.log("--DATA IS--", data);
        localStorage.setItem("stravaAccessToken", data.access_token);
        localStorage.setItem("stravaRefreshToken", data.refresh_token);
        history.push("/dashboard");
      })
      .catch((e) => console.log("Error authenticating Strava user", e));
  }
}

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
