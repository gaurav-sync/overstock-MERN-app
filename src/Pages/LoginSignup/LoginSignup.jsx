import { Box, Center, Divider, Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import "./LoginSignup.css";
import React from "react";
import Login from "./Login";
import Signup from "./Signup";

export const LoginSignup = () => {
  return (
    <Box id="loginSignupDiv">
      <Center>
        <Flex
          mt={{ base: "70px", sm: "70px", md: "70px", lg: "180px" }}
          gap={{
            base: "20px",
            sm: "20px",
            md: "20px",
            lg: "100px",
          }}
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          justifyContent={"space-between"}
        >
          <Box>
            <Signup />
          </Box>
          <Divider
            height={"550px"}
            orientation="vertical"
            id="signinDividerDiv"
          />
          <Box id="signin_page">
            <Login />
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};
