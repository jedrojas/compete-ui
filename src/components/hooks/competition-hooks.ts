import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

import { ICompetition, IJoinableCompetition } from '../../models.ts/data-models';

export const useAllCompetitionsQuery = () => {
  const [data, setData] = useState<ICompetition[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getAllCompetitions = async () => {
      setLoading(true);
      new Promise<void>(async (resolve, reject) => {
        try {
          await fetch(`http://localhost:3000/competition`, {
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
              throw new Error("Error getting all competitions");
            });
        } catch (e) {
          console.log("--error--", e);
        }
      });
    };

    getAllCompetitions();
  }, []);

  return { data, loading, error };
};

export const useJoinableCompetitionsQuery = () => {
  const [data, setData] = useState<IJoinableCompetition[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { user } = useAuth0();

  useEffect(() => {
    const getJoinableCompetitions = async () => {
      setLoading(true);
      new Promise<void>(async (resolve, reject) => {
        try {
          await fetch(
            `http://localhost:3000/user/${user.sub}/joinable-competitions`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setLoading(false);
            })
            .catch((e) => {
              setError(e);
              throw new Error("Error getting joinable competitions");
            });
        } catch (e) {
          console.log("--error--", e);
        }
      });
    };

    getJoinableCompetitions();
  }, [user.sub]);

  return { data, loading, error };
};
