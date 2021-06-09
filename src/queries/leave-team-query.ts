import { useCallback } from 'react';

import { useDeleteCallback } from '../components/hooks/fetch';
import { IDeleteUserTeamPayload } from '../models/data-models';

export function useLeaveTeamQuery() {
  const deleteFn = useDeleteCallback<never, IDeleteUserTeamPayload>();

  const leaveTeamQuery = useCallback(
    (payload: IDeleteUserTeamPayload) => {
      const accessToken = localStorage.getItem("access_token");
      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      return deleteFn(
        `http://localhost:3000/user-team/${payload.utid}`,
        payload,
        headers
      );
    },
    [deleteFn]
  );

  return leaveTeamQuery;
}

export default useLeaveTeamQuery;
