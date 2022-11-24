import {
  GET_FURNITURE,
  GET_ERROR,
  GET_LOADING,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOGIN_SIGNUP_SUCCESS,
  SIGNOUT_SUCCESS,
  ORDER_DONE,
} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  furnitures: [],
  cart: [],
  isAuth: false
};


if(window.localStorage.getItem("token")) {
  initState.isAuth = true;
}

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_FURNITURE: {
      return {
        ...state,
        loading: false,
        error: false,
        furnitures: payload,
        cart: state.cart,
      };
    }
    case GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        furnitures: [],
        cart: [],
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        loading: false,
        error: false,
        furnitures: state.furnitures,
        cart: payload,
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        loading: false,
        error: false,
        furnitures: state.furnitures,
        cart: payload,
      };
    }
    case LOGIN_SIGNUP_SUCCESS: {
      window.localStorage.setItem("token",payload);
      return {
        ...state,
        isAuth: true
      }
    }
    case SIGNOUT_SUCCESS: {
      window.localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false
      }
    }
    case ORDER_DONE: {
      return {
        ...state,
        loading: false,
        error: false,
        cart: []
      }
    }
    default: {
      return state;
    }
  }
};
