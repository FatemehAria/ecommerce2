import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "loading",
      payload: { data: [], loading: true, error: "" },
    });
    const { data } = await axios("https://fakestoreapi.com/products");
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
