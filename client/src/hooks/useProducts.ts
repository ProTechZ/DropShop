import axios, { AxiosError } from 'axios';
import { ProductType } from '../pages/AllProducts';
import { useState, useEffect } from 'react';

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    try {
      (async () => {
        const data = await axios.get('http://localhost:8000/products');

        setIsLoading(false);
        setData(data.data as ProductType[]);
      })();
    } catch (err) {
      setError(err as AxiosError);
    }
  }, []);

  return { isLoading, error, data };
};

export default useProducts;
