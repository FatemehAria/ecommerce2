import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-5 text-sm gap-4 mx-auto">
        <p>All</p>
        <p>Men's Clothing</p>
        <p>Women's Clothing</p>
        <p>Jewelery</p>
        <p className="hidden md:inline-block">Electronic</p>
      </div>
    </div>
  );
};

export default Home;
