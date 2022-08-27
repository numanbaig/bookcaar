import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Bids from "../pages/Bids";
import Private from "./PrivateGuard";
import Layout from "../components/layout";
import Chat from "../pages/Chat"

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path={"/chat"}>
          <Chat />
        </Route>
        <Route exact path={"/bids"}>
          <Bids />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes 