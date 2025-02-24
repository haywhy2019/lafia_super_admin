/* eslint-disable */
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { authRoutes } from "@/helpers/routes"

import { getRedirectUrl } from "./helpers/utils"
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

   const token = getJsonParsedCookie(request, "token") as string
   const user = getJsonParsedCookie(request, "user") as User

   //Redirect user if logged in & not trying to authenticate a sub-application
   if (pathname === authRoutes.login && user) {
      const hasPrompt = url.searchParams.has("prompt")
      const hasLoginHint = url.searchParams.has("login_hint")
      const hasContinue = url.searchParams.has("continue")

      if (!hasPrompt && !hasLoginHint && !hasContinue) {
         const redirectUrl = new URL(getRedirectUrl(user)!, request.url)
         return NextResponse.redirect(redirectUrl)
      }
   }

   // Redirect to email verifiy page if email is not verified

   // Redirect to dashboard if user is already logged in
   if (token && isAuthPage) {
      const url = new URL(getRedirectUrl(user)!, request.url)
      return NextResponse.redirect(url)
   }

   // Allow the request to proceed for other cases
   return NextResponse.next()
}

export const config = {
   matcher: [
      // "/login",
   ],
}
