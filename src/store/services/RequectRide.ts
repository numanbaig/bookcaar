import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../Firebase/FirebaseConfig";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { IUser } from "store/Interfaces/user";


export interface IRequestRideInterface {
    vehicle:string,
    dropOffLocation:string,
    pickUpTime:string,
    pickUpLocation:string,
    userId:string,
}

export const requestRide = createAsyncThunk(
    "requestRide",
    async (data:any) => {
        const requestRideRef = doc(collection(db, "requestRide"));
        await setDoc(requestRideRef, data);
    });


