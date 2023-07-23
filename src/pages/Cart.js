import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../action";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Cart = () => {
  const [total,setTotal] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((acc,current) => {
      return acc + current.price * current.qty;
    },0);
    setTotal(total);
  })

  return (
    <div>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-center items-center flex-wrap p-10 border w-[90%] mx-auto my-4"
        >
          <img src={item.image} className="w-52 h-52" />
          <p
            onClick={() => navigate(`/products/${item.id}`)}
            className="flex justify-center items-center text-center font-semibold p-2"
          >
            {item.title}
          </p>
          <span onClick={() => dispatch(addToCart(item))} className="mr-2">
            <AiOutlinePlus />
          </span>
          <p>{item.qty}</p>
          <span onClick={() => dispatch(removeFromCart(item))} className="ml-2">
            <AiOutlineMinus />
          </span>
          <p className="w-full text-center text-teal-900 font-semibold">
            ${item.qty * item.price}
          </p>
        </div>
      ))}
      <p>Total Price:{parseFloat(total).toFixed(2)}</p>
    </div>
  );
};

export default Cart;
