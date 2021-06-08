import { useAuth0 } from '@auth0/auth0-react';

import { useGetCallback } from '../components/hooks/fetch';
import { IUser } from '../models/data-models';
import useCreateUserQuery from './create-user-query';

// TODO - Jed: remove this once we are able to add users to DB
// after they enter first and last name
export const useAddUserToDbCheck = async () => {
  const { user } = useAuth0();
  const get = useGetCallback();
  const createUserQuery = useCreateUserQuery();
  const accessToken = localStorage.getItem("access_token");

  //   TODO - Jed: add token verification on backend of this api
  if (accessToken && user?.sub) {
    await get<IUser & { no_entry: string }>(
      `http://localhost:3000/user/${user.sub}`,
      accessToken
    )
      .then((data) => {
        if (data.no_entry) {
          createUserQuery({
            id: user.sub,
          });
          window.location.reload();
        }
      })
      .catch((err) => console.log("--Error--", err));
  }
};

export default useAddUserToDbCheck;
