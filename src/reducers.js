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
