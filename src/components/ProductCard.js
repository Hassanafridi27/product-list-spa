import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
