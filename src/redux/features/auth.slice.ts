/** @format */
import { createSlice } from "@reduxjs/toolkit"
import Cookies from  "js-cookie"

import { authRoutes } from "@/helpers/routes"

import { initialState } from "../initialState"
import { RootState } from "../store"

const cookieConfig = {
   httpOnly: false,
   domain: process.env.NEXT_PUBLIC_TL_DOMAIN,
   secure: true,
   sameSite: "strict",
   path: "/",
} as const

export const authSlice = createSlice({
   name: "auth",
   initialState: initialState.auth,
   reducers: {
      setUser: (state, { payload }) => {
         state.user = payload.user
      },
      setAuth: (state, { payload }) => {
         state.user = payload.user
         if (payload.token) Cookies.set("token", JSON.stringify(payload.token), cookieConfig)
         Cookies.set("user", JSON.stringify(payload.user), cookieConfig)
         Cookies.set("X-TenantID", payload.user.tenantId, cookieConfig)
      },
      logout: (state) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
         state.user = null as any
         Cookies.remove("token", cookieConfig)
         Cookies.remove("user", cookieConfig)
         Cookies.remove("X-TenantID", cookieConfig)
         window.location.href = authRoutes.login
      },
   },
})

export const authSelector = (state: RootState) => state.auth

export const { setUser, setAuth, logout } = authSlice.actions

export default authSlice.reducer
