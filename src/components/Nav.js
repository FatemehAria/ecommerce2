import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="lg:h-[40rem] lg:bg-navBg lg:bg-cover lg:bg-center lg:object-cover pt-2 bg-gradient-to-r from-slate-600 to-slate-400">
      <div className="flex justify-around items-center mb-2 lg:justify-evenly lg:bg-transparent">
        <Link to="/">LA COLLECTION</Link>

        {/* FOR LG */}
        <div className="hidden lg:inline-block">
          <ul className="lg:flex lg:gap-20 lg:justify-center lg:items-center">
            <Link to="/" className="hover:text-gray-600 border-slate-600 hover:border-b-2">Home</Link>
            <Link to="/products" className="hover:text-gray-600 border-slate-600 hover:border-b-2">Products</Link>
            <Link to="/aboutus" className="hover:text-gray-600 border-slate-600 hover:border-b-2">About</Link>
            <Link to="/contactus" className="hover:text-gray-600 border-slate-600 hover:border-b-2">Contact</Link>
          </ul>
        </div>
        <div className="hidden lg:flex lg:gap-5 lg:justify-center lg:items-center">
          <Link
            to="/login"
            className="border border-black py-1 px-4 rounded-lg hover:bg-slate-600 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-black py-1 px-4 rounded-lg hover:bg-slate-600 hover:text-white"
          >
            Register
          </Link>
          <Link
            to="/cart"
            className="border border-black py-1 px-4 rounded-lg hover:bg-slate-600 hover:text-white"
          >
            Cart
          </Link>
        </div>
        <span className="lg:hidden">
          {!show ? (
            <FaBars onClick={() => setShow(!show)} />
          ) : (
            <RxCross2 onClick={() => setShow(!show)} />
          )}
        </span>
      </div>
      {show && (
        <ul className="flex flex-col items-start justify-center px-16 absolute w-full bg-white md:px-[21%] lg:hidden  ">
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

      <div className="flex justify-evenly items-center lg:hidden">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart</Link>
      </div>
      {/* Pic */}
      {/* <div className="lg:hidden">
        <img src={require('../imgs/Shopping7.png')} alt="shopping"/>
      </div> */}
    </div>
  );
};

export default Nav;
