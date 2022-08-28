export interface IUser{
    displayName?: string,
    email: string,
    uid:string,
    phoneNumber?: number,
    gender?:string,
    metadata?: {
      createdAt?:string ,
      creationTime?: string,
      lastLoginAt?: string,
      lastSignInTime?: string,
    },
}