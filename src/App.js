import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./features/cart/Cart";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🛒 Redux Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
