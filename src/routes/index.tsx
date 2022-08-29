import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Bids from "../pages/Bids";
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
const AppRoutes = () => {
  const dispatch = useDispatch();

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      getCurrentUser(user.uid);
    } else {
      // User is signed out
      // ...
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
        <Route exact path={"/bids"}>
          <Bids />
        </Route>
        <Route exact path={"/register"}>
          <Register />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/signUp"}>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
