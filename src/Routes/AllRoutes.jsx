import { Heading } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../Pages/Body/Homepage";
import Cartpage from "../Pages/Cart/CartPage";
import CheckoutPage from "../Pages/Cart/CheckOut";
import DetailsPage from "../Pages/details-page/DetailsPage";
import { LoginSignup } from "../Pages/LoginSignup/LoginSignup";
import Product_page_new from "../Pages/Product_page/product_index";
import PrivateRoute from "./PrivateRouter";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/furniture" element={<Product_page_new />}></Route>
      <Route path="/rugs" element={<Product_page_new />}></Route>
      <Route path="/decor" element={<Product_page_new />}></Route>
      <Route path="/bedding" element={<Product_page_new />}></Route>
      <Route path="/home_improvement" element={<Product_page_new />}></Route>
      <Route path="/kitchen" element={<Product_page_new />}></Route>
      <Route path="/outdoor" element={<Product_page_new />}></Route>
      <Route path="/lighting" element={<Product_page_new />}></Route>
      <Route path="/kids_baby" element={<Product_page_new />}></Route>
      <Route path="/more" element={<Product_page_new />}></Route>
      <Route path="/checkout" element={<CheckoutPage />}></Route>
      <Route
        path="/product/:id"
        element={
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/signup" element={<LoginSignup />}></Route>
      <Route path="/cart" element={<Cartpage />}></Route>
    </Routes>
  );
};
