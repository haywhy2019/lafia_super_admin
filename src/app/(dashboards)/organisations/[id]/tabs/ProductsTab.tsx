import { Column, Grid } from "@carbon/react"
import { useMutation } from "@tanstack/react-query"

import React from "react"

import { useSearchParams } from "next/navigation"

import organisationApi from "@/axios/organisation.api"

import Toast from "@/components/Toast"

import InitializeProduct from "./component/InitializeProduct"

const ProductsTab = () => {
   const [initialised, setInitialised] = React.useState(false)
   const [adminCreated, setAdminCreated] = React.useState(false)
   const [message, setMessage] = React.useState("")

   const uuid = useSearchParams().get("u") as string

   const {
      mutate: _initialiseHms,
      isError,
      isSuccess,
      isPending: loadingInit,
   } = useMutation({
      mutationFn: organisationApi.initialiseHms,
      onSuccess: () => {
         setMessage("HMS initialised successfully")
         setInitialised(true)
      },
      onError: (error: any) => {
         setMessage(error.response.data.message || "An error occurred")
      },
   })

   const {
      mutate: _createHmsAdmin,
      isError: adminIsError,
      isSuccess: adminIsSuccess,
      isPending: loadingAdmin,
   } = useMutation({
      mutationFn: organisationApi.createHmsAdmin,
      onSuccess: () => {
         setMessage("Admin created successfully")
         setAdminCreated(true)
      },
      onError: (error: any) => {
         setMessage(error.response.data.message || "An error occurred")
      },
   })

   return (
      <Grid style={{ paddingTop: "1.5rem" }}>
         <Column
            lg={8}
            md={6}
            sm={4}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
         >
            {(isError || isSuccess) && (
               <Toast
                  kind={isError ? "error" : "success"}
                  title={message || (isError ? "An error occurred" : "Success")}
               />
            )}
            {(adminIsError || adminIsSuccess) && (
               <Toast
                  kind={adminIsError ? "error" : "success"}
                  title={message || (adminIsError ? "An error occurred" : "Success")}
               />
            )}

            <InitializeProduct
               title="LafiaLink HMS"
               poweredByLogo="/svg/openmrs-logo.svg"
               productLogo="/svg/lafiahms-logo.svg"
               onInitialize={() => _initialiseHms(uuid)}
               onSetupAdmin={() => _createHmsAdmin(uuid)}
               loadingInit={loadingInit}
               loadingAdmin={loadingAdmin}
               initialised={initialised}
               adminCreated={adminCreated}
            />
         </Column>
      </Grid>
   )
}

export default ProductsTab
