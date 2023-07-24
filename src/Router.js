import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Updateprofile from "./pages/Updateprofile";
import Auth from "./pages/Auth";
import Auth2 from "./pages/Auth2";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Detail />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/login" element={<Auth2><Login /></Auth2>} />
      <Route path="/register" element={<Auth2><Register /></Auth2>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/update" element={<Auth><Updateprofile /></Auth>} />
    </Routes>
  );
};

export default Router;
