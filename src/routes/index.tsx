import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Home from "../pages/Home";
import { useState } from "react";
import Bids from "../pages/Bids/index";
import ActiveBids from "../components/activeRides/index";
import Private from "./PrivateGuard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../Firebase/FirebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { currentUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar";
import Chat from "../pages/Chat";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/Register";
import Footer from "../components/footer/index";

const AppRoutes = () => {
  const dispatch = useDispatch();

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
        <Route path={"/activerides"}>
          <ActiveBids />
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
      <Footer />
    </Router>
  );
};

export default AppRoutes;
