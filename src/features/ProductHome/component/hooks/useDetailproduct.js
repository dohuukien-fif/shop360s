import { useEffect, useState } from 'react';
import ProductApi from './../../../../api/productapi';
export default function useDetailProduct(productId) {
  const [product, setproduct] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await ProductApi.get(productId);
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
