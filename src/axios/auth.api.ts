/** @format */

/* eslint-disable */
import { authApiType } from "@/types/auth.types"

import { privateInstance, publicInstance } from "./instance.api"

const authApi: authApiType = {
   login: async (payload) => await publicInstance.post("/auth/admin/login", payload),
   lafiaHMSLogin: async () => await privateInstance.get("/services/auth/openmrs"),
   getUser: async (id) => {
      return await privateInstance.get(`/user/findUserById/${id}`)
   },
}

export default authApi
