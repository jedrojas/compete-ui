import fetch from 'node-fetch';

import { IActivity } from '../../models.ts/data-models';

export const getUserActivitiesQuery = () => {
  // TODO: hardcoding id=0 for now
  const id = 0;

  return new Promise<IActivity[]>(async (resolve, reject) => {
    try {
      await fetch(`http://localhost:3000/user/${id}/activities`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    } catch (e) {
      reject(e);
    }
  });
};
