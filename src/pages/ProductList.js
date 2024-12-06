import React, { useState } from 'react';
import { useProducts } from "../hooks/useProducts";
import { FaStar } from 'react-icons/fa';

const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [backgroundImage, setBackgroundImage] = useState(
    'url("https://images.unsplash.com/photo-1517170037-d46d016e53f9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjcwMjJ8MHwxfGFsbHwxfHx8fHx8fHwxNjY0NjY2NzA0&ixlib=rb-1.2.1&q=80&w=1080")'
  );

  // For storing product ratings
  const [ratings, setRatings] = useState({});

  const handleRatingClick = (productId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: rating,
    }));
  };

  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-xl text-red-600">Error fetching products: {error.message}</p>;

  // Apply category filter and price range filter
  const filteredProducts = (products || [])
    .filter((product) => categoryFilter === 'all' || product.category === categoryFilter)
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);

  // Group products by category
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div
      className="container mx-auto p-6 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="bg-opacity-60 bg-black p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Product List</h1>

        {/* Filters Section */}
        <div className="mb-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <label className="text-lg text-white">Category:</label>
            <select
              onChange={(e) => setCategoryFilter(e.target.value)}
              value={categoryFilter}
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
              <option value="books">Books</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="flex items-center space-x-4">
            <label className="text-lg text-white">Price Range:</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="w-32"
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-32"
            />
            <p className="text-lg text-white">{`$${priceRange[0]} - $${priceRange[1]}`}</p>
          </div>
        </div>

        {/* Display products by category */}
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">{category.charAt(0).toUpperCase() + category.slice(1)}:</h2>
            {/* Product grid with CSS Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => {
                const productRating = ratings[product.id] || product.rating; // Use rating from state or default
                return (
                  <div
                    key={product.id}
                    className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl duration-300 flex flex-col"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="mt-4 flex flex-col flex-grow">
                      <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                      <p className="text-gray-600 mt-2 text-sm flex-grow">{product.description}</p>
                      <div className="flex items-center mt-2">
                        {/* Stars Rating */}
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={`text-yellow-400 ${index < productRating ? 'fill-current' : 'text-gray-300'}`}
                            onClick={() => handleRatingClick(product.id, index + 1)}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-lg font-semibold text-green-600">${product.price}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
