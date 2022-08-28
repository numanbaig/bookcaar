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
}

export interface ICreateUserProps {
  email: string;
  password: string;
  phoneNumber: number;
  gender: string;
  name: string;
}

const userRef = async (user: IUser) => {
  console.log(user,'user')
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
  async (data: ICreateUserProps) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password).then(
      (userCredential) => {
        const user = userCredential.user;
        userRef({
          ...user,
          displayName: data.name,
          gender: data.gender,
        } as unknown as IUser);
        return user;
      }
    );
  }
);

export const loginWithEmail = createAsyncThunk(
  "users/loginWithEmail",
  async ({ email, password }: ILoginProps) => {
    return await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        return user;
      }
    );
  }
);

export const signOutUser = createAsyncThunk("users/signOutUser", async () => {
  await signOut(auth);
});
