import React from "react";
import { Container, Navbar, Nav, Card } from "react-bootstrap";
import CartItem from "../OutlookDetails/Cart";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const NavbarList = () => {
  return (
    <>
      <Navbar
        bg="black"
        expand="sm"
        variant="dark"
        sticky="top"
        className="border border-white"
      >
        <Container className="justify-content-center ">
          <Nav style={{ fontSize: "20px", color: "white" }}>
            <NavLink to="/" className={classes.font} style={{ color: "white" }}>
              HOME
            </NavLink>
            <NavLink
              to="/STORE"
              className={classes.font}
              style={{ color: "white" }}
            >
              STORE
            </NavLink>
            <NavLink
              to="/ABOUT"
              className={classes.font}
              style={{ color: "white" }}
            >
              ABOUT
            </NavLink>
          </Nav>
        </Container>
        <CartItem />
      </Navbar>
      <div className={classes.title}>
        <Card className="shadow-lg">
          <p>The Generics</p>
        </Card>
      </div>
    </>
  );
};
export default NavbarList;
