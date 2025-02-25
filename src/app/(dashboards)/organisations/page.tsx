import React from "react"

import { Metadata } from "next"

import OrganisationListPage from "./OrganisationListPage"

export const metadata: Metadata = {
   title: "LafiaEMR - Organisations",
   description: "",
}

const Organisations = () => {
   return <OrganisationListPage />
}

export default Organisations
