/** @format */
import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

import { initialState } from "../initialState"
import { RootState } from "../store"

const cookieConfig = {
   httpOnly: false,
   domain: process.env.NEXT_PUBLIC_TL_DOMAIN,
   secure: false,
   sameSite: "strict",
   path: "/",
} as const

export const authSlice = createSlice({
   name: "auth",
   initialState: initialState.auth,
   reducers: {
      setUser: (state, { payload }) => {
         state.user = payload
         // state.isUserInitialised = false
         Cookies.set("user", JSON.stringify(payload), cookieConfig)
      },
      initializeUser: (state) => {
         if (typeof window === "undefined") {
            return
         }
         if (Cookies.get("user")) {
            state.user = JSON.parse(Cookies.get("user") || "")
         }
         // state.isUserInitialised = true
      },
      logout: () => {
         window.location.href = `${process.env.NEXT_PUBLIC_AUTH_APP}/logout`
      },
   },
})

export const authSelector = (state: RootState) => state.auth

export const { setUser, initializeUser, logout } = authSlice.actions

export default authSlice.reducer
