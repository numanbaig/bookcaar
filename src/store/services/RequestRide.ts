import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../Firebase/FirebaseConfig";
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
import { store } from "../../store";
import { rides } from "../slices/RequestRideSlice";

export interface IRequestRideInterface {
  vehicle: string;
  dropOffLocation: string;
  pickUpTime: string;
  pickUpLocation: string;
  userId: string;
}

const requestRideRef = collection(db, "car-request");

export const requestRide = createAsyncThunk(
  "requestRide",
  async (data: any) => {
    try {
      await setDoc(doc(requestRideRef), data);
    } catch (err) {
      console.error(err, "post ride-request [err!]");
    }
  }
);

export const getRequestedRideList = createAsyncThunk(
  "requestRideList",
  async (user: IUser) => {
    let requestRideList: any[] = [];
    try {
      const requestRideQuery = query(
        requestRideRef,
        where("requestedUser.userId", "==", user.id)
      );
      onSnapshot(requestRideQuery, (querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
          requestRideList.push({ ...doc.data(), docId: doc.id });
        });
      });
    } catch (err) {
      console.error(err, "getRequestedRideList [err !]");
    }
    return requestRideList;
  }
);

const getRequestedRideBid = createAsyncThunk(
  "requestRideBids",
  async (docId: string) => {
    const requestRideBidsQuery = collection(db, "car-request", docId, "bids");
    try {
      const requestRideBids: any[] = [];

      await onSnapshot(requestRideBidsQuery, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          requestRideBids.push({ docId: doc.id, ...doc.data() });
        });
      });
      return requestRideBids;
    } catch (err) {
      console.error(err, "requestRideBidsQuery [err !]");
    }
  }
);
