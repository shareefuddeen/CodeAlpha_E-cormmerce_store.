import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home.jsx";
import Products from "./Products";
import CartItem from "./CartItem";
import Order from "./Order.jsx";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/get-order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
