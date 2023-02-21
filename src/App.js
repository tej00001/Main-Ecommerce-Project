import React from "react";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import TopDetails from "./Components/OutlookDetails/TopDetails";
import NavbarList from "./Components/Navbar/Navbar";
import FooterDetails from "./Components/BotomDetails/Bottom";
//import classes from "./App.module.css";
import CartContext from "./Components/Context/Cart-Context";
import About from "./Components/Pages/About";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [cartList, setCartList] = useState([]);

  return (
    <Switch>
      <CartContext.Provider value={{ cartList, setCartList }}>
        <NavbarList />
        <Route exact path="/STORE">
          <TopDetails />
        </Route>
        <Route exact path="/ABOUT">
          <About />
        </Route>
        <FooterDetails />
      </CartContext.Provider>
    </Switch>
  );
};

export default App;
