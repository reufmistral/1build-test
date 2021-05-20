import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const HTTP_VERBS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const HTTP_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  OK: 200,
};

export interface Api {
  result: any;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  fetch: () => void;
}

/**
 * Custom hook for handling API requests.
 * @param {string} url - API URL endpoint
 * @param {string} verb - GET/POST/PUT/DELETE/PATCH
 * @param {object} data - data to be sent to the API endpoint
 * @param {object} client - API client for handling requests (in case there are multiple clients)
 * @param {bool} initialFetch - indicates whether the API call should be executed immediately
 */
export const useApi = (
  url: string,
  {
    initialFetch = true,
    client = instance,
    verb = HTTP_VERBS.GET,
    data = null,
  } = {}
): Api => {
  const [result, setResult] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(initialFetch);

  const execute = useCallback(
    (obj) => {
      let route = null;
      switch (verb) {
        case HTTP_VERBS.GET:
          route = client.get(url);
          break;
        case HTTP_VERBS.POST:
          route = client.post(url, obj);
          break;
        case HTTP_VERBS.PUT:
          route = client.put(url, obj);
          break;
        case HTTP_VERBS.PATCH:
          route = client.patch(url, obj);
          break;
        case HTTP_VERBS.DELETE:
          route = client.delete(url);
          break;
        default:
          route = client.get(url);
          break;
      }

      return route;
    },
    [url, verb, client]
  );

  const fetch = useCallback(
    async (obj = null) => {
      setIsLoading(true);

      try {
        const response = await execute(obj || data);
        const items = response.data;
        setResult(items);
        setIsError(false);
        setIsLoading(false);
        setIsSuccess(true);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
        setIsSuccess(false);
      }
    },
    [execute, data]
  );

  useEffect(() => {
    if (initialFetch) {
      fetch();
    }
  }, [url, fetch, initialFetch]);

  return { result, isLoading, isError, isSuccess, fetch };
};
