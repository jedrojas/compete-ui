import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';

import { useGet } from '../components/hooks/fetch';
import { BACKEND_ENDPOINT } from '../config';
import { IUser } from '../models/data-models';

export function useGetUserQuery() {
  const { user } = useAuth0();

  const accessToken = localStorage.getItem("access_token");
  const headers: Record<string, string> = useMemo(
    () => ({
      Authorization: `Bearer ${accessToken}`,
    }),
    [accessToken]
  );

  const { data, loading, error } = useGet<IUser & { no_entry: string }>(
    `${BACKEND_ENDPOINT}/user/${user?.sub}`,
    headers
  );

  return { data: data?.no_entry ? null : (data as IUser), loading, error };
}

export default useGetUserQuery;
