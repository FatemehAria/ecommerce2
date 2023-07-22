import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div>
      {cart.map((item) => (
        <div>
          <img src={item.image} />
          <p onClick={() => navigate(`/products/${item.id}`)}>{item.title}</p>
          <p>qty:{item.qty}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
