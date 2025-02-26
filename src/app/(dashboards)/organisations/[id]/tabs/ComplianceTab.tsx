import { Column, Grid, InlineNotification } from "@carbon/react"

import React, { useState } from "react"

import UserFile from "./component/UserFile"
import UserInfo from "./component/UserInfo"
import style from "./tabs.module.scss"
import { useAppSelector } from "@/redux/hooks"
import { authSelector } from "@/redux/features/auth.slice"
function ComplianceTab() {

   const user = useAppSelector(authSelector).user

   const kyc = user?.kycComplete

   return (
      <Grid style={{ paddingTop: "1.5rem" }}>
         <Column lg={8} md={4} sm={4}>

            <InlineNotification
               title={kyc ? "KYC requirement approval is approved" : "KYC requirement approval is pending"}
               kind="info-square"
               style={kyc ? { backgroundColor: "#24A148", border: "none" }: { backgroundColor: "#FF832B", border: "none" }}
               className={style.notification}
               hideCloseButton
            />
            <div className={style.line}>
               <UserInfo label={user.firstName} info={user?.lastName || "Not available"} icon={false} />
            </div>

            <div className={style.line}>
               <UserInfo label={"Type"} info={user?.organizationType || "Not available"} icon={false} />
            </div>
            <div className={style.line}>
               <UserInfo label={"Email"} info={user?.email || "Not available"} icon={false} />
            </div>

            <UserInfo label={"Registration Number"} info={"Not available"} icon={true} />

            <UserFile title={"CAC Document"} name={"File name.pdf"} docType="CAC"/>
            <UserFile title={"Memorandum and Article of Association:"} name={"File name.pdf"} docType="MAA"/>
            <UserInfo
               label={"Govt Organisation Certification Type"}
               info={"Hospital Licence"}
               icon={false}
            
            />
            <UserFile title={"Govt Organisation Certification:"} name={"File name.pdf"}  docType="PCN"/>
            <UserInfo
               label={"CEO’s Means Of ID Type"}
               info={"International Passport"}
               icon={false}
            />
            <UserInfo label={"ID Number"} info={"B123456788"} icon={true} />

            <UserFile title={"CEO’s Means Of ID:"} name={"File name.pdf"}  docType="IDCARD"/>

            <UserInfo
               label={"CEO’s Address"}
               info={"Number 2 Ola, Ikeja, Lagos, Nigeria"}
               icon={false}
            />
            <UserInfo label={"CEO’s Proof Of Address Type"} info={"Power Bill"} icon={false}  />
            <UserFile title={"CEO’s Proof Of Address:"} name={"File name.pdf"} docType="ADDRESS"/>

            <div className={style.line}>
               <UserInfo label={"Organisation Location"} info={"Lagos State"} icon={false} />
            </div>

            <div className={style.line}>
               <UserInfo
                  label={"Organisation Address"}
                  info={"Number 32 Belo, Ikeja, Lagos, Nigeria"}
                  icon={false}
               />
            </div>

            <div className={style.line}>
               <UserInfo
                  label={"Organisation Proof Of Address Type"}
                  info={"Internet Bill"}
                  icon={false}
               />
            </div>

            <UserFile title={"CEO’s Proof Of Address:"} name={"File name.pdf"} docType="ADDRESS"/>
         </Column>
      </Grid>
   )
}

export default ComplianceTab
