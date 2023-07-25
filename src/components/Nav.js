import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import { AiFillHome } from "react-icons/ai";
import { BiSolidLogInCircle, BiSolidRegistered ,BiSolidLogOutCircle} from "react-icons/bi";
import { GrDocumentUpdate } from "react-icons/gr";
import { BsFillCartFill , BsFillMoonStarsFill} from "react-icons/bs";
const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="my-2">
      <div className="flex justify-around items-center mb-2 lg:justify-around lg:bg-transparent">
        <Link to="/" style={{ fontFamily: "burtons" }}>
          LA COLLECTION
        </Link>

        {/* FOR LG */}
        <div className="hidden lg:inline-block text-lg">
          <ul className="lg:flex lg:gap-16 lg:justify-center lg:items-center lg:pl-24">
            <AiFillHome
              onClick={() => navigate("/")}
              className="border-slate-600 hover:border-b-2"
            ></AiFillHome>
            <Link
              to="/products"
              className="hover:text-slate-700 border-slate-600 hover:border-b-2 font-semibold"
            >
              Products
            </Link>
            <Link
              to="/aboutus"
              className="hover:text-slate-700 border-slate-600 hover:border-b-2 font-semibold"
            >
              About
            </Link>
            <Link
              to="/contactus"
              className="hover:text-slate-700 border-slate-600 hover:border-b-2 font-semibold"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className="hidden lg:flex lg:gap-5 lg:justify-center lg:items-center">
          <Link
            to={`${localStorage.getItem("token") ? "/update" : "/login"}`}
            className={`border border-black py-1 px-4 rounded-lg hover:bg-slate-700 hover:text-white font-semibold `}
          >
            {localStorage.getItem("token") ? (
              <div className="flex justify-center items-center gap-1">
                <GrDocumentUpdate />
                Update Your Profile
              </div>
            ) : (
              <div className="flex justify-center items-center gap-1">
                <BiSolidLogInCircle /> Login
              </div>
            )}
          </Link>
          <Link
            to="/register"
            className={`${
              localStorage.getItem("token") ? "hidden" : ""
            } border border-black py-1 px-4 rounded-lg hover:bg-slate-700 hover:text-white font-semibold flex justify-center items-center gap-1`}
          >
            <BiSolidRegistered />
            Register
          </Link>
          {localStorage.getItem("token") ? (
            <p
              className="border border-black py-1 px-4 rounded-lg hover:bg-slate-700 hover:text-white font-semibold flex justify-center items-center gap-1"
              onClick={() => (localStorage.clear(), navigate("/"))}
            >
              <BiSolidLogOutCircle/>Logout
            </p>
          ) : (
            ""
          )}
          <Link
            to="/cart"
            className="border border-black py-1 px-4 rounded-lg hover:bg-slate-700 hover:text-white font-semibold flex justify-center items-center gap-1"
          >
            <BsFillCartFill/>Cart
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
        <ul className="flex flex-col items-start justify-center px-16 absolute w-full bg-white md:px-[21%] lg:hidden font-semibold">
          <Link
            to="/"
            onClick={() => setShow(false)}
            className="hover:text-amber-500"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setShow(false)}
            className="hover:text-amber-500"
          >
            Products
          </Link>
          <Link
            to="/aboutus"
            onClick={() => setShow(false)}
            className="hover:text-amber-500"
          >
            About
          </Link>
          <Link
            to="/contactus"
            onClick={() => setShow(false)}
            className="hover:text-amber-500"
          >
            Contact
          </Link>
        </ul>
      )}

      <div className="flex justify-evenly items-center lg:hidden">
        <Link
          to={`${localStorage.getItem("token") ? "/update" : "/login"}`}
          className="hover:border-slate-600 hover:border-b-2"
        >{`${
          localStorage.getItem("token") ? "Update Your Profile" : "Login"
        }`}</Link>

        <Link
          to="/register"
          className={`${
            localStorage.getItem("token") ? "hidden" : ""
          } hover:border-slate-600 hover:border-b-2`}
        >
          Register
        </Link>

        {localStorage.getItem("token") ? (
          <p
            className="hover:border-slate-600 hover:border-b-2"
            onClick={() => (localStorage.clear(), navigate("/"))}
          >
            Logout
          </p>
        ) : (
          ""
        )}

        <Link to="/cart" className="hover:border-slate-600 hover:border-b-2">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Nav;
