import { useCallback } from 'react';

import { usePostCallback } from '../components/hooks/fetch';
import { BACKEND_ENDPOINT } from '../config';
import { ICreateUserPayload, IUser } from '../models/data-models';

export function useCreateUserQuery() {
  const post = usePostCallback<IUser, ICreateUserPayload>();

  const createUserQuery = useCallback(
    (payload: ICreateUserPayload) => {
      const accessToken = localStorage.getItem("access_token");
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      post(`${BACKEND_ENDPOINT}/user`, payload, headers)
        .then((data) =>
          console.log("--successfully added user to Compete DB--", data)
        )
        .catch((e) => console.log("Error adding user to Compete DB", e));
    },
    [post]
  );

  return createUserQuery;
}

export default useCreateUserQuery;
