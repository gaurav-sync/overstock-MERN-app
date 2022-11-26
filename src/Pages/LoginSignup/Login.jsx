import "./LoginSignup.css";
import { Container, filter, Heading, Text, useToast } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Box, Button, Link } from "@chakra-ui/react";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";

import { CloseButton } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { loginSignupSuccess } from "../../redux/action";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialvalues = { email: "", password: "" };
  const [inputValues, setInputValues] = useState(initialvalues);
  const [loading, setLoading] = useState(false);

  const handleChange = (inp) => {
    let { name, value } = inp.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  const handleLogin = () => {
    setLoading(true);
    // fetch(`https://overstock-signup.herokuapp.com/User`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     let filterData = data.filter((elm) => {
    //       return (
    //         elm.email == inputValues.email &&
    //         elm.password === inputValues.password
    //       );
    //     });
    //     if (filterData.length == 0) throw Error;
    //     else {
    //       succesFunction()();
    //       dispatch(loginSignupSuccess());
    //       navigate("/furniture");
    //     }
    //   })
    //   .catch((error) => {
    //     errorFunction()();
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });


    fetch(`https://overstock-api.onrender.com/login`,{
      method: "POST",
      body: JSON.stringify(inputValues),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res)=>res.json()).then((res)=>{
      if(res.data.token){
            succesFunction()();
            dispatch(loginSignupSuccess(res.data.token));
            navigate("/furniture");
      }else{
            errorFunction()();
      }
    }).catch((err)=>{
      errorFunction()();
      console.log(err);
    }).finally(() => {
        setLoading(false);
    });
  };

  const { email, password } = inputValues;
  const succesFunction = () => {
    return () =>
      toast({
        title: "Login Successful",
        description: "You are being redirected to Products",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "bottom-right"
      });
  };

  const errorFunction = () => {
    return () =>
      toast({
        title: "Wrong Credentials",
        description: "Please provide a valid Email or Password",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom-right"
      });
  };
  // if (loading) {
  //   return (
  //     <Container mt={10}>
  //       <Spinner
  //         thickness="4px"
  //         speed="0.65s"
  //         emptyColor="gray.200"
  //         color="blue.500"
  //         size="xl"
  //       />
  //     </Container>
  //   );
  // }

  return (
    <>
      <Box id="loginDiv">
        <Heading id="Heading_SignIn" fontSize="xl" mt="12%" textAlign={"left"}>
          Sign In
        </Heading>
        <Text mt="12%" textAlign={"left"}>
          Email Address*
        </Text>
        <Input
          name="email"
          type="text"
          autoComplete="off"
          mt="3%"
          width="100%"
          placeholder="Email"
          onChange={handleChange}
          value={inputValues.email}
        />
        <Text mt="3%" textAlign={"left"}>
          Password*
        </Text>
        <Input
          name="password"
          type="password"
          autoComplete="off"
          mt="3%"
          width="322px"
          placeholder="Paasword"
          onChange={handleChange}
          value={inputValues.password}
        />
        <hr width="23px"></hr>
        <Box>
          <Button
            mt="7%"
            width="322px"
            colorScheme="green"
            onClick={handleLogin}
            disabled={email === "" || password === ""}
            isLoading={loading}
          >
            Sign In
          </Button>
        </Box>

        <br></br>
        <Link mt="3%" color="blue">
          Forgot your password?
        </Link>
      </Box>
    </>
  );
};

export default Login;
