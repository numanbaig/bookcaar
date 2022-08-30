import React from "react";
import { useState } from "react";
import {
  doc,
  setDoc,
  collection,
  where,
  onSnapshot,
  getDocs,
  serverTimestamp,
  query,
} from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { IUser } from "../Interfaces/user";

const useGetRequestedRideList = () => {
  const [rideRequest, setRequests] = useState([]);

  const requestRideRef = collection(db, "car-request");

  const getRequestList = (user: IUser) => {
    try {
      const requestRideQuery = query(
        requestRideRef,
        where("requestedUser.userId", "==", user.id)
      );
      onSnapshot(requestRideQuery, (querySnapshot) => {
        let requestRideList: any[] = [];
        querySnapshot.forEach(async (doc) => {
          requestRideList.push({ ...doc.data(), docId: doc.id });
        });
        setRequests(requestRideList);
      });
    } catch (err) {
      console.error(err, "getRequestedRideList [err !]");
    }
  };

  return {
    rideRequest,
    getRequestList,
  };
};

export default useGetRequestedRideList;
