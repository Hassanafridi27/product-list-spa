import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('http://localhost:3001/products');
  return response.data; // Axios returns the data in the `data` property
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'], // Pass the query key as an array
    queryFn: fetchProducts, // Pass the query function
  });
};
