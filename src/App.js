import React from "react";
import { Container, Button } from "react-bootstrap";
import TopDetails from "./Components/OutlookDetails/TopDetails";
import NavbarList from "./Components/Navbar/Navbar"
import FooterDetails from "./Components/BotomDetails/Bottom";
import classes from "./App.module.css";

const App = () => {
  return (
    <>
      <NavbarList />
      <TopDetails />
      <Container className={classes.button}>
        <Button className="btn-dark btn-outline-warning ">See the Cart</Button>
      </Container>
      <FooterDetails />
    </>
  );
};

export default App;
