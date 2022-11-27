import axios from "axios";

export const postToCartItem = (userId, product_id, quantity) => {
  const body = {
    userId,
    product_id,
    quantity,
  };
  return fetch(`https://overstock-api.onrender.com/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const getToCartItem = (userId) => {
  return axios.get(`https://overstock-api.onrender.com/cart/${userId}`);
};
