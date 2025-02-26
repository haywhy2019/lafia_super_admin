import React from "react"

import { Metadata } from "next"

import SingleOrganisationPage from "./SingleOrganisationPage"

export const metadata: Metadata = {
   title: "LafiaEMR - Organisation Profile",
   description: "",
}


const SingleOrganisation = () => {
 
   return <SingleOrganisationPage  />
}

export default SingleOrganisation
