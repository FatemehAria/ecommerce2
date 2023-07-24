import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[80%] mx-auto flex flex-col justify-center items-center gap-1"
      >
        <div className="w-full h-10">
          <label className="w-[5rem] inline-block">Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="border rounded-md ml-2 outline-none px-2 py-1"
          />
        </div>

        <div className="w-full h-10">
          <label className="w-[5rem] inline-block">Password:</label>
          <input
            type=""
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border rounded-md ml-2 outline-none px-2 py-1"
          />
        </div>

        <button
          onClick={() => login()}
          className="flex justify-center items-center p-2 w-[30%] rounded-lg border border-black cursor-pointer hover:bg-slate-700 hover:text-white font-semibold"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="flex justify-center items-center p-2 w-[30%] rounded-lg border border-black cursor-pointer hover:bg-slate-700 hover:text-white font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
