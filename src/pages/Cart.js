import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../action";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Cart = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((acc, current) => {
      return acc + current.price * current.qty;
    }, 0);
    setTotal(total);
  });

  return (
    <div className="flex flex-col justify-center items-center mx-auto md:flex-row p-0 md:flex-wrap gap-2 md:max-lg:gap-10 mb-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg px-20 py-16 w-[80%] 2xl:w-[20%] lg:h-96 md:w-[40%]"
        >
          <img
            src={item.image}
            className="w-36 h-40 mx-auto flex justify-center items-center"
          />
          <p
            onClick={() => navigate(`/products/${item.id}`)}
            className="w-full h-5 flex justify-center items-center p-2 my-2 font-semibold"
          >
            {item.title.substr(0, 11)}
          </p>
          <div className="flex flex-row justify-center items-center font-semibold">
            <span onClick={() => dispatch(addToCart(item))} className="mr-2">
              <AiOutlinePlus />
            </span>
            <p>{item.qty}</p>
            <span
              onClick={() => dispatch(removeFromCart(item))}
              className="ml-2"
            >
              <AiOutlineMinus />
            </span>
          </div>

          <p className="h-5 w-full flex justify-center items-center font-semibold text-teal-900">
            ${item.qty * item.price}
          </p>
        </div>
      ))}
      {cart.length ? <p className="w-full text-center font-semibold text-gray-500">Total Price:${parseFloat(total).toFixed(2)}</p> : <p className="w-full text-center font-semibold text-gray-500">Cart Is Empty!</p>}
    </div>
  );
};

export default Cart;
