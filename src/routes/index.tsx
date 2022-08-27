import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Bids from "../pages/Bids";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/bids"}>
          <Bids />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes 