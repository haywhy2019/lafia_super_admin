import React from "react"

import { Metadata } from "next"

import PaymentsPage from "./PaymentsPage"

export const metadata: Metadata = {
   title: "LafiaEMR - Payments",
   description: "",
}

const Payments = () => {
   return <PaymentsPage />
}

export default Payments
