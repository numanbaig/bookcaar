import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../Firebase/FirebaseConfig";
import { doc, setDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { IUser } from "store/Interfaces/user";
import { store } from "../../store";

export interface IRequestRideInterface {
  vehicle: string;
  dropOffLocation: string;
  pickUpTime: string;
  pickUpLocation: string;
  userId: string;
}

export const requestRide = createAsyncThunk(
  "requestRide",
  async (data: any) => {
    console.log(data, "dataaa");
    const requestRideRef = doc(collection(db, "requestRide"));
    await setDoc(requestRideRef, { ...data, createdAt: serverTimestamp }).then(
      () => {
        store.dispatch(
          requestRide({
            payload: [],
          })
        );
      }
    );
  }
);
