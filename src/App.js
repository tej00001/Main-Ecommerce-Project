import React from "react";
import { useState } from "react";
import TopDetails from "./Components/OutlookDetails/TopDetails";
import NavbarList from "./Components/Navbar/Navbar";
import FooterDetails from "./Components/BotomDetails/Bottom";
//import classes from "./App.module.css";
import CartContext from "./Components/Context/Cart-Context";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import { Route, Switch } from "react-router-dom";
import ContactUs from "./Components/Pages/ContactUs";

const App = () => {
  const [cartList, setCartList] = useState([]);

  return (
    <Switch>
      <CartContext.Provider value={{ cartList, setCartList }}>
        <NavbarList />
        <Route exact path="/HOME">
          <Home />
        </Route>
        <Route exact path="/STORE">
          <TopDetails />
          <FooterDetails  />
        </Route>
        <Route exact path="/ABOUT">
          <About />
          <FooterDetails />
        </Route>
        <Route exact path="/Contactus">
          <ContactUs />
          <FooterDetails />
        </Route>
      </CartContext.Provider>
    </Switch>
  );
};

export default App;
