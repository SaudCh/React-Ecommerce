import "./App.css";
import Header from "./Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
