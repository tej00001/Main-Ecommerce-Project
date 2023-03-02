import React, { useContext } from "react";
import { Container, Navbar, Nav, Card } from "react-bootstrap";
import CartItem from "../OutlookDetails/Cart";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../Pages/auth.context";

const NavbarList = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Navbar
        bg="black"
        expand="sm"
        variant="dark"
        sticky="top"
        className="border border-white"
      >
        <Navbar.Brand>
          <img
            className={classes.img}
            src="https://www.pngfind.com/pngs/m/29-290389_e-commerce-website-logo-png-download-e-commerce.png"
            alt="Ecommerce logo"
          />
        </Navbar.Brand>

        <Container className="justify-content-center ">
          <Nav>
            <NavLink
              to="/Home"
              className={classes.font}
              style={{ color: "white" }}
            >
              HOME
            </NavLink>
            
            {authCtx.isLoggedIn && (
              <NavLink
                to="/STORE"
                className={classes.font}
                style={{ color: "white" }}
              >
                STORE
              </NavLink>
            )}
            <NavLink
              to="/ABOUT"
              className={classes.font}
              style={{ color: "white" }}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/Contactus"
              className={classes.font}
              style={{ color: "white" }}
            >
              CONTACT-US
            </NavLink>
            {!authCtx.isLoggedIn && (
              <NavLink
                to="/LOGIN"
                className={classes.font}
                style={{ color: "lightgreen" }}
              >
                LOGIN
              </NavLink>
            )}

            {authCtx.isLoggedIn && (
              <NavLink
                to="/HOME"
                className={classes.font}
                style={{ color: "Red" }}
                onClick={authCtx.logout}
              >
                LOGOUT
              </NavLink>
            )}
          </Nav>
        </Container>
        {authCtx.isLoggedIn && <CartItem />}
      </Navbar>
      <div className={classes.title}>
        <p>The Generics</p>
      </div>
    </>
  );
};
export default NavbarList;
