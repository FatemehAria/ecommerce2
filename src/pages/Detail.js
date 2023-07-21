import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../action";
const Detail = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const {id} = useParams();
  useEffect(() => {
    dispatch(getProducts(id))
  },[])
  console.log(data)
  return (
    <div>Detail</div>
  )
}

export default Detail