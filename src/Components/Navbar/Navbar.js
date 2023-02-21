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
          <Nav>
            <NavLink to="/Home" className={classes.font} style={{ color: "white" }}>
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
          <p>The Generics</p>
      </div>
    </>
  );
};
export default NavbarList;
