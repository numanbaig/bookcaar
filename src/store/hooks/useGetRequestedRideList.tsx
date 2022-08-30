import React from "react";
import { useState } from "react";
import { collection, where, onSnapshot, query } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { IUser } from "../Interfaces/user";

const useGetRequestedRideList = () => {
  const [rideRequest, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const requestRideRef = collection(db, "car-request");

  const getRequestList = (user: IUser) => {
    try {
      setIsLoading(true);
      const requestRideQuery = query(
        requestRideRef,
        where("requestedUser.userId", "==", user.id)
      );
      onSnapshot(requestRideQuery, (querySnapshot) => {
        let requestRideList = [] as any;
        querySnapshot.forEach(async (doc: any) => {
          requestRideList.push({ ...doc.data(), docId: doc.id });
        });
        setRequests(requestRideList);
      });
      setIsLoading(false);
    } catch (err) {
      console.error(err, "getRequestedRideList [err !]");
    }
  };

  return {
    rideRequest,
    getRequestList,
    isLoading,
  };
};

export default useGetRequestedRideList;
