import React from "react";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Headphones", price: 100 },
  { id: 3, name: "Smartwatch", price: 200 },
];

const ProductList = () => {
  return (
    <div>
      <h2>🛍️ Product List</h2>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
