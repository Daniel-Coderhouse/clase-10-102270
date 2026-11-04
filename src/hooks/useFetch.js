import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url, id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const urlToFetch = id ? `${url}/${id}` : { url };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(urlToFetch);
        setData(response.data);
      } catch (error) {
        console.error("Hubo un error en la solicitud", error);
        setError("Hubo un error en la solicitud");
      } finally {
        setTimeout(() => setLoading(false), 1500);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
