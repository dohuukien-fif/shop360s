import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useMaxPrice(productApi) {
  const [productMaxPrice, setproduct] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await axios.get(productApi);
        setproduct(res.data.filter((e) => e.price !== undefined).map((e) => e.price));
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [productApi]);

  return {
    productMaxPrice,
    Loading,
  };
}
