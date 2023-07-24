import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../action";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  console.log(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mx-auto md:flex-row p-0 md:flex-wrap gap-4 md:max-lg:gap-10 mb-4 mt-1">
      {data.map((product) => (
        <div key={product.id} className="border rounded-lg px-20 py-16 w-[80%] 2xl:w-[20%] lg:h-96 md:w-[40%] cursor-pointer hover:shadow-xl" onClick={() => navigate(`/products/${product.id}`)}>
          <img src={product.image} alt={product.title} className="w-36 h-40 mx-auto flex justify-center items-center mb-4"/>
          <h4 className="w-full h-5 flex justify-center items-center p-2 py-4 font-semibold text">{product.title.substr(0, 11)}</h4>
          <h5 className="h-5 w-full flex justify-center items-center text-teal-900 font-semibold py-4">${product.price}</h5>
        </div>
      ))}
    </div>
  );
};

export default Products;
