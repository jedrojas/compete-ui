import { useCallback, useEffect, useState } from 'react';

export interface QueryResult<T> {
  data?: T;
  error?: string;
  loading: boolean;
}

export const get = async <T>(
  url: string,
  requestHeaders: Record<string, string>
) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    ...requestHeaders,
  });

  const res = await fetch(url, {
    method: "GET",
    headers,
    redirect: "follow",
  });

  return (await res.json()) as T;
};

export const useGet = <D>(url: string) => {
  interface IError {
    errorMessage?: string;
  }

  const [data, setData] = useState<D | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);

    // add headers here if needed
    const headers = {};

    get<D & IError>(url, headers)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export const useGetCallback = () => {
  const getFn = useCallback(<D>(url: string, token: string | null) => {
    const headers: Record<string, string> = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};

    return get<D>(url, headers);
  }, []);

  return getFn;
};

export const post = async <T>(
  url: string,
  payload: unknown,
  requestHeaders: Record<string, string>
) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    ...requestHeaders,
  });

  const res = await fetch(url, {
    method: "POST",
    headers,
    redirect: "follow",
    body: JSON.stringify(payload),
  });

  return (await res.json()) as T;
};

export const usePost = <D, P>(url: string, payload: P) => {
  const [data, setData] = useState<D | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);

    // add headers here if needed
    const headers = {};

    post<D>(url, payload, headers)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [payload, url]);

  return { data, loading, error };
};

export const usePostCallback = <D, P>() => {
  const postFn = useCallback((url: string, payload: P) => {
    const headers = {}; // add headers here if needed

    return post<D>(url, payload, headers);
  }, []);

  return postFn;
};
