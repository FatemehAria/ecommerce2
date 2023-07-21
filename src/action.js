import axios from "axios";

export const getProducts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "loading",
      payload: { data: [], loading: true, error: "" },
    });
    const { data } = await axios(`https://fakestoreapi.com/products/${id ? id : ""}`);
    console.log(data);
    dispatch({
      type: "data",
      payload: { data: [...data], loading: false, error: "" },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "error",
      payload: { data: [], loading: false, error: `${error.message}` },
    });
  }
};
