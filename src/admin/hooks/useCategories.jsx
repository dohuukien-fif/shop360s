import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useCategories(productApi) {
  const [productCategories, setproduct] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await axios.get(productApi);
        setproduct(res.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [productApi]);

  return {
    productCategories,
    Loading,
  };
}
