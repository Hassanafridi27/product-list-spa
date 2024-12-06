import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to get route parameters
import { useQuery } from '@tanstack/react-query';

// Fetch product data from the mock API
const fetchProductDetails = async (id) => {
  const response = await fetch(`http://localhost:3001/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }
  return response.json();
};

function ProductDetails() {
  const { id } = useParams(); // Get the id from the URL

  // Use React Query to fetch product details based on the id
  const { data, error, isLoading } = useQuery({
    queryKey: ['product', id],  // Use queryKey as an array of the resource and id
    queryFn: () => fetchProductDetails(id),
    enabled: !!id, // Ensure the query runs only if there's an id in the URL
  });

  // Display loading state
  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  // Display error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Display the product details
  return (
    <div>
      <h1>Product Details for {data.name}</h1>
      <img src={data.image} alt={data.name} width="150" />
      <p>Description: {data.description}</p>
      <p>Price: ${data.price}</p>
    </div>
  );
}

export default ProductDetails;
