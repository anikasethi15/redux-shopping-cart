import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

const Cart = () => {
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid gray", padding: 20, marginTop: 30 }}>
      <h2>🛒 Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ${item.price}{" "}
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </p>
          </div>
        ))
      ) : (
        <p>No items in cart.</p>
      )}
    </div>
  );
};

export default Cart;
