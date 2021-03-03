import { useEffect, useState } from 'react';

export interface QueryResult<T> {
  data?: T;
  error?: string;
  loading: boolean;
}

export const useFetch = <T>(url: string, method: string): QueryResult<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const queryData = async () => {
      setLoading(true);
      new Promise<void>(async (resolve, reject) => {
        try {
          await fetch(url, {
            method,
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (!data.errorMessage) {
                setData(data);
              }
              setLoading(false);
            })
            .catch((e) => {
              setError(e);
              throw new Error("Error using fetch");
            });
        } catch (e) {
          console.log("--error--", e);
          setLoading(false);
        }
      });
    };

    queryData();
  }, [method, url]);

  return { data, loading, error };
};

export const useFetchPost = <T>(url: string, body: any): QueryResult<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const queryData = async () => {
      setLoading(true);
      new Promise<void>(async (resolve, reject) => {
        try {
          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          })
            .then((res) => res.json())
            .then((data) => {
              if (!data.errorMessage) {
                setData(data);
              }
              setLoading(false);
            })
            .catch((e) => {
              setError(e);
              throw new Error("Error using fetch post");
            });
        } catch (e) {
          console.log("--error--", e);
          setLoading(false);
        }
      });
    };

    queryData();
  }, [body, url]);

  return { data, loading, error };
};
