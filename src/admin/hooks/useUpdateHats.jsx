import HatsApi from './../../api/ProductHatApi';
import { useState, useEffect } from 'react';
export default function useUpdateHats(productId) {
  const [product, setproduct] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await HatsApi.get(productId);
        setproduct(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [productId]);

  return {
    product,
    Loading,
  };
}
