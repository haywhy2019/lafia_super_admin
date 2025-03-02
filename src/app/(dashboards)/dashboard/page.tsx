import React from "react"

import { Metadata } from "next"

import DashboardPage from "./DashboardPage"

export const metadata: Metadata = {
   title: "LafiaEMR - Dashboard",
   description: "",
}

const Dashboard = () => {
   return <DashboardPage />
}

export default Dashboard
