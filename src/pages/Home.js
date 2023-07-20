import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../action";

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center p-5 text-sm gap-4 mx-auto">
        <p onClick={() => setCategory("all")}>All</p>
        <p onClick={() => setCategory("men's clothing")}>Men's Clothing</p>
        <p onClick={() => setCategory("women's clothing")}>Women's Clothing</p>
        <p onClick={() => setCategory("jewelery")}>Jewelery</p>
        <p
          className="hidden md:inline-block"
          onClick={() => setCategory("electronic")}
        >
          Electronic
        </p>
      </div>
      {data.map((product) => {
        switch (category) {
          case product.category:
            return (
              <div
                className="flex justify-center items-center flex-wrap px-10 py-6 m-4 border gap-1 rounded-lg h-72"
                key={product.id}
              >
                <img src={product.image} className="max-w-[60%] max-h-[60%] " />
                <h4 className="text-center w-full h-10 flex justify-center items-center p-2 my-4">
                  {product.title}
                </h4>
                <h5 className="h-5 p-4 flex justify-center items-center">
                  ${product.price}
                </h5>
              </div>
            );

          case "all":
            return (
              <div
                className="flex justify-center items-center flex-wrap px-10 py-6 m-4 border gap-1 rounded-lg h-72"
                key={product.id}
              >
                <img src={product.image} className="max-w-[60%] max-h-[60%] " />
                <h4 className="text-center w-full h-10 flex justify-center items-center p-2 my-4">
                  {product.title}
                </h4>
                <h5 className="h-5 p-4 flex justify-center items-center">
                  ${product.price}
                </h5>
              </div>
            );
        }
      })}
    </div>
  );
};

export default Home;
{
  /* <div
          className="flex justify-center items-center flex-wrap px-10 py-6 m-4 border gap-1 rounded-lg h-72"
          key={product.id}
        >
          <img src={product.image} className="max-w-[60%] max-h-[60%] " />
            <h4 className="text-center w-full h-10 flex justify-center items-center p-2 my-4">{product.title}</h4>
            <h5 className="h-5 p-4 flex justify-center items-center">${product.price}</h5>
          </div> */
}
