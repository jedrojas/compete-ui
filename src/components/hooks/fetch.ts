import { useCallback, useEffect, useState } from 'react';

import { IError } from './activities-queries';

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

export const useGet = <D>(
  url: string,
  addedHeaders?: Record<string, string>
) => {
  const [data, setData] = useState<D | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);

    const headers = { ...addedHeaders };

    get<D & IError>(url, headers)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [addedHeaders, url]);

  return { data, loading, error };
};

export const useGetCallback = () => {
  const getFn = useCallback(<D>(url: string, token: string | null) => {
    const headers: Record<string, string> = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};

    return get<D & IError>(url, headers);
  }, []);

  return getFn;
};

export const put = async <T, P>(
  url: string,
  payload: P,
  requestHeaders: Record<string, string>
) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    ...requestHeaders,
  });

  const res = await fetch(url, {
    method: "PUT",
    headers,
    redirect: "follow",
    body: JSON.stringify(payload),
  });

  return (await res.json()) as T;
};

export const usePut = <D, P>(url: string, payload: P) => {
  const [data, setData] = useState<D | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);

    // add headers here if needed
    const headers = {};

    post<D, P>(url, payload, headers)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [payload, url]);

  return { data, loading, error };
};

export const usePutCallback = <D, P>() => {
  const putFn = useCallback(
    (url: string, payload: P, addedHeaders?: Record<string, string>) => {
      const headers = { ...addedHeaders };

      return put<D, P>(url, payload, headers);
    },
    []
  );

  return putFn;
};

export const post = async <T, P>(
  url: string,
  payload: P,
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

    post<D, P>(url, payload, headers)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [payload, url]);

  return { data, loading, error };
};

export const usePostCallback = <D, P>() => {
  const postFn = useCallback(
    (url: string, payload: P, addedHeaders?: Record<string, string>) => {
      const headers = { ...addedHeaders };

      return post<D, P>(url, payload, headers);
    },
    []
  );

  return postFn;
};

export const deleteReq = async <T, P>(
  url: string,
  payload: P,
  requestHeaders: Record<string, string>
) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    ...requestHeaders,
  });

  const res = await fetch(url, {
    method: "DELETE",
    headers,
    redirect: "follow",
    body: JSON.stringify(payload),
  });

  return (await res.json()) as T;
};

export const useDelete = <D, P>(url: string, payload: P) => {
  const [data, setData] = useState<D | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);

    // add headers here if needed
    const headers = {};

    deleteReq<D, P>(url, payload, headers)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [payload, url]);

  return { data, loading, error };
};

export const useDeleteCallback = <D, P>() => {
  const deleteFn = useCallback(
    (url: string, payload: P, addedHeaders?: Record<string, string>) => {
      const headers = { ...addedHeaders };

      return deleteReq<D, P>(url, payload, headers);
    },
    []
  );

  return deleteFn;
};
