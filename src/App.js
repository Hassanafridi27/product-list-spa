import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route components
import ProductList from './pages/ProductList';  // Example component
import ProductDetails from './pages/ProductDetails';  // Example component

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
