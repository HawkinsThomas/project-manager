import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url, method = "GET", postData = null) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    if (method === "GET") {
      axios.get(url)
        .then(res => {
          if (!res.ok) {
            console.log(res);
            throw Error(`Could not complete ${method} request from ${url}.`);
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(error => {
          setIsPending(false);
          setError(error.message)
        })
    }

    return () => abortCont.abort();
  }, [url, method]);

  return {data, isPending, error};
}
 
export default useAxios;