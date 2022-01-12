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
import Cart from "./Cart/Cart";
import CheckOut from "./CheckOut/CheckOut";

function App() {
  const [cart, setCart] = useState([]);
  const cartHandler = (prod) => {
    //console.log(prod);
    setCart((product) => [...product, prod]);
    //console.log(cart);
  };
  const removeCart = (id) => {
    //console.log(id);
    setCart((c) => {
      return c.filter((ca) => ca.id !== id);
    });
  };
  return (
    <BrowserRouter>
      <Header cart={cart} />
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
          <Cart cart={cart} removeCart={removeCart} />
        </Route>
        <Route path="/checkout" exact>
          <CheckOut />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
