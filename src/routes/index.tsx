import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Private from "./PrivateGuard";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
