import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "loading",
      payload: { data: [], loading: true, error: "" },
    });
    const { data } = await axios(`https://fakestoreapi.com/products/`);
    // console.log(data);
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

export const addToCart = (product) => (dispatch, getState) => {
  const exist = getState().cart.find((item) => item.id === product.id);
  if (exist) {
    const updatedcart = getState().cart.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
    dispatch({ type: "add", payload: updatedcart });
  } else {
    dispatch({
      type: "add",
      payload: [...getState().cart, { ...product, qty: 1 }],
    });
  }
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const exist = getState().cart.find((item) => item.id === product.id);
  if (exist.qty === 1) {
    dispatch({
      type: "remove",
      payload: getState().cart.filter((item) => item.id !== product.id),
    });
  } else {
    dispatch({
      type: "remove",
      payload: getState().cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      ),
    });
  }
};
