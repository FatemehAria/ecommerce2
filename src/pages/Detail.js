import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../action";
const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // console.log(cart)
  const navigate = useNavigate();
  const getDetail = async (id) => {
    try {
      const { data } = await axios(`https://fakestoreapi.com/products/${id}`);
      setDetail([data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetail(id);
  }, []);
  return (
    <div>
      {detail.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h4>{item.price}</h4>
          <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
          <button onClick={() => dispatch(removeFromCart(item))}>
            Remove From cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Detail;
