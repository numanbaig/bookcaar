import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../Firebase/FirebaseConfig";
import { doc, setDoc, query } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { IUser } from "store/Interfaces/user";

interface ILoginProps {
  email: string;
  password: string;
  history: any;
}

export interface ICreateUserProps {
  email: string;
  password: string;
  phoneNumber: number;
  gender: string;
  name: string;
  history: any;
}

const userRef = async (user: IUser) => {
  await setDoc(doc(db, "users", `${user.uid}`), {
    displayName: user.displayName,
    email: user.email,
    uid: user.uid,
    phoneNumber: user.phoneNumber,
    metadata: {
      createdAt: user.metadata.createdAt,
      creationTime: user.metadata.creationTime,
      lastLoginAt: user.metadata.lastLoginAt,
      lastSignInTime: user.metadata.lastSignInTime,
    },
  });
};

export const createUserWithEmail = createAsyncThunk(
  "users/createUserWithEmail",
  async ({
    email,
    password,
    phoneNumber,
    gender,
    name,
    history,
  }: ICreateUserProps) => {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      phoneNumber
    ).then((userCredential) => {
      const user = userCredential.user;
      history.push("/bids");
      userRef({
        ...user,
        displayName: name,
        gender: gender,
      } as unknown as IUser);

      return user;
    });
  }
);

export const loginWithEmail = createAsyncThunk(
  "users/loginWithEmail",
  async ({ email, password, history }: ILoginProps) => {
    return await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        history.push("/bids");
        return user;
      }
    );
  }
);

export const signOutUser = createAsyncThunk("users/signOutUser", async () => {
  await signOut(auth);
});
