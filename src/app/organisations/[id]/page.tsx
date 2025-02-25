import React from "react"

import { Metadata } from "next"

import SingleOrganisationPage from "./SingleOrganisationPage"

export const metadata: Metadata = {
   title: "LafiaEMR - Organisation Profile",
   description: "",
}

type OrganisationProps = {
   params: {
      id: string
   }
}


const SingleOrganisation = ({params}:OrganisationProps) => {
   return <SingleOrganisationPage id={params.id}/>
}

export default SingleOrganisation
