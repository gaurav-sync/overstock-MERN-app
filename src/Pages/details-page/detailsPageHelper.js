import axios from "axios"

export const postToCartItem = (payload) => {
    return axios .post("https://over-stock.herokuapp.com/AddToCartItems",payload);
} 

export const getToCartItem = () => {
    return axios .get("https://over-stock.herokuapp.com/AddToCartItems");
} 