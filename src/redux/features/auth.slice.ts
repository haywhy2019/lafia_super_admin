/** @format */
import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

import { authRoutes } from "@/helpers/routes"

import { initialState } from "../initialState"
import { RootState } from "../store"

const cookieConfig = {
   httpOnly: false,
   secure: true,
   sameSite: "strict",
   path: "/",
   expires: 0.4167, //10 hours
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
         if (payload.token) Cookies.set("tk", JSON.stringify(payload.token), cookieConfig)
         Cookies.set("us", JSON.stringify(payload.user), cookieConfig)
      },
      logout: (state) => {
         state.user = null as any
         Cookies.remove("tk", cookieConfig)
         Cookies.remove("us", cookieConfig)
         window.location.href = authRoutes.login
      },
   },
})

export const authSelector = (state: RootState) => state.auth

export const { setUser, setAuth, logout } = authSlice.actions

export default authSlice.reducer
