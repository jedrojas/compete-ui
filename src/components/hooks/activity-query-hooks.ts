import fetch from 'node-fetch';

import { IActivity } from '../../models.ts/data-models';

export const getUserPointsQuery = () => {
  // TODO: hardcoding id=0 for now
  // should probably come from user auth token (I think)
  const uId = 0;
  const cId = 0;

  return new Promise<number>(async (resolve, reject) => {
    try {
      await fetch(
        `http://localhost:3000/user/${uId}/competition/${cId}/points`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    } catch (e) {
      reject(e);
    }
  });
};

export const getUserActivitiesByCompetitionQuery = () => {
  // TODO: hardcoding id=0 for now
  const uId = 0;
  const cId = 0;

  return new Promise<IActivity[]>(async (resolve, reject) => {
    try {
      await fetch(
        `http://localhost:3000/user/${uId}/competition/${cId}/activities`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    } catch (e) {
      reject(e);
    }
  });
};
