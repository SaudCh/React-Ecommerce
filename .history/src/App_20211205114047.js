import "./App.css";
import Header from "./Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div>Home</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
