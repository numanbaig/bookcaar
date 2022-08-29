export interface IUser {
  id: string;
  displayName?: string;
  email: string;
  photoURL?: string;
  uid: string;
  phoneNumber?: number;
  gender?: string;
  metadata?: {
    createdAt?: string;
    creationTime?: string;
    lastLoginAt?: string;
    lastSignInTime?: string;
  };
}
