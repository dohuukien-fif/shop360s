import SneakerApi from './../../api/productapi';
import { useState, useEffect } from 'react';
export default function useUpdateProduct(productId) {
  const [product, setproduct] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await SneakerApi.get(productId);
        setproduct(res);
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
