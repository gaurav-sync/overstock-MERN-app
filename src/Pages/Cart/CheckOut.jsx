import React, { useEffect, useState } from "react";
//bootstrap
import "./checkout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import TransitionExample from "../../Components/AlertBar/AlertComponents";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { clearCartData, getCartData, orderDone } from "../../redux/action";
import { Navigate, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function CheckoutPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cancelRef = useRef();
  const [demo, setDemo] = useState("");
  const { cart } = useSelector((state) => state);

  useEffect(() => {}, [demo]);
  const decoded = jwt_decode(localStorage.getItem("token"));
  const userId = decoded._id;
  // console.log(first)
  const getTotalPrice = () => {
    let totalPrice = 0;
    totalPrice =
      typeof cart !== "string"
        ? cart.reduce(
            (acc, elm) =>
              acc + Number(elm.product_id.price) * Number(elm.quantity),
            0
          )
        : 0;
    return totalPrice;
  };

  const paymentSuccessFul = () => {
    dispatch(clearCartData(userId));
    dispatch(orderDone());
    onClose();
    navigate("/");
  };

  return (
    <div className="maincontainer" style={{ marginTop: "150px" }}>
      <div class="container">
        <div className="navbar">
          <div className="overstocklogo">
            <svg
              class="checkout-header-logo-desktop"
              data-cy="header-logo-desktop"
              width="100%"
              height="100%"
              viewBox="0 0 115 21"
              stroke="#2F3337"
              fill="#2F3337"
            >
              <title>Overstock Logo</title>
              <g clip-path="url(#clipLogoWord)" stroke="none">
                <path
                  d="M114.664 16.33h-.192v-1.372h-.007l-.534 1.372h-.125l-.534-1.372h-.007v1.372h-.192v-1.532h.353l.443 1.132h.007l.434-1.132h.354v1.532zm-1.878-1.386h-.493v1.386h-.192v-1.386h-.493v-.146h1.178v.146zM33.728 10.49c0 3.35-1.947 6.18-5.523 6.18-3.576 0-5.524-2.83-5.524-6.18 0-3.35 1.947-6.18 5.523-6.18 3.577 0 5.524 2.83 5.524 6.18zm-9.62 0c0 2.49 1.358 4.98 4.097 4.98 2.74 0 4.097-2.49 4.097-4.98s-1.358-4.98-4.098-4.98c-2.739 0-4.097 2.49-4.097 4.98zm9.366-5.84h1.585l3.667 10.254h.045L42.393 4.65h1.471l-4.368 11.68h-1.518L33.473 4.65h.001zm11.71 6.225c.022 2.082 1.109 4.595 3.848 4.595 2.083 0 3.214-1.222 3.667-2.988h1.427c-.612 2.649-2.151 4.188-5.094 4.188-3.712 0-5.274-2.852-5.274-6.18 0-3.079 1.562-6.18 5.274-6.18 3.757 0 5.252 3.283 5.139 6.564h-8.988zm7.56-1.2c-.068-2.15-1.403-4.165-3.712-4.165-2.331 0-3.621 2.037-3.848 4.165h7.56zm16.08-1.607c-.068-1.765-1.426-2.558-3.056-2.558-1.268 0-2.762.498-2.762 2.014 0 1.268 1.449 1.722 2.422 1.97l1.901.43c1.63.249 3.329 1.2 3.329 3.237 0 2.535-2.514 3.509-4.686 3.509-2.717 0-4.573-1.268-4.8-4.12H62.6c.113 1.924 1.539 2.92 3.44 2.92 1.336 0 3.192-.589 3.192-2.219 0-1.357-1.267-1.81-2.558-2.128l-1.834-.407c-1.855-.498-3.259-1.132-3.259-3.124 0-2.376 2.331-3.282 4.391-3.282 2.332 0 4.188 1.223 4.279 3.758h-1.427.001zm5.334-3.418h2.376v1.2h-2.377v7.877c0 .929.136 1.471 1.154 1.54.407 0 .815-.024 1.223-.069v1.223c-.43 0-.838.045-1.268.045-1.902 0-2.558-.634-2.535-2.626V5.85H71.35v-1.2h1.38V1.141h1.427v3.509-.001zm13.69 5.84c0 3.35-1.947 6.18-5.524 6.18-3.576 0-5.523-2.83-5.523-6.18 0-3.35 1.947-6.18 5.523-6.18 3.577 0 5.524 2.83 5.524 6.18zm-9.622 0c0 2.49 1.359 4.98 4.098 4.98s4.097-2.49 4.097-4.98-1.359-4.98-4.098-4.98-4.097 2.49-4.097 4.98zm19.728-2.173c-.385-1.743-1.449-2.807-3.305-2.807-2.74 0-4.098 2.49-4.098 4.98s1.358 4.98 4.098 4.98c1.765 0 3.214-1.38 3.394-3.327h1.427c-.385 2.807-2.218 4.527-4.821 4.527-3.577 0-5.524-2.83-5.524-6.18 0-3.35 1.947-6.18 5.524-6.18 2.49 0 4.414 1.336 4.731 4.007h-1.426zm3.014-8.15h1.426v10.141l6.475-5.658h1.9l-4.98 4.323 5.32 7.358h-1.788l-4.617-6.362-2.31 1.924v4.437h-1.426V.167zM60.844 4.543V5.96c-2.066.306-3.417 2.026-3.417 4.146v6.225H56V4.65h1.313v2.738h.045c.613-1.589 1.847-2.618 3.486-2.846z"
                  fill="inherit"
                ></path>
                <path
                  d="M0 .081h20v20H9.722c3.539-1.258 6.534-4.428 7.324-8.143 1.024-4.818-2.052-8.723-6.87-8.723-4.35 0-8.63 3.183-10.176 7.348V.08zm14.286 11.786c0 4.142-2.559 7.5-5.715 7.5-3.155 0-5.714-3.358-5.714-7.5 0-4.142 2.559-7.5 5.714-7.5 3.156 0 5.715 3.358 5.715 7.5z"
                  fill="#FF1F2C"
                ></path>
              </g>
              <defs>
                <clipPath id="clipLogoWord">
                  <path d="M0 .081h115v20H0v-20z" fill="#fff"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="express_checkout">
          <div>
            <button
              aria-label="pay pal button link"
              type="button"
              data-cl-tracking="button_4.6.0"
              className="yellow btn-flex"
            >
              <svg
                cla="express-button-content1"
                width="100"
                height="27"
                viewBox="-1.35569997 -1.35569997 180.87454994 47.90139894"
              >
                <title>PayPal</title>
                <path
                  d="M 32.60643,3.4075 C 30.51393,1.0225 26.73143,0 21.89268,0 L 7.84893,0 C 6.85893,0 6.01768,0.72 5.86268,1.69625 L 0.01518001,38.7825 c -0.11625,0.73125 0.45,1.39375 1.19124999,1.39375 l 8.67,0 2.1775,-13.81125 -0.0675,0.4325 c 0.155,-0.97625 0.99,-1.69625 1.97875,-1.69625 l 4.12,0 c 8.09375,0 14.43125,-3.2875 16.2825,-12.7975 0.055,-0.28125 0.1025,-0.555 0.14375,-0.8225 -0.23375,-0.12375 -0.23375,-0.12375 0,0 0.55125,-3.515 -0.004,-5.9075 -1.905,-8.07375"
                  fill="#003087"
                  fill-opacity="1"
                  fill-rule="nonzero"
                  stroke="none"
                ></path>
                <path
                  d="m 122.18243,20.94413 -4.66625,0 c -0.44625,0 -0.86375,0.22125 -1.11375,0.59125 l -6.4375,9.48 -2.7275,-9.11 c -0.17125,-0.57 -0.69625,-0.96125 -1.29125,-0.96125 l -4.58625,0 c -0.55375,0 -0.94375,0.545 -0.765,1.06875 l 5.1375,15.0825 -4.8325,6.81875 c -0.37875,0.535 0.004,1.275 0.66,1.275 l 4.66125,0 c 0.44125,0 0.855,-0.21625 1.1075,-0.57875 l 15.5175,-22.3975 c 0.37125,-0.53625 -0.0113,-1.26875 -0.66375,-1.26875 m -31.19587,9.03612 c -0.44875,2.6525 -2.55375,4.43375 -5.24,4.43375 -1.34625,0 -2.425,-0.43375 -3.1175,-1.25375 -0.68625,-0.8125 -0.945,-1.97125 -0.7275,-3.26 0.4175,-2.63 2.5575,-4.4675 5.2025,-4.4675 1.31875,0 2.38875,0.4375 3.095,1.265 0.71125,0.83375 0.99125,1.99875 0.7875,3.2825 m 6.47,-9.03625 -4.6425,0 c -0.3975,0 -0.73625,0.28875 -0.79875,0.6825 l -0.20375,1.2975 -0.32375,-0.47 c -1.00625,-1.45875 -3.2475,-1.9475 -5.485,-1.9475 -5.12875,0 -9.51,3.8875 -10.3625,9.33875 -0.44375,2.72 0.18625,5.31875 1.72875,7.1325 1.41625,1.66625 3.4375,2.36 5.84625,2.36 4.135,0 6.4275,-2.655 6.4275,-2.655 l -0.2075,1.29 c -0.0775,0.49 0.30125,0.93375 0.79875,0.93375 l 4.18,0 c 0.66375,0 1.2275,-0.48125 1.33125,-1.13625 l 2.51,-15.8925 c 0.0775,-0.49 -0.3025,-0.93375 -0.79875,-0.93375 m -27.85913,0.1115 c -0.53,3.48 -3.1875,3.48 -5.75875,3.48 l -1.4625,0 1.02625,-6.4975 c 0.0612,-0.3925 0.4,-0.68125 0.7975,-0.68125 l 0.67125,0 c 1.75,0 3.4025,0 4.255,0.99625 0.51,0.59625 0.66375,1.48125 0.47125,2.7025 m -1.11875,-9.08 -9.695,0 c -0.66375,0 -1.2275,0.4825 -1.33125,1.1375 l -3.92,24.86 c -0.0775,0.49 0.30125,0.93375 0.7975,0.93375 l 4.63,0 c 0.6625,0 1.22625,-0.4825 1.33,-1.13625 l 1.05875,-6.7075 c 0.1025,-0.655 0.6675,-1.1375 1.33,-1.1375 l 3.0675,0 c 6.38625,0 10.0725,-3.09 11.035,-9.21625 0.43375,-2.6775 0.0175,-4.7825 -1.23625,-6.25625 -1.37875,-1.62 -3.8225,-2.4775 -7.06625,-2.4775"
                  fill="#002f86"
                  fill-opacity="1"
                  fill-rule="nonzero"
                  stroke="none"
                ></path>
                <path
                  d="m 172.07806,12.65863 -3.97875,25.315 c -0.0775,0.49 0.30125,0.93375 0.7975,0.93375 l 4.0025,0 c 0.6625,0 1.2275,-0.4825 1.33,-1.1375 l 3.92375,-24.86 c 0.0775,-0.49 -0.30125,-0.93375 -0.79875,-0.93375 l -4.4775,0 c -0.39875,0 -0.7375,0.28875 -0.79875,0.6825 m -11.94175,17.32162 c -0.44875,2.6525 -2.55375,4.43375 -5.24,4.43375 -1.34625,0 -2.425,-0.43375 -3.1175,-1.25375 -0.6875,-0.8125 -0.945,-1.97125 -0.7275,-3.26 0.4175,-2.63 2.5575,-4.4675 5.2025,-4.4675 1.31875,0 2.38875,0.4375 3.095,1.265 0.71125,0.83375 0.99125,1.99875 0.7875,3.2825 m 6.47,-9.03625 -4.6425,0 c -0.3975,0 -0.73625,0.28875 -0.79875,0.6825 l -0.20375,1.2975 -0.325,-0.47 c -1.005,-1.45875 -3.24625,-1.9475 -5.48375,-1.9475 -5.12875,0 -9.51,3.8875 -10.3625,9.33875 -0.44375,2.72 0.18625,5.31875 1.72875,7.1325 1.41625,1.66625 3.4375,2.36 5.84625,2.36 4.135,0 6.4275,-2.655 6.4275,-2.655 l -0.2075,1.29 c -0.0775,0.49 0.30125,0.93375 0.79875,0.93375 l 4.18,0 c 0.66375,0 1.2275,-0.48125 1.33125,-1.13625 l 2.51,-15.8925 c 0.0775,-0.49 -0.3025,-0.93375 -0.79875,-0.93375 m -27.85925,0.1115 c -0.53,3.48 -3.1875,3.48 -5.75875,3.48 l -1.4625,0 1.02625,-6.4975 c 0.0613,-0.3925 0.4,-0.68125 0.7975,-0.68125 l 0.67125,0 c 1.75,0 3.4025,0 4.255,0.99625 0.51,0.59625 0.66375,1.48125 0.47125,2.7025 m -1.11875,-9.08 -9.695,0 c -0.66375,0 -1.2275,0.4825 -1.33125,1.1375 l -3.92,24.86 c -0.0775,0.49 0.3025,0.93375 0.7975,0.93375 l 4.975,0 c 0.46375,0 0.85875,-0.3375 0.93125,-0.795 l 1.1125,-7.04875 c 0.1025,-0.655 0.6675,-1.1375 1.33,-1.1375 l 3.0675,0 c 6.38625,0 10.0725,-3.09 11.035,-9.21625 0.43375,-2.6775 0.0175,-4.7825 -1.23625,-6.25625 -1.37875,-1.62 -3.8225,-2.4775 -7.06625,-2.4775"
                  fill="#009cde"
                  fill-opacity="1"
                  fill-rule="nonzero"
                  stroke="none"
                ></path>
                <path
                  d="M 32.60643,3.4075 C 30.51393,1.0225 26.73143,0 21.89268,0 L 7.84893,0 C 6.85893,0 6.01768,0.72 5.86268,1.69625 L 0.01518001,38.7825 c -0.11625,0.73125 0.45,1.39375 1.19124999,1.39375 l 8.67,0 2.1775,-13.81125 -0.0675,0.4325 c 0.155,-0.97625 0.99,-1.69625 1.97875,-1.69625 l 4.12,0 c 8.09375,0 14.43125,-3.2875 16.2825,-12.7975 0.055,-0.28125 0.1025,-0.555 0.14375,-0.8225 -0.23375,-0.12375 -0.23375,-0.12375 0,0 0.55125,-3.515 -0.004,-5.9075 -1.905,-8.07375"
                  fill="#003087"
                  fill-opacity="1"
                  fill-rule="nonzero"
                  stroke="none"
                ></path>
                <path
                  d="m 14.39418,11.52788 c 0.0925,-0.5875 0.47,-1.06875 0.9775,-1.3125 0.23125,-0.11 0.48875,-0.17125 0.75875,-0.17125 l 11.01,0 c 1.30375,0 2.52,0.085 3.63125,0.26375 0.31875,0.0512 0.6275,0.11 0.9275,0.1775 0.3,0.0662 0.59125,0.14125 0.87375,0.22375 0.14125,0.0412 0.28,0.0838 0.41625,0.12875 0.54625,0.1825 1.055,0.395 1.5225,0.64375 0.55125,-3.51625 -0.004,-5.9075 -1.905,-8.07375 -2.09375,-2.385 -5.875,-3.4075 -10.71375,-3.4075 l -14.045,0 c -0.98875,0 -1.83,0.72 -1.985,1.69625 l -5.84749999,37.085 c -0.11625,0.7325 0.45,1.39375 1.18999999,1.39375 l 8.67125,0 2.1775,-13.81125 2.34,-14.83625 z"
                  fill="#002f86"
                  fill-opacity="1"
                  fill-rule="nonzero"
                  stroke="none"
                ></path>
                <path
                  d="m 34.51168,11.48125 0,0 c -0.0425,0.26875 -0.0888,0.54125 -0.14375,0.8225 -1.85125,9.50875 -8.18875,12.7975 -16.2825,12.7975 l -4.12125,0 c -0.98875,0 -1.82375,0.72 -1.9775,1.69625 l -2.11,13.3775 -0.59875,3.795 c -0.10125,0.64 0.39375,1.22 1.04125,1.22 l 7.30875,0 c 0.865,0 1.60125,-0.63 1.73625,-1.48375 l 0.0713,-0.3725 1.3775,-8.73 0.0888,-0.4825 c 0.135,-0.85375 0.87125,-1.48375 1.73625,-1.48375 l 1.09375,0 c 7.08,0 12.62375,-2.87625 14.24375,-11.195 0.67625,-3.47625 0.32625,-6.37875 -1.4625,-8.4175 -0.5425,-0.6175 -1.21625,-1.1275 -2.00125,-1.54375"
                  fill="#009cde"
                  fill-opacity="1"
                  fill-rule="nonzero"
                  stroke="none"
                ></path>
                <path
                  d="m 32.57331,10.70863 c -0.2825,-0.0825 -0.57375,-0.1575 -0.87375,-0.22375 -0.3,-0.0663 -0.61,-0.125 -0.9275,-0.17625 -1.1125,-0.18 -2.3275,-0.265 -3.6325,-0.265 l -11.00875,0 c -0.27125,0 -0.52875,0.0613 -0.75875,0.1725 -0.50875,0.24375 -0.885,0.72375 -0.9775,1.3125 l -2.34,14.83625 -0.0675,0.4325 c 0.15375,-0.97625 0.98875,-1.69625 1.9775,-1.69625 l 4.12125,0 c 8.09375,0 14.43125,-3.2875 16.2825,-12.7975 0.055,-0.28125 0.10125,-0.55375 0.14375,-0.8225 -0.46875,-0.2475 -0.97625,-0.46125 -1.5225,-0.6425 -0.13625,-0.045 -0.275,-0.0888 -0.41625,-0.13"
                  fill="#012069"
                  fill-opacity="1"
                  fill-rule="nonzero"
                  stroke="none"
                ></path>
              </svg>
            </button>
          </div>
          <div className="second">
            <button
              aria-label="pay pal button link"
              type="button"
              data-cl-tracking="button_4.6.0"
              className="blue btn-flex"
            >
              <svg
                class="express-button-content2"
                width="144"
                height="23"
                viewBox="0 0 144 23"
                fill="none"
                stroke-width="0"
              >
                <title>PayPal Credit</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.7455 5.55078H24.2159C23.9059 5.55078 23.6423 5.80112 23.5938 6.14136L21.7618 19.0516C21.7255 19.3065 21.903 19.536 22.1355 19.536H24.2979C24.6079 19.536 24.8715 19.2859 24.9199 18.945L25.414 15.4628C25.4617 15.1219 25.7258 14.8716 26.0353 14.8716H27.4692C30.4529 14.8716 32.1749 13.2667 32.6248 10.0865C32.8274 8.69503 32.6333 7.60193 32.0471 6.83628C31.4033 5.99557 30.2614 5.55078 28.7455 5.55078ZM29.2682 10.2665C29.0205 12.073 27.7787 12.073 26.578 12.073H25.8943L26.3739 8.69907C26.4025 8.49513 26.5613 8.34501 26.7468 8.34501H27.0601C27.8781 8.34501 28.6497 8.34501 29.0484 8.86321C29.2862 9.17232 29.3589 9.63175 29.2682 10.2665Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.285 10.2078H40.1159C39.9311 10.2078 39.7714 10.3579 39.743 10.5618L39.6469 11.2361L39.4954 10.9918C39.0258 10.2342 37.9785 9.98096 36.9335 9.98096C34.5364 9.98096 32.4892 11.9989 32.0905 14.8295C31.8833 16.2414 32.1779 17.5917 32.8986 18.5332C33.5596 19.3989 34.5054 19.7597 35.6306 19.7597C37.562 19.7597 38.6329 18.3794 38.6329 18.3794L38.5362 19.0493C38.4999 19.3055 38.6774 19.5352 38.9086 19.5352H40.8623C41.173 19.5352 41.4353 19.2848 41.4843 18.944L42.6566 10.6922C42.6937 10.4381 42.5167 10.2078 42.285 10.2078ZM39.2613 14.9002C39.052 16.2775 38.0686 17.2021 36.8141 17.2021C36.1843 17.2021 35.6809 16.9776 35.3576 16.5522C35.037 16.1296 34.9153 15.5281 35.0172 14.8582C35.2127 13.4927 36.2126 12.5377 37.448 12.5377C38.064 12.5377 38.5647 12.7654 38.8945 13.1943C39.2249 13.6279 39.3561 14.2331 39.2613 14.9002Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M53.8375 10.208H51.6576C51.4496 10.208 51.2543 10.3229 51.1365 10.5151L48.1301 15.437L46.8558 10.707C46.7756 10.4111 46.53 10.208 46.2517 10.208H44.1099C43.8494 10.208 43.6687 10.4907 43.7515 10.7631L46.1525 18.5945L43.8952 22.1363C43.7177 22.4153 43.8965 22.7988 44.2032 22.7988H46.3803C46.587 22.7988 46.7803 22.6869 46.8975 22.4986L54.1473 10.8668C54.3209 10.5887 54.1426 10.208 53.8375 10.208Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M61.054 5.55078H56.5237C56.2145 5.55078 55.9508 5.80112 55.9024 6.14136L54.0704 19.0516C54.0341 19.3065 54.2116 19.536 54.4428 19.536H56.7675C56.9833 19.536 57.168 19.3609 57.2018 19.1223L57.7218 15.4628C57.7695 15.1219 58.0339 14.8716 58.3431 14.8716H59.7765C62.7607 14.8716 64.4822 13.2667 64.9326 10.0865C65.136 8.69503 64.9406 7.60193 64.3544 6.83628C63.7112 5.99557 62.57 5.55078 61.054 5.55078ZM61.5769 10.2664C61.3298 12.073 60.0879 12.073 58.8865 12.073H58.2037L58.6839 8.69907C58.7123 8.49513 58.8699 8.34501 59.056 8.34501H59.3694C60.1866 8.34501 60.9589 8.34501 61.3576 8.86321C61.5954 9.17231 61.6676 9.63174 61.5769 10.2664Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M74.5939 10.2078H72.4261C72.24 10.2078 72.0817 10.3579 72.0539 10.5618L71.9578 11.2361L71.8055 10.9918C71.336 10.2342 70.2894 9.98096 69.2442 9.98096C66.8473 9.98096 64.8008 11.9989 64.4021 14.8295C64.1955 16.2414 64.4888 17.5917 65.2093 18.5332C65.8718 19.3989 66.8161 19.7597 67.9415 19.7597C69.8728 19.7597 70.9438 18.3794 70.9438 18.3794L70.8471 19.0493C70.8107 19.3055 70.9881 19.5352 71.2207 19.5352H73.1739C73.4832 19.5352 73.7468 19.2848 73.7952 18.944L74.9681 10.6922C75.0039 10.4381 74.8263 10.2078 74.5939 10.2078ZM71.57 14.9002C71.362 16.2775 70.3771 17.2021 69.1226 17.2021C68.4941 17.2021 67.9895 16.9776 67.6661 16.5522C67.3457 16.1296 67.2251 15.5281 67.3257 14.8582C67.5225 13.4927 68.5212 12.5377 69.7565 12.5377C70.3725 12.5377 70.8732 12.7654 71.203 13.1943C71.5348 13.6279 71.6659 14.2331 71.57 14.9002Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M77.1505 5.90518L75.2914 19.0517C75.255 19.3066 75.4324 19.5361 75.6635 19.5361H77.5326C77.8434 19.5361 78.1068 19.286 78.1545 18.9451L79.9878 6.0355C80.0244 5.78063 79.8468 5.55029 79.6157 5.55029H77.5228C77.338 5.55091 77.179 5.70124 77.1505 5.90518Z"
                  fill="white"
                ></path>
                <path
                  d="M117.825 6.32418C117.861 6.08465 118.056 5.90869 118.285 5.90869H122.598C126.156 5.90869 128.647 8.86132 128.088 12.6549C127.511 16.4491 124.122 19.4018 120.581 19.4018H116.189C116.022 19.4018 115.895 19.2439 115.92 19.0697L117.825 6.32418ZM119.632 16.4312H120.378C122.36 16.4312 124.224 15.2858 124.631 12.6551C124.987 10.2395 123.682 8.87927 121.547 8.87927H121C120.866 8.87927 120.752 8.98192 120.731 9.12144L119.632 16.4312Z"
                  fill="white"
                ></path>
                <path
                  d="M112.241 9.29434L111.964 11.134H115.391C115.558 11.134 115.685 11.2915 115.66 11.4657L115.33 13.6887C115.294 13.9281 115.099 14.1045 114.87 14.1045H111.92C111.692 14.1045 111.497 14.2799 111.46 14.5186L111.168 16.4312H114.798C114.965 16.4312 115.092 16.5886 115.067 16.7628L114.737 18.9854C114.701 19.2252 114.506 19.4018 114.277 19.4018H107.724C107.557 19.4018 107.43 19.2439 107.456 19.0697L109.361 6.32418C109.396 6.08465 109.592 5.90869 109.821 5.90869H116.374C116.541 5.90869 116.668 6.06615 116.642 6.2403L116.313 8.46337C116.277 8.70275 116.082 8.87913 115.852 8.87913H112.701C112.472 8.87927 112.277 9.05537 112.241 9.29434Z"
                  fill="white"
                ></path>
                <path
                  d="M130.987 19.4018H128.383C128.216 19.4018 128.088 19.2439 128.114 19.0697L130.019 6.32418C130.055 6.08465 130.25 5.90869 130.479 5.90869H133.084C133.251 5.90869 133.378 6.06629 133.352 6.24058L131.448 18.9863C131.412 19.2255 131.217 19.4018 130.987 19.4018Z"
                  fill="white"
                ></path>
                <path
                  d="M106.548 19.4018H103.135C102.99 19.4018 102.857 19.3138 102.795 19.1756L100.542 14.2119H100.508L99.7793 19.0654C99.7502 19.2592 99.5921 19.4018 99.4065 19.4018H96.7258C96.5589 19.4018 96.4313 19.2439 96.4572 19.0697L98.3738 6.24489C98.4027 6.05113 98.5608 5.90869 98.7465 5.90869H103.389C105.913 5.90869 107.642 7.17921 107.218 10.0605C106.93 11.9216 105.71 13.5321 103.846 13.8722L106.78 18.9654C106.89 19.1564 106.76 19.4018 106.548 19.4018ZM100.847 11.9572H101.169C102.253 11.9572 103.501 11.7416 103.728 10.275C103.954 8.80819 103.231 8.59732 102.072 8.59301H101.602C101.46 8.59301 101.339 8.70164 101.316 8.84964L100.847 11.9572Z"
                  fill="white"
                ></path>
                <path
                  d="M138.032 19.4018H135.428C135.26 19.4018 135.133 19.2439 135.159 19.0697L136.685 8.87913H134.258C134.091 8.87913 133.964 8.72181 133.989 8.54752L134.319 6.32473C134.354 6.08507 134.55 5.90869 134.779 5.90869H142.874C143.041 5.90869 143.168 6.06615 143.142 6.2403L142.813 8.46337C142.777 8.70275 142.582 8.87913 142.352 8.87913H140.006L138.493 18.9861C138.457 19.2255 138.261 19.4018 138.032 19.4018Z"
                  fill="white"
                ></path>
                <path
                  d="M96.6269 9.74295C96.5885 9.99333 96.2986 10.0835 96.1309 9.90194C95.5619 9.28616 94.7267 8.96067 93.8279 8.96067C91.7963 8.96067 90.188 10.6055 89.8665 12.6971C89.5616 14.8249 90.7128 16.3623 92.7782 16.3623C93.6297 16.3623 94.5332 16.0203 95.2837 15.4486C95.4909 15.2905 95.7754 15.4795 95.7346 15.7463L95.262 18.8336C95.2338 19.017 95.1078 19.1677 94.9387 19.2201C93.9271 19.5336 93.1505 19.7598 92.2027 19.7598C86.6954 19.7598 85.8147 14.791 86.0984 12.6792C86.8942 6.75694 91.4446 5.40032 94.234 5.56348C95.1328 5.61634 95.938 5.7425 96.7268 6.05561C96.9817 6.15673 97.1334 6.43423 97.09 6.71786L96.6269 9.74295Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.64089 22.0502L5.98542 19.6178L5.21792 19.5979H1.55298L4.09999 1.64747C4.10792 1.59311 4.13357 1.54265 4.17103 1.50676C4.20868 1.47086 4.25666 1.45117 4.30685 1.45117H10.4865C12.5382 1.45117 13.954 1.92561 14.6931 2.86217C15.0396 3.30153 15.2604 3.76079 15.3672 4.26599C15.4792 4.79622 15.4811 5.42962 15.3718 6.20229L15.3639 6.2585V6.75365L15.7104 6.97189C16.0022 7.14399 16.2342 7.3409 16.4121 7.56632C16.7084 7.94209 16.9002 8.41961 16.9812 8.98552C17.065 9.56765 17.0373 10.2605 16.9002 11.0449C16.742 11.947 16.4864 12.7328 16.1412 13.3756C15.8238 13.968 15.4192 14.4595 14.9389 14.8402C14.4803 15.202 13.9355 15.4767 13.3196 15.6524C12.7226 15.8251 12.042 15.9123 11.2955 15.9123H10.8146C10.4708 15.9123 10.1368 16.05 9.87458 16.2967C9.61161 16.5486 9.43778 16.8928 9.38445 17.2692L9.34809 17.4882L8.7393 21.7758L8.7118 21.9331C8.70442 21.983 8.69187 22.0078 8.67342 22.0246C8.65699 22.04 8.63337 22.0502 8.6103 22.0502H5.64089Z"
                  fill="#28356A"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.0389 6.31543C16.0206 6.4465 15.9994 6.58044 15.9758 6.71807C15.1609 11.3689 12.3727 12.9756 8.8118 12.9756H6.99871C6.56319 12.9756 6.19615 13.3269 6.12842 13.8045L4.93722 22.203C4.89312 22.5166 5.1105 22.799 5.39506 22.799H8.61084C8.99154 22.799 9.31504 22.4916 9.37502 22.0741L9.40657 21.8926L10.012 17.6219L10.051 17.3876C10.1102 16.9688 10.4345 16.6611 10.8152 16.6611H11.2961C14.4116 16.6611 16.8507 15.2552 17.5636 11.1865C17.8612 9.48695 17.7071 8.06774 16.9192 7.06964C16.6807 6.76874 16.3849 6.51891 16.0389 6.31543Z"
                  fill="white"
                  fill-opacity="0.6"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.1862 5.9379C15.0616 5.8975 14.9331 5.86098 14.8014 5.82796C14.6689 5.79576 14.5333 5.76725 14.3936 5.74222C13.9047 5.65443 13.369 5.61279 12.7953 5.61279H7.95167C7.83227 5.61279 7.71896 5.64274 7.61765 5.69689C7.39417 5.81627 7.22827 6.05133 7.18804 6.33911L6.15758 13.5933L6.12805 13.8048C6.19578 13.3272 6.56283 12.9759 6.99834 12.9759H8.81143C12.3723 12.9759 15.1605 11.3684 15.9754 6.71837C15.9998 6.58074 16.0203 6.4468 16.0385 6.31573C15.8324 6.19409 15.6091 6.0901 15.3687 6.00149C15.3092 5.97954 15.248 5.95841 15.1862 5.9379Z"
                  fill="white"
                  fill-opacity="0.8"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.18813 6.33901C7.22836 6.05124 7.39426 5.81617 7.61773 5.69761C7.71978 5.64326 7.83235 5.61331 7.95175 5.61331H12.7953C13.3691 5.61331 13.9048 5.65515 14.3936 5.74294C14.5333 5.76776 14.669 5.79648 14.8015 5.82868C14.9332 5.8615 15.0617 5.89822 15.1862 5.93842C15.2481 5.95893 15.3093 5.98026 15.3693 6.00139C15.6098 6.09 15.8332 6.19482 16.0394 6.31563C16.2818 4.59696 16.0373 3.42676 15.2014 2.36713C14.2796 1.20043 12.6162 0.701172 10.4875 0.701172H4.30766C3.87288 0.701172 3.50196 1.05254 3.43479 1.53087L0.860835 19.6659C0.810087 20.0246 1.05903 20.3483 1.38456 20.3483H5.19972L7.18813 6.33901Z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Your cart</span>
              <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
              {typeof cart !== "string"
                ? cart.map((elm) => {
                    return (
                      <li
                        class="list-group-item d-flex justify-content-between lh-condensed"
                        key={Math.random()}
                      >
                        <div style={{ textAlign: "initial" }}>
                          <h6 class="my-0">{elm.product_id.title}</h6>
                          <small class="text-muted">
                            {elm.product_id.category}
                          </small>
                        </div>
                        <span class="text-muted">${elm.product_id.price}</span>
                      </li>
                    );
                  })
                : 0}

              <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success" style={{ textAlign: "initial" }}>
                  <h6 class="my-0">Special discount</h6>
                  <small>Only for you</small>
                </div>
                <span class="text-success">
                  -${(getTotalPrice() * 0.07).toFixed(2)}
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${(getTotalPrice() * 0.93).toFixed(2)}</strong>
              </li>
            </ul>

            <form class="card p-2">
              <>
                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="button"
                  onClick={onOpen}
                  disabled={cart.length > 0 ? false : true}
                >
                  Place Order
                </button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Status
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Order Successful ! Thnak you for your order.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={paymentSuccessFul}
                          ml={3}
                        >
                          Done
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </>
            </form>
          </div>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="First Name"
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="Last Name"
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">
                  Email <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <select
                    class="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>India</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select
                    class="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>West Bengal</option>
                    <option>Punjab</option>
                    <option>Himachal Pradesh</option>
                    <option>Haryana</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr class="mb-4" />
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="same-address"
                />
                <label class="custom-control-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="save-info"
                />
                <label class="custom-control-label" for="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr class="mb-4" />

              <h4 class="mb-3">Payment</h4>

              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    checked
                    required
                  />
                  <label class="custom-control-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="paypal">
                    Paypal
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small class="text-muted">
                    Full name as displayed on card
                  </small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr class="mb-4" />
              <>
                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="button"
                  onClick={onOpen}
                  disabled={cart.length > 0 ? false : true}
                >
                  Place Order
                </button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Status
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Order Successful ! Thnak you for your order.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={paymentSuccessFul}
                          ml={3}
                        >
                          Done
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </>
            </form>
          </div>
        </div>

        <footer class="my-5 pt-5 text-muted text-center text-small">
          <p class="mb-1">&copy; 2020-2021 therichpost.com</p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Support</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
