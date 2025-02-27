/* eslint-disable */
import dayjs from "dayjs"
import jwt, { JwtPayload } from "jsonwebtoken"

import { User } from "@/types/general"

/**
 * Verifies a JWT token stored in cookies.
 * @param cookies - The cookies object (from NextRequest).
 * @param cookieName - The name of the cookie storing the token.
 * @returns The decoded token payload if valid, or null if invalid.
 */
export const decodeJwtToken = (token: string): JwtPayload | null => {
   try {
      // Verify the token and return its payload
      const decoded = jwt.decode(token) as JwtPayload
      return decoded
   } catch (error) {
      console.log("Token decoding failed:", error)
      return null
   }
}

/**
 * Takes a full name and returns the first two initials.
 * If the name is not provided it will return undefined.
 *
 * @param  name The full name to get the initials from
 * @returns  The first two initials of the name
 */
export const getFirstTwoInitials = (name: string) => {
   if (!name) return
   const nameParts = name.split(" ")
   const initials = []
   for (let i = 0; i < nameParts.length; i++) {
      if (nameParts[i]) {
         initials.push(nameParts?.[i]?.[0]?.toUpperCase())
      }
   }
   return initials.slice(0, 2).join("")
}

export const convertToLowerCase = (str: string) => str?.toLowerCase()

export const truncateText = (text: string, maxLength: number = 100) =>
   text?.length > maxLength ? `${text?.substring(0, maxLength)}...` : text

export const formatDate = (date: string | Date, format: string = "D MMM, YYYY"): string => {
   return dayjs(date).format(format)
}

/**
 * Given a user object, determine the correct redirect url based on the
 * user's status and type.
 *
 * If the user is not active, redirect to the verify page. Otherwise,
 * redirect to the appropriate dashboard based on the user's type.
 *
 * @param  user - The user object to determine the redirect URL for
 * @return  The URL to redirect to
 */
// export const getRedirectUrl = ({ userType }: User) => {

export const getRedirectUrl = ({ userType }: User) => {
   if (userType) return "/dashboard"
   return "/dashboard"
}

const sizes = ["10", "20", "30", "40", "50"]
export const pageSizes = sizes.map((size) => ({ value: Number(size), text: size }))
