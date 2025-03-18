import { useCallback, useEffect, useState } from "react";

async function sendHTTPRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Error, something went wrong");
  }

  return resData;
}

export default function useHTTP(url, config, initialData) {
  const [Isloading, setLoading] = useState(initialData);
  const [data, setData] = useState();
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setLoading(true);
      try {
        const resData = await sendHTTPRequest(url, { ...config, body: data });
        setData(resData);
      } catch (e) {
        setError(e.message || "Error, something went wrong");
      }
      setLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return { data, Isloading, error, sendRequest, clearData };
}
