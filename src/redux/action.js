import {
  GET_FURNITURE,
  GET_LOADING,
  GET_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOGIN_SIGNUP_SUCCESS,
  SIGNOUT_SUCCESS,
  ORDER_DONE
} from "./actionTypes";
import axios from "axios";
export const getFurniture = (data) => ({
  type: GET_FURNITURE,
  payload: data,
});

export const getLoading = () => ({
  type: GET_LOADING,
});

export const getError = () => ({
  type: GET_ERROR,
});

export const signoutPerformed = () => ({
  type: SIGNOUT_SUCCESS
});

export const getFurnitureData = (pageNo) => async (dispatch) => {
  dispatch(getLoading());
  return axios
    .get("https://overstock-clone-akash.herokuapp.com/products",{
      params: {
        "_limit": 9,
        "_page": pageNo
      }
    })
    .then((response) => {
      dispatch(getFurniture(response.data));
    })
    .catch((err) => {
      dispatch(getError());
    });
};

export const getFurnitureDataWithParams = ({ _sort, _order },pageNo) => {
  return axios.get(`https://overstock-clone-akash.herokuapp.com/products`, {
    params: {
      "_limit": 9,
      "_page": pageNo,
      _sort,
      _order,
    },
  });
};

export const getFurnitureDataFilter = (category, brands, _sort, _order,pageNo) => {
  return axios.get(`https://overstock-clone-akash.herokuapp.com/products`, {
    params: {
      "_limit": 9,
      "_page": pageNo,
      category,
      brand:brands,
      _sort,
      _order,
    },
  });
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
export const orderDone = () => {
  return {
    type: ORDER_DONE,
  }
}
export const removeFromCart = (id) => async (dispatch) => {
  dispatch(getLoading());
  return axios
    .delete(`https://over-stock.herokuapp.com/AddToCartItems/${id}`)
    .then((response) => {
      dispatch(getCartData());
    })
    .catch((err) => {
      // dispatch(getError());
      console.log(err);
    });
};

export const getCartData = () => async (dispatch) => {
  dispatch(getLoading());
  return axios
    .get(`https://over-stock.herokuapp.com/AddToCartItems`)
    .then((response) => {
      dispatch(addToCart(response.data));
    })
    .catch((err) => {
      dispatch(getError());
      // console.log(err);
    });
};

export const loginSignupSuccess = (payload) => ({
  type: LOGIN_SIGNUP_SUCCESS,
  payload,
});

export const clearCartData = (id) => async (dispatch) => {
  dispatch(getLoading());
  return fetch(`https://over-stock.herokuapp.com/AddToCartItems/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
};

