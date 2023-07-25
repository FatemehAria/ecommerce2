import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async () => {
    try {
      const { data } = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      console.log(data);
      localStorage.setItem("token", JSON.stringify(data.token));
      // localStorage.setItem("id", JSON.stringify(data.id));
      navigate("/update");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <motion.form
        onSubmit={(e) => e.preventDefault()}
        className="w-[60%] mx-auto flex flex-col justify-center items-center gap-1"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-10 flex justify-center items-center">
          <label className="w-[5rem] inline-block">Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="border rounded-md ml-2 outline-none px-2 py-1 w-[60%]"
          />
        </div>

        <div className="w-full h-10 flex justify-center items-center">
          <label className="w-[5rem] inline-block">Password:</label>
          <input
            type=""
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border rounded-md ml-2 outline-none px-2 py-1 w-[60%]"
          />
        </div>

        <button
          onClick={() => login()}
          className="flex justify-center items-center py-2 px-10 md:px-9 w-[10%] rounded-lg border border-black cursor-pointer hover:bg-slate-700 hover:text-white font-semibold"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="flex justify-center items-center py-2 px-10 md:px-9 w-[10%] rounded-lg border border-black cursor-pointer hover:bg-slate-700 hover:text-white font-semibold"
        >
          Register
        </button>
      </motion.form>
    </div>
  );
};

export default Login;
