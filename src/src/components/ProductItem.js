import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "10px 0" }}>
      <span>
        {product.name} - ${product.price}
      </span>
      <button
        style={{ marginLeft: 10 }}
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
