import ShirtApi from './../../../../api/ProductShritApi';
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../firebase';
export default function useSales(productId) {
  const [products, setproduct] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        onSnapshot(collection(db, 'Sales'), (snapshot) =>
          setproduct(
            snapshot.docs.map((doc) => ({ ...doc.data() })).find((e) => e.id === Number(productId))
          )
        );
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [productId]);
  console.log('[productproductproductproduct', products);
  return {
    products,
    Loading,
  };
}
