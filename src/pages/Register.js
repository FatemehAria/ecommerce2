import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  const signup = async () => {
    try {
      const { data } = await axios.post("https://fakestoreapi.com/users", {
        email,
        username,
        password,
        name: {
          firstname,
          lastname,
        },
        phone,
      });
      console.log(data);
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

        <div className="w-full h-10">
          <label className="w-[5rem] inline-block">Email:</label>
          <input
            type=""
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border rounded-md ml-2 outline-none px-2 py-1"
          />
        </div>

        <div className="w-full h-10">
          <label className="w-[5rem] inline-block">First Name:</label>
          <input
            type=""
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            className="border rounded-md ml-2 outline-none px-2 py-1"
          />
        </div>

        <div className="w-full h-10">
          <label className="w-[5rem] inline-block">Last Name:</label>
          <input
            type=""
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            className="border rounded-md ml-2 outline-none px-2 py-1"
          />
        </div>

        <div className="w-full h-10">
          <label className="w-[5rem] inline-block">Phone:</label>
          <input
            type=""
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="border rounded-md ml-2 outline-none px-2 py-1"
          />
        </div>

        <button
          onClick={() => signup()}
          className="flex justify-center items-center p-2 w-[30%] rounded-lg border border-black cursor-pointer hover:bg-slate-700 hover:text-white font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
