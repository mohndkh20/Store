export const addCart = product => {
  return {
    type: "ADDCART",
    payload: product
  };
};

export const removeCart = product => {
  return {
    type: "REMOVECART",
    payload: product
  };
};
