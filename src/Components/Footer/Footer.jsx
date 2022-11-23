import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box
      background={"#2f3337"}
      w="107.9%"
      textAlign={"left"}
      padding={"30px 80px"}
    >
      <Flex
        color={"white"}
        align="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
        }}
      >
        <Box w={"350px"} fontSize={"15px"}>
          © Copyright 2022, Overstock.com®, Inc. 799 Coliseum Way Midvale, UT
          84047 | 1-800-843-2446
        </Box>
        <Spacer />
        <Flex
          align={"center"}
          gap={{
            base: 0,
            sm: 2,
            md: 4,
            lg: 8,
          }}
          fontSize={"15px"}
        >
          <Text>Privacy Policy</Text>
          <Text>Terms & Conditions</Text>
          <Text>*Promotion Terms</Text>
          <Flex align={"center"}>
            Ship to :
            <Image
              ml={1}
              w={30}
              src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif"
              alt="flag"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
