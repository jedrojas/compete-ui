import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useMemo, useState } from 'react';

import { usePostCallback } from '../components/hooks/fetch';
import { BACKEND_ENDPOINT, STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from '../config';
import { IStravaTokenPayload, IStravaTokenResponse, SyncStravaActivitiesPayload } from '../models/data-models';

export function useGetStravaActivities() {
  const postActivities = usePostCallback<string, SyncStravaActivitiesPayload>();
  const token = localStorage.getItem("stravaAccessToken");
  const { user } = useAuth0();
  const [loading, setLoading] = useState(false);
  const postTokens = usePostCallback<
    IStravaTokenResponse,
    IStravaTokenPayload
  >();

  const payload = useMemo(
    () => ({
      token,
      user_id: user?.sub ?? "",
    }),
    [token, user]
  );

  const getStravaActivities = useCallback(async () => {
    setLoading(true);

    await checkIsAccessTokenValid()
      .then(() => {
        // token does not need update
      })
      .catch(() => {
        postTokens("https://www.strava.com/api/v3/oauth/token", {
          client_id: STRAVA_CLIENT_ID,
          client_secret: STRAVA_CLIENT_SECRET,
          refresh_token: localStorage.getItem("stravaRefreshToken") ?? "",
          grant_type: "refresh_token",
        })
          .then((data) => {
            if (data.access_token) {
              localStorage.setItem("stravaAccessToken", data.access_token);
              localStorage.setItem("exp", data.expires_at);
            }
            if (data.refresh_token)
              localStorage.setItem("stravaRefreshToken", data.refresh_token);
          })
          .catch((err) => console.log("Error refreshing access token:", err));
      });

    postActivities(`${BACKEND_ENDPOINT}/activity/strava`, payload)
      .then((res) => {
        console.log("Successfully retrieved activities from Strava!", res);
      })
      .catch((e) => console.log("Error retrieving activities from Strava", e))
      .finally(() => setLoading(false));
  }, [payload, postActivities, postTokens]);

  return { getStravaActivities, loading };
}

const checkIsAccessTokenValid = () =>
  new Promise(async (resolve, reject) => {
    const exp = (localStorage.getItem("exp") ?? Date.now() - 1000) as number;
    if (Date.now() < exp * 1000) {
      resolve(true);
    } else {
      reject(false);
    }
  });
