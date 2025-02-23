/** @format */
import { authApiType } from "@/types/auth.types"

import { privateInstance, publicInstance } from "./instance.api"

const authApi: authApiType = {
   login: async (payload) => await publicInstance.post("/auth/admin/login", payload),
   lafiaHMSLogin: async () => await privateInstance.get("/services/auth/openmrs"),
   getUser: async (id) => {
    return await privateInstance.get(`/user/findUserById/${id}`)
 },
   
//    signup: async (payload) => await publicInstance.post("/auth/signup", payload),
//    verifyOtp: async (payload) => await publicInstance.post("/auth/verify-otp", payload),
//    resendOtp: async (payload) => await publicInstance.post("/auth/resend-otp", payload),
//    forgotPassword: async (payload) =>
//       await publicInstance.patch("/auth/begin-reset-password", payload),
//    resetPassword: async (payload) =>
//       await publicInstance.patch(`/auth/reset-password?code=${payload.code}`, payload),
}

export default authApi
