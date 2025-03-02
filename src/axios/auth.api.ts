/** @format */

/* eslint-disable */
import { authApiType } from "@/types/auth.types"

import { privateInstance, publicInstance } from "./instance.api"

const authApi: authApiType = {
   login: async (payload) => await publicInstance.post("/auth/admin/login", payload),
   forgotPassword: async (payload) =>
      await publicInstance.patch("/auth/begin-reset-password", payload),
   resetPassword: async (payload) =>
      await publicInstance.patch(`/auth/reset-password?code=${payload.code}`, payload),
   getUser: async (id) => {
      return await privateInstance.get(`/user/findUserById/${id}`)
   },
}

export default authApi
