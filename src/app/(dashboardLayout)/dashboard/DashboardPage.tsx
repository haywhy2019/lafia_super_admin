"use client"

import { Button, Grid } from "@carbon/react"
import { ArrowRight, UserFollow, WarningHex } from "@carbon/react/icons"

import { useQuery } from "@tanstack/react-query"

import React from "react"

import Image from "next/image"
import Link from "next/link"

// import complianceApi from "../../axios/compliance.api"
import { queryKeys } from "../../../helpers/constants"
import { appRoutes } from "../../../helpers/routes"
import { authSelector } from "../../../redux/features/auth.slice"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import styles from "./dashboard.module.scss"
import AppCard from "@/components/dashboard/AppCard"
import PageHeader from "@/components/navigation/PageHeader"

const DashboardPage = () => {
   const [openInviteModal, setOpenInviteModal] = React.useState(false)

   const user = useAppSelector(authSelector).user
   const dispatch = useAppDispatch()

   const closeInviteModal = () => setOpenInviteModal(false)

   // const { isSuccess } = useQuery({
   //    queryKey: [queryKeys.fetchKyc],
   //    queryFn: () => complianceApi.getKycDetails().then((res) => res.data.data),
   // })

   const data = {} as any

   


   const myApps = [
      {
         name: "LafiaHMS",
         description: "Manage your clinical services. Powered by OpenMRS",
         logo: "",
         url: process.env.NEXT_PUBLIC_HMS_APP,
      },
   ]

   const otherApps = [
      {
         name: "LafiaHMO",
         description: "Manage your HMO services. Powered by OpenHMO",
         logo: "",
         comingSoon: true,
         url: "",
      },
      {
         name: "LafiaLabs",
         description: "Manage your lab services. Powered by OpenELIS",
         logo: "",
         comingSoon: true,
         url: "",
      },

      {
         name: "LafiaERP",
         description: "Manage your core processes. Powered by Odoo",
         logo: "",
         comingSoon: true,
         url: "",
      },
   ]

   const quickActions = [
      // { icon: Currency, text: "Top Up", onClick: () => {} },
      {
         icon: UserFollow,
         text: "Invite Staff",
         onClick: () => {
            setOpenInviteModal(true)
         },
      },
   ]

   const name = user?.firstName ? `${user?.firstName} ${user?.lastName}` : user?.organizationName

   // const isKycPending = !user?.needSetup && !user.kycComplete

   return (
      <>
         {/* <PageHeader
            image={<Image src="/svg/dashboardNotice.svg" alt="" width={36} height={36} />}
            title={`Welcome Back, ${name || ""}!`}
            text="Streamline patient management and make your practice more efficient and organized with ease today."
         /> */}

         <section className={styles.container}>
          
              <h1>dashboard</h1>
         </section>
      </>
   )
}

export default DashboardPage
