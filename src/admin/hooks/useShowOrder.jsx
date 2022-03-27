import OrderApi from './../../api/OrderApi';
import { useState, useEffect } from 'react';
export default function useUpdateProduct(productId) {
  const [product, setproduct] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await OrderApi.get(Number(productId));
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
