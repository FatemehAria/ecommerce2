import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../action";

const Products = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
        </div>
      ))}
    </div>
  );
};

export default Products;
