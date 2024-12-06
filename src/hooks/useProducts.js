import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('http://localhost:3001/products'); // Adjust the API URL as needed
  return response.data;
};

const useProducts = () => {
  return useQuery({
    queryKey: ['products'], // Unique key for caching
    queryFn: fetchProducts, // Function to fetch data
  });
};

export default useProducts;
