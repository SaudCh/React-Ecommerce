import "./App.css";
import Header from "./Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Home/home.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/register";
import Item from "./Item/item";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
