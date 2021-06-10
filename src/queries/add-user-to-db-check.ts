import { useAuth0 } from '@auth0/auth0-react';

import { useGetCallback } from '../components/hooks/fetch';
import { BACKEND_ENDPOINT } from '../config';
import { IUser } from '../models/data-models';
import useCreateUserQuery from './create-user-query';

export const useAddUserToDbCheck = async () => {
  const { user } = useAuth0();
  const get = useGetCallback();
  const createUserQuery = useCreateUserQuery();
  const accessToken = localStorage.getItem("access_token");

  if (accessToken && user?.sub) {
    await get<IUser & { no_entry: string }>(
      `${BACKEND_ENDPOINT}/user/${user?.sub}`,
      accessToken
    )
      .then((data) => {
        if (data.no_entry) {
          createUserQuery({
            id: user?.sub ?? "",
          });
          window.location.reload();
        }
      })
      .catch((err) => console.log("--Error--", err));
  }
};

export default useAddUserToDbCheck;
