import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Bids from "../pages/Bids";
import Private from "./PrivateGuard";
import Navbar from "../components/navbar";
import Chat from "../pages/Chat";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/Register";
const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/chat"}>
          <Chat />
        </Route>
        <Route path={"/bids"}>
          <Bids />
        </Route>
        <Route path={"/register"}>
          <Register />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path={"/signUp"}>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
