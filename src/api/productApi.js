const fetchProducts = async () => {
  const response = await axios.get('/api/products'); // No need for localhost or external URL
  return response.data;
};
