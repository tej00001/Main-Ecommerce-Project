import React from "react";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import TopDetails from "./Components/OutlookDetails/TopDetails";
import NavbarList from "./Components/Navbar/Navbar";
import FooterDetails from "./Components/BotomDetails/Bottom";
import classes from "./App.module.css";
import CartContext from "./Components/Context/Cart-Context";

const App = () => {
  const [cartList, setCartList] = useState([]);

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      <NavbarList />
      <TopDetails />
      <Container className={classes.button}>
        <Button className="btn-dark btn-outline-warning ">See the Cart</Button>
      </Container>
      <FooterDetails />
    </CartContext.Provider>
  );
};

export default App;
