import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../action";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <h1 className="flex justify-center items-center text-center text-xl font-bold border-b w-[60%] mx-auto pt-11 pb-3">Latest Products</h1>
      <div className="flex justify-center items-center py-5 px-3 lg:text-lg text-sm gap-4 mx-auto">
        <p
          onClick={() => setCategory("all")}
          className="border py-3 border-black rounded-lg px-3 flex justify-center items-center hover:bg-slate-700 hover:text-white cursor-pointer font-semibold"
        >
          All
        </p>
        <p
          onClick={() => setCategory("men's clothing")}
          className="border py-3 border-black rounded-lg px-3 flex justify-center items-center hover:bg-slate-700 hover:text-white cursor-pointer font-semibold"
        >
          Men's Clothing
        </p>
        <p
          onClick={() => setCategory("women's clothing")}
          className="border py-3 border-black rounded-lg px-3 flex justify-center items-center hover:bg-slate-700 hover:text-white cursor-pointer font-semibold"
        >
          Women's Clothing
        </p>
        <p
          onClick={() => setCategory("jewelery")}
          className="hover:bg-slate-700 hover:text-white hidden md:inline-block border py-3 border-black rounded-lg px-3 cursor-pointer font-semibold"
        >
          Jewelery
        </p>
        <p
          onClick={() => setCategory("electronics")}
          className="hover:bg-slate-700 hover:text-white hidden md:inline-block border py-3 border-black rounded-lg px-3 cursor-pointer font-semibold"
        >
          Electronic
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mx-auto md:flex-row p-0 md:flex-wrap gap-2 md:max-lg:gap-10 mb-4 lg:text-xl text-sm">
        {data.map((product) => {
          switch (category) {
            case product.category:
              return (
                <div
                  className="border rounded-lg px-20 py-16 w-[80%] 2xl:w-[20%] lg:h-96 md:w-[40%]"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    className="w-36 h-40 mx-auto flex justify-center items-center"
                  />
                  <h4 className="w-full h-5 flex justify-center items-center p-2 my-2 font-semibold">
                    {product.title.substr(0, 11)}
                  </h4>
                  {/* <h5 className="h-5 w-full flex justify-center items-center">
                    ${product.price}
                  </h5> */}
                  <p
                    className="flex justify-center items-center mx-auto p-3 rounded-lg border border-black my-4 cursor-pointer hover:bg-slate-700 hover:text-white font-semibold"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    ${product.price}
                  </p>
                </div>
              );

            case "all":
              return (
                <div
                  className="border rounded-lg px-20 py-16 w-[80%] 2xl:w-[20%] lg:h-96 md:w-[40%]"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    className="w-36 h-40 mx-auto flex justify-center items-center"
                  />
                  <h4 className="w-full h-5 flex justify-center items-center p-2 my-2 font-semibold">
                    {product.title.substr(0, 11)}
                  </h4>
                  {/* <h5 className="h-5 w-full flex justify-center items-center">
                    ${product.price}
                  </h5> */}
                  <p
                    className="flex justify-center items-center mx-auto p-3 rounded-lg border border-black my-4 cursor-pointer hover:bg-slate-700 hover:text-white font-semibold"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    ${product.price}
                  </p>
                </div>
              );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
