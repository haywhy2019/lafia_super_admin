import React from "react"

import { Metadata } from "next"

import AuditLogsPage from "./AuditLogsPage"

export const metadata: Metadata = {
   title: "LafiaEMR - Audit Logs",
   description: "",
}

const AuditLogs = () => {
   return <AuditLogsPage />
}

export default AuditLogs
