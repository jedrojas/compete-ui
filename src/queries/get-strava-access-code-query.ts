import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';

import { usePostCallback } from '../components/hooks/fetch';
import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from '../config';
import { IStravaTokenPayload, IStravaTokenResponse } from '../models/data-models';

export function useStravaAccessCode() {
  const { search } = useLocation();
  const { code, state } = queryString.parse(search);
  const history = useHistory();
  const post = usePostCallback<IStravaTokenResponse, IStravaTokenPayload>();

  if (code && typeof code === "string" && state === "strava_auth_code") {
    const payload = {
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
    };

    post("https://www.strava.com/oauth/token", payload)
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("stravaAccessToken", data.access_token);
          localStorage.setItem("exp", data.expires_at);
        }

        if (data.refresh_token)
          localStorage.setItem("stravaRefreshToken", data.refresh_token);
        history.push("/dashboard");
      })
      .catch((e) => console.log("Error authenticating Strava user", e));
  }
}
