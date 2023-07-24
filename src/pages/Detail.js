import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../action";
import { BsFillCartPlusFill } from "react-icons/bs";

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
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
        <div key={item.id} className="p-10 grid md:grid-cols-2 lg:grid-cols-1">
          <img
            src={item.image}
            alt={item.title}
            className="flex justify-center items-center w-52 h-52 mx-auto"
          />
          <div className="p-2">
            <h2 className="flex justify-center items-center text-center font-semibold">
              {item.title}
            </h2>
            <p className="leading-6 max-w-lg mx-auto">{item.description}</p>
            <h4 className="flex justify-center items-center text-center text-teal-900 font-semibold">
              ${item.price}
            </h4>
            <button
              onClick={() => (dispatch(addToCart(item)), navigate("/cart"))}
              className="border p-2 flex justify-center items-center w-[60%] max-w-lg mx-auto mt-2 rounded-md bg-gray-600 text-white font-semibold"
            >
             <BsFillCartPlusFill className="mr-2"/> Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detail;
