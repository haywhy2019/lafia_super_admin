import React from "react"

import { Metadata } from "next"

import ProfilePage from "./ProfilePage"

export const metadata: Metadata = {
   title: "LafiaEMR - Profile",
   description: "",
}

const Profile = () => {
   return <ProfilePage />
}

export default Profile
