import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "../pages/Home";
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
import {Box } from "@mui/material";

const AppRoutes = () => {
  const dispatch = useDispatch();

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      getCurrentUser(user.uid);
    }
  });

  const getCurrentUser = async (id: string) => {
    try {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const user = docSnap?.data();
        dispatch(
          currentUser({
            displayName: user?.displayName,
            id: user.uid,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
          })
        );
      }
    } catch (err) {
      console.log("err!", err);
    }
  };

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
          <Box minHeight="90vh">
            <Bids />
          </Box>
        </Route>
        <Route path={"/activerides"}>
          <Box minHeight="90vh">
            {" "}
            <ActiveBids />
          </Box>
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
