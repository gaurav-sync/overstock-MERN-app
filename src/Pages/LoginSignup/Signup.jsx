import { Box, Container, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Spinner, Image } from "@chakra-ui/react";
import "./LoginSignup.css";

import {
  Input,
  HStack,
  Checkbox,
  CheckboxGroup,
  Heading,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Divider, Stack } from "@chakra-ui/react";
import { useState } from "react";
function Signup() {
  const toast = useToast();
  const initialvalues = { email: "", password: "" };
  const [inputValues, setInputValues] = useState(initialvalues);
  const [loading, setLoading] = useState(false);
  const [confPassword,setConfPassword] = useState("");

  const handleChange = (inp) => {
    const { name, value } = inp.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  const handleSignup = (body) => {
    setLoading(true);
    // fetch(`https://overstock-signup.herokuapp.com/User`, {
    //   method: "POST",
    //   body: JSON.stringify(body),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then(() => {
    //     succesFunctionSignup()();
    //     setInputValues({email: "", password: ""})
    //     setConfPassword("");
    //   })
    //   .catch(() => errorFunctionSignup()())
    //   .finally(() => setLoading(false));


    fetch(`https://overstock-api.onrender.com/register`,{
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res)=>res.json()).then((res)=>{
      if(res.status === "success"){
        succesFunctionSignup()();
        setInputValues({email: "", password: ""});
        setConfPassword("");
      }else{
        errorFunctionSignup()();

      }
    }).catch(() => errorFunctionSignup()())
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(inputValues);
  };
  const succesFunctionSignup = () => {
    return () =>
      toast({
        title: "Account Created Successfully",
        description: "Please Login and Start Shopping",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-right"
      });
  };
  const errorFunctionSignup = () => {
    return () =>
      toast({
        title: "Account Not Created",
        description: "Please Enter Valid Email or Password",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-right"
      });
  };
  // if (loading) {
  //   return (
  //     <Container mt={100}>
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
  const { email, password } = inputValues;
  return (
    <>
      <Box w={"75%"}>
        <Box>
          <Heading
            id="Heading_SignUp"
            fontSize="xl"
            mt="12%"
            textAlign={"left"}
          >
            Create Account
          </Heading>
          <Text mt="12%" textAlign={"left"}>
            Email Address*
          </Text>
          <Input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            width="100%"
            mt="3%"
            placeholder="Email"
            onChange={handleChange}
            value={inputValues.email}
            isRequired
            isInvalid={inputValues.email.includes("@",".com") || inputValues.email =="" ? false : true}
          />
        </Box>
        <Box>
          <HStack mt="3%" spacing={14}>
            <Text>Create Password*</Text>
            <Text>Confirm Password*</Text>
          </HStack>

          <HStack mt="3%">
            <Input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              width="50%"
              placeholder="Paasword"
              onChange={handleChange}
              value={inputValues.password}
              isRequired
            />
            <Input
              type="password"
              autoComplete="off"
              name="confPasswor"
              id="password2"
              width="50%"
              placeholder="Confirm Password"
              onChange={(e)=>setConfPassword(e.target.value)}
              value={confPassword}
              isRequired
            />
          </HStack>
          <Box mt="23" bg="#f9fafc" h="10" w="322px">
            <Text fontSize="sm">
              <Checkbox size="sm" mt="1.5" defaultChecked mr="2"></Checkbox>
              Sign up today for <span font-weight="bold">
                exclusive offers
              </span>{" "}
              from Overstock.com delivered right to your inbox**
            </Text>
          </Box>
        </Box>
        <Button
          onClick={handleSubmit}
          width="322px"
          mt="25px"
          colorScheme="blue"
          disabled={email === "" || password === "" || !email.includes("@",".com") || confPassword.length < 5 || password.length < 5 || password !=confPassword}
          isLoading={loading}
        >
          Create Account
        </Button>
        <hr width="23px"></hr>
        <Button width="322px" mt="5%" colorScheme="gray">
          Continue as Guest
        </Button>

        <Text fontSize={"13px"} mt="4%">
          By creating an account or continuing as a Guest, you
        </Text>
        <Text fontSize={"13px"}>
          agree to our Terms & Conditions and Privacy Policy.
        </Text>

        <Text fontSize={"13px"} mt="3%">
          Terms & Conditions | Privacy Policy.
        </Text>
        <Text fontSize={"13px"}>**You can unsubscribe at any time</Text>
      </Box>
      <Stack direction="row" h="600px" p={4}>
        <Divider orientation="vertical" />
      </Stack>
    </>
  );
}

// bg="tomato"
export default Signup;
