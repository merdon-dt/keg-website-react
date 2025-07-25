import axios from "axios";
import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);

        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };
    FetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
