"use client"

import { Column, Grid, Tab, TabList, TabPanel, TabPanels, Tabs } from "@carbon/react"

import React from "react"

import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs"

import { appRoutes } from "@/helpers/routes"

import styles from "./organisationProfile.module.scss"
import ActivityLogTab from "./tabs/ActivityLogTab"
import ComplianceTab from "./tabs/ComplianceTab"
import ProductsTab from "./tabs/ProductsTab"
import StaffsTab from "./tabs/StaffsTab"

const SingleOrganisationPage = () => {
   const breadCrumbs = [
      { title: "Organisations", href: appRoutes.organisations },
      { title: "Organisation Profile", href: "" },
   ]

   const tabheaders = ["Compliance", "Products", "Staff", "Activity Log"]
   const tabPanels = [ComplianceTab, ProductsTab, StaffsTab, ActivityLogTab]

   return (
      <Grid style={{ padding: "1.5rem" }}>
         <Column lg={16} md={8} sm={4}>
            <div>
               <BreadCrumbs pages={breadCrumbs} />
               <div className={styles.tab_padding}>
                  <Tabs>
                     <TabList aria-label="List of tabs" style={{}}>
                        {tabheaders.map((header, index) => (
                           <Tab key={index}>{header}</Tab>
                        ))}
                     </TabList>

                     <TabPanels>
                        {tabPanels.map((Panel, index) => (
                           <TabPanel key={index}>
                              <Panel />
                           </TabPanel>
                        ))}
                     </TabPanels>
                  </Tabs>
               </div>
            </div>
         </Column>
      </Grid>
   )
}

export default SingleOrganisationPage
