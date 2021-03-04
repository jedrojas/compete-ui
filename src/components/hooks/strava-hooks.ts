import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';

export function useStravaAccessCode() {
  const { search } = useLocation();
  const { code } = queryString.parse(search);
  console.log("--code is--", code);

  const history = useHistory();

  if (code && typeof code === "string") {
    localStorage.setItem("accessToken", code);
    history.push("/dashboard");
    return code;
  }

  return null;
}
