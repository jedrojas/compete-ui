import fetch from 'node-fetch';
import { useEffect, useState } from 'react';

import { ICompetition, ILeaderboardLI } from '../../models.ts/data-models';

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

export const useUserDashboardCompetitions = (uId?: string) => {
  const [data, setData] = useState<ICompetition[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getUserCompetitions = async () => {
      setLoading(true);
      new Promise<void>(async (resolve, reject) => {
        try {
          await fetch(`http://localhost:3000/user/${uId}/competitions`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setLoading(false);
            })
            .catch((e) => {
              setError(e);
              throw new Error("Error getting user competitions");
            });
        } catch (e) {
          console.log("--error--", e);
        }
      });
    };

    if (uId) {
      getUserCompetitions();
    }
  }, [uId]);

  return { data, loading, error };
};
