import { useState, useEffect } from "react";
import AppRoutes from "./routes";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "./Firebase/FirebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { currentUser } from "./store/slices/userSlice";
import { useDispatch } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await getCurrentUser(user.uid);
    }
    setIsLoading(false);
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
    setIsLoading(false);
  };



  return (
    <div className="App">
      <AppRoutes />
      <Backdrop
        sx={{ zIndex: 1201, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        open={isLoading}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  );
}

export default App;
