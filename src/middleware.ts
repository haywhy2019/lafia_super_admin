/* eslint-disable */
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { appRoutes, authRoutes } from "@/helpers/routes"

import { User } from "./types/general"

const getJsonParsedCookie = (req: NextRequest, key: string) => {
   try {
      return JSON.parse(req.cookies.get(key)?.value as string)
      //eslint-disable-next-line
   } catch (error) {
      return undefined
   }
}

export async function middleware(request: NextRequest) {
   const url = request.nextUrl
   const pathname = url.pathname

   const authPages = [authRoutes.login]

   const isAuthPage = authPages.some((page) => pathname.startsWith(page))

   const token = getJsonParsedCookie(request, "tk") as string
   const user = getJsonParsedCookie(request, "us") as User

   //Redirect to login page if user tries to access / route
   if (pathname === "/") {
      const redirectUrl = new URL(authRoutes.login, request.url)
      return NextResponse.redirect(redirectUrl)
   }

   // Redirect to dashboard if user is already logged in
   if (token && isAuthPage) {
      const redirectUrl = new URL(appRoutes.dashboard, request.url)
      return NextResponse.redirect(redirectUrl)
   }

   //Redirect to login page if user is not logged in
   if (!token && !user && !isAuthPage) {
      const redirectUrl = new URL(authRoutes.login, request.url)
      return NextResponse.redirect(redirectUrl)
   }

   // Allow the request to proceed for other cases
   return NextResponse.next()
}

export const config = {
   matcher: [
      "/login",
      "/dashboard",
      "/organisations",
      "/products",
      "/payments",
      "/profile",
      "/settings",
      "/audit-logs",
   ],
}
