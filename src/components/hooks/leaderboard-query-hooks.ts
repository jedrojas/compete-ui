import fetch from 'node-fetch';

import { ILeaderboardLI } from '../../models.ts/data-models';

export const getLeaderboard = (type: string) => {
  // TODO: hardcoding ids for now
  const cId = 0;

  return new Promise<ILeaderboardLI[]>(async (resolve, reject) => {
    try {
      await fetch(
        `http://localhost:3000/competition/${cId}/leaderboard/${type}`,
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
