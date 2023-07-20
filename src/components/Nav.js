import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex justify-around items-center bg-yellow-900">
        <Link to="/">LA COLLECTION</Link>
        <span className="lg:hidden">
          {!show ? (
            <FaBars onClick={() => setShow(!show)} />
          ) : (
            <RxCross2 onClick={() => setShow(!show)} />
          )}
        </span>

        {/* FOR LG */}
        <div className="hidden lg:inline-block">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/aboutus">About</Link>
            <Link to="/contactus">Contact</Link>
          </ul>
        </div>
        {/* ******** */}
      </div>
      {show && (
        <ul className="flex flex-col items-start justify-center px-16 bg-yellow-600 absolute w-full">
          <Link to="/" onClick={() => setShow(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setShow(false)}>
            Products
          </Link>
          <Link to="/aboutus" onClick={() => setShow(false)}>
            About
          </Link>
          <Link to="/contactus" onClick={() => setShow(false)}>
            Contact
          </Link>
        </ul>
      )}

      <div className="flex justify-evenly items-center bg-yellow-700 lg:inline-block">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart</Link>
      </div>
      {/* Pic */}
      <div>
        <img src={require("../imgs/Shopping7.png")} alt="" />
      </div>
    </div>
  );
};

export default Nav;
