import "./App.css";
import Header from "./Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/register";
import Item from "./Item/item";
import Footer from "./Footer/Footer";
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const cartHandler = (prod) => {
    //console.log(prod);
    setCart((product) => [...product, prod]);
    //console.log(cart);
  };
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home cartHandler={cartHandler} />
        </Route>
        <Route path="/product/:pid" exact>
          <Item />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/cart" exact>
          {/* <Register /> */}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
