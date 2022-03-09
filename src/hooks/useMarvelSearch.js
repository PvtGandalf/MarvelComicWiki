import { useState, useEffect } from 'react';
import md5 from 'md5';

const PUB_KEY = process.env.REACT_APP_MARVEL_API_PUB_KEY;
const PRIV_KEY = process.env.REACT_APP_MARVEL_API_PRIV_KEY;
const TIMESTAMP = Math.floor(Date.now()/1000);
const HASH = md5(TIMESTAMP+PRIV_KEY+PUB_KEY);

function useMarvelSearch(url) {
  const [ items, setItems ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const authUrl = `${url}ts=${TIMESTAMP}&apikey=${PUB_KEY}&hash=${HASH}`;

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    async function fetchSearchResults() {
      let responseBody = {};
      setLoading(true);
      try {
        const response = await fetch(
		  authUrl,
          { signal: controller.signal }
        );
        responseBody = await response.json();
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("== HTTP request cancelled")
        } else {
          setError(true);
          throw e;
        }
      }
      if (!ignore) {
        setLoading(false);
        setError(false);
        setItems(responseBody.data.results || []);
      }
    }
    if (url) {
      fetchSearchResults();
    }
    return () => {
      controller.abort();
      ignore = true;
    }
  }, [ url ]);
  return [ items, loading, error ];
}

export default useMarvelSearch;