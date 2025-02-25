"use client"

import { authSelector } from "@/redux/features/auth.slice"
import { useAppSelector } from "@/redux/hooks"

import React from "react"

import Image from "next/image"

import PageHeader from "@/components/navigation/PageHeader"

import styles from "./dashboard.module.scss"

const DashboardPage = () => {
   const user = useAppSelector(authSelector)?.user

   const name = user?.firstName ? `${user?.firstName} ${user?.lastName}` : ""
   return (
      <>
         <PageHeader
            image={<Image src="/svg/dashboardNotice.svg" alt="" width={36} height={36} />}
            title={`Welcome Back, ${name || ""}!`}
            text=""
         />

         <section className={styles.container}>
            <p>dashboard</p>
         </section>
      </>
   )
}

export default DashboardPage
