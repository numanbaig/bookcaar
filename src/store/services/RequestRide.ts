import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../Firebase/FirebaseConfig";
import {
  doc,
  setDoc,
  collection,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  query,
} from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { IUser } from "../Interfaces/user";
import { store } from "../../store";

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
    try {
      const requestRideQuery = query(
        requestRideRef,
        orderBy("createdAt", "desc"),
        where("ownerId", "==", user.id)
      );
      return onSnapshot(requestRideQuery, (querySnapshot) => {
        const requestRideList: any[] = [];
        querySnapshot.forEach((doc) => {
          requestRideList.push({ docId: doc.id, ...doc.data() });
        });
        return requestRideList;
      });
    } catch (err) {
      console.error(err, "getRequestedRideList [err !]");
    }
  }
);

export const getRequestedRideBids = createAsyncThunk(
  "requestRideBids",
  async (docId: string) => {
    const requestRideBidsQuery = collection(db, "car-request", docId, "bids");
    try {
      return onSnapshot(requestRideBidsQuery, (querySnapshot) => {
        const requestRideBids: any[] = [];
        querySnapshot.forEach((doc) => {
          requestRideBids.push({ docId: doc.id, ...doc.data() });
        });
        return requestRideBids;
      });
    } catch (err) {
      console.error(err, "requestRideBidsQuery [err !]");
    }
  }
);
