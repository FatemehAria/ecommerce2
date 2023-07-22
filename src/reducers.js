export const products = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case "data":
      return payload;
    case "loading":
      return payload;
    case "error":
      return payload;
    default:
      return state;
  }
};

export const cart = (state = [] , {payload,type}) => {
  switch (type) {
    case "add":
      return payload;
    case "remove":
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
}