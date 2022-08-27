import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Bids from "../pages/Bids";
import Private from "./PrivateGuard";
import Layout from "../components/layout";
import Chat from "../pages/Chat"
import Register from '../pages/Auth/Register'
import Login from '../pages/Auth/Login'
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
        <Route exact path={"/register"}>
          <Register />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes 