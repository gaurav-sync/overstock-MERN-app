import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Header } from "../Header/Header";

export const Navbar = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};
