import axios from "axios";
import React, { useState } from "react";

const Updateprofile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  const update = async () => {
    const id = JSON.parse(localStorage.getItem("id"));
    try {
      const { data } = await axios.put(
        `https://fakestoreapi.com/users/${id ? id : "" }`,
        {
          email,
          username,
          password,
          name: {
            firstname,
            lastname,
          },
          phone,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[60%] mx-auto flex flex-col justify-center items-center gap-1"
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

        <div className="w-full h-10 flex justify-center items-center">
          <label className="w-[5rem] inline-block">Email:</label>
          <input
            type=""
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border rounded-md ml-2 outline-none px-2 py-1 w-[60%]"
          />
        </div>

        <div className="w-full h-10 flex justify-center items-center">
          <label className="w-[5rem] inline-block">First Name:</label>
          <input
            type=""
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            className="border rounded-md ml-2 outline-none px-2 py-1 w-[60%]"
          />
        </div>

        <div className="w-full h-10 flex justify-center items-center">
          <label className="w-[5rem] inline-block">Last Name:</label>
          <input
            type=""
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            className="border rounded-md ml-2 outline-none px-2 py-1 w-[60%]"
          />
        </div>

        <div className="w-full h-10 flex justify-center items-center">
          <label className="w-[5rem] inline-block">Phone:</label>
          <input
            type=""
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="border rounded-md ml-2 outline-none px-2 py-1 w-[60%]"
          />
        </div>

        <button
          onClick={() => update()}
          className="flex justify-center items-center py-2 px-10 md:px-9 w-[10%] rounded-lg border border-black cursor-pointer hover:bg-slate-700 hover:text-white font-semibold"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Updateprofile;
