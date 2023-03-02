import React from "react";
import { useState } from "react";
import TopDetails from "./Components/OutlookDetails/TopDetails";
import NavbarList from "./Components/Navbar/Navbar";
import FooterDetails from "./Components/BotomDetails/Bottom";
import CartContext from "./Components/Context/Cart-Context";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import ContactUs from "./Components/Pages/ContactUs";
import ProductView from "./Components/Pages/ProductPage";
import Login from "./Components/Pages/Login";
import { ProductContextProvider } from "./Components/Context/store-context";
const App = () => {
  const [cartList, setCartList] = useState([]);

  return (
    <Switch>
      <CartContext.Provider value={{ cartList, setCartList }}>
        <ProductContextProvider>
          <NavbarList />
          <Route path="/" exact>
            <Redirect to="/HOME" />
          </Route>
          <Route exact path="/HOME">
            <Home />
          </Route>
          <Route exact path="/STORE">
            <TopDetails />
            <FooterDetails />
          </Route>
          <Route exact path="/STORE/:id">
            <ProductView />
          </Route>
          <Route exact path="/ABOUT">
            <About />
            <FooterDetails />
          </Route>
          <Route exact path="/LOGIN">
            <Login />
          </Route>
          <Route exact path="/Contactus">
            <ContactUs />
            <FooterDetails />
          </Route>
        </ProductContextProvider>
      </CartContext.Provider>
    </Switch>
  );
};

export default App;
