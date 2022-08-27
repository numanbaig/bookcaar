import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Private from "./PrivateGuard";
import Layout from "../components/layout";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Layout>
            <Home />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};
