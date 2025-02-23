/** @format */

/* eslint-disable */
import { AxiosResponse } from "axios"
import { User } from "./general"



export type authApiType = {
   lafiaHMSLogin(): any
   login: (payload: LoginType) => Promise<AxiosResponse>
//    lafiaHMSLogin: () => Promise<AxiosResponse>
//    signup: (payload: SignupType) => Promise<AxiosResponse>
//    verifyOtp: (payload: VerifyType) => Promise<AxiosResponse>
//    resendOtp: (payload: { email: string }) => Promise<AxiosResponse>
//    forgotPassword: (payload: { email: string }) => Promise<AxiosResponse>
//    resetPassword: (payload: ResetPasswordType) => Promise<AxiosResponse>
getUser: (id: number) => Promise<AxiosResponse>
}

export type LoginType = {
   email: string
   password: string
}

export type VerifyType = {
   email: string
   otp: string
}

export type ResetPasswordType = {
   code: string
   email: string
   password: string
   confirmPassword: string
}

export type SignupType = {
   organizationType: User["organizationType"]
   organizationName: string
   email: string
   confirmPassword: string
   password: string
   firstName: string
   lastName: string
}
