import React from "react"

import { Metadata } from "next"

import SettingsPage from "./SettingsPage"

export const metadata: Metadata = {
   title: "LafiaEMR - Settings",
   description: "",
}

const Settings = () => {
   return <SettingsPage />
}

export default Settings
