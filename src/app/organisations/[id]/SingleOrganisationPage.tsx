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

const SingleOrganisationPage = ({ id }: { id: string }) => {
   console.log("test", id)
   const breadCrumbs = [
      { title: "Organisations", href: appRoutes.organisations },
      { title: "Organisation Profile", href: "" },
   ]
   return (
      <Grid style={{ padding: "1.5rem" }}>
         <Column lg={16} md={8} sm={4}>
            <div>
               <BreadCrumbs pages={breadCrumbs} />
               <div className={styles.tab_padding}>
                  <Tabs>
                     <TabList aria-label="List of tabs" style={{}}>
                        <Tab className={""}>Compliance</Tab>
                        <Tab className={""}>Activity Log</Tab>
                        <Tab className={""}>Products</Tab>
                        <Tab className={""}>Staff</Tab>
                     </TabList>
                     <TabPanels>
                        <TabPanel>
                           <ComplianceTab />
                        </TabPanel>
                        <TabPanel>
                           <ActivityLogTab />
                        </TabPanel>
                        <TabPanel>
                           <ProductsTab />
                        </TabPanel>
                        <TabPanel>
                           <StaffsTab />
                        </TabPanel>
                     </TabPanels>
                  </Tabs>
               </div>
            </div>
         </Column>
      </Grid>
   )
}

export default SingleOrganisationPage
