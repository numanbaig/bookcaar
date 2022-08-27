import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Private from "./PrivateGuard";
import Home from "../pages/Home";
import Chat from "../pages/Chat"

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/chat"}>
          <Chat/>
        </Route>
      </Switch>
    </Router>
  );
};
