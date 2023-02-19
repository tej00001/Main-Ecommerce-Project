import React from "react";
import { Container, Navbar } from "react-bootstrap";
import CartItem from "../OutlookDetails/Cart";
const NavbarList = () => {
  return (
    <>
      <Navbar bg="black" expand="sm" variant="dark" sticky="top">
        <Container className="justify-content-evenly">
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Navbar.Brand href="#store">STORE</Navbar.Brand>
          <Navbar.Brand href="#about">ABOUT</Navbar.Brand>
        </Container>
        <CartItem />
      </Navbar>
    </>
  );
};
export default NavbarList;
