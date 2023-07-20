import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../action";

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center p-5 text-sm gap-4 mx-auto">
        <p>All</p>
        <p>Men's Clothing</p>
        <p>Women's Clothing</p>
        <p>Jewelery</p>
        <p className="hidden md:inline-block">Electronic</p>
      </div>

      {
        data.map((product) => <div>{product.title}</div>)
      }
    </div>
  );
};

export default Home;
