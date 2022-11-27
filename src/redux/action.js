import {
  GET_FURNITURE,
  GET_LOADING,
  GET_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOGIN_SIGNUP_SUCCESS,
  SIGNOUT_SUCCESS,
  ORDER_DONE,
} from "./actionTypes";
import axios from "axios";
export const getFurniture = (data) => ({
  type: GET_FURNITURE,
  payload: data.data,
});

export const getLoading = () => ({
  type: GET_LOADING,
});

export const getError = () => ({
  type: GET_ERROR,
});

export const signoutPerformed = () => ({
  type: SIGNOUT_SUCCESS,
});

export const getFurnitureData = (pageNo) => async (dispatch) => {
  dispatch(getLoading());
  return axios
    .get("https://overstock-api.onrender.com/products", {
      params: {
        page: pageNo,
      },
    })
    .then((response) => {
      dispatch(getFurniture(response.data));
    })
    .catch((err) => {
      dispatch(getError());
    });
};

export const getFurnitureDataWithParams = ({ sortby, order }, pageNo) => {
  return axios.get(`https://overstock-api.onrender.com/products`, {
    params: {
      limit: 9,
      page: pageNo,
      sortby,
      order,
    },
  });
};

export const getFurnitureDataFilter = (
  category,
  brands,
  sortby,
  order,
  pageNo
) => {
  return axios.get(`https://overstock-api.onrender.com/products`, {
    params: {
      limit: 9,
      page: pageNo,
      category,
      brand: brands,
      sortby,
      order,
    },
  });
};

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data.data,
  };
};
export const orderDone = () => {
  return {
    type: ORDER_DONE,
  };
};
export const removeFromCart = (_id, userId) => async (dispatch) => {
  dispatch(getLoading());
  return axios
    .delete(`https://overstock-api.onrender.com/cart/${_id}`)
    .then(() => {
      dispatch(getCartData(userId));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCartData = (userId) => async (dispatch) => {
  dispatch(getLoading());
  return axios
    .get(`https://overstock-api.onrender.com/cart/${userId}`)
    .then((response) => {
      dispatch(addToCart(response.data));
    })
    .catch((err) => {
      dispatch(getError());
    });
};

export const loginSignupSuccess = (payload) => ({
  type: LOGIN_SIGNUP_SUCCESS,
  payload,
});

export const clearCartData = (userId) => async (dispatch) => {
  dispatch(getLoading());
  return fetch(`https://overstock-api.onrender.com/cart/checkout/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
