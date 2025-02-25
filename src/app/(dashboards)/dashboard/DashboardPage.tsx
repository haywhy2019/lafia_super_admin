"use client"

import React from "react"

import styles from "./dashboard.module.scss"

const DashboardPage = () => {
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
