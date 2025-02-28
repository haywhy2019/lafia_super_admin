"use client"

import { authSelector } from "@/redux/features/auth.slice"
import { useAppSelector } from "@/redux/hooks"
import { Column, Grid, InlineLoading, InlineNotification } from "@carbon/react"
import { useQuery } from "@tanstack/react-query"

import React, { useEffect, useState } from "react"

import { useSearchParams } from "next/navigation"

import organisationApi from "@/axios/organisation.api"

import UserFile from "./component/UserFile"
import UserInfo from "./component/UserInfo"
import style from "./tabs.module.scss"

function ComplianceTab() {
   const [token, setToken] = useState("")
   // const [userDoc, setUserDoc] = useState<Document>()
   const user = useAppSelector(authSelector).user

   const kyc = user?.kycComplete
   const searchParams = useSearchParams()

   const { data, isPending, error } = useQuery({
      queryKey: ["fetchFile"],
      queryFn: () =>
         organisationApi.organisationGetComplianceDoc(token).then((res) => res.data.data),
   })

   console.log(data, "data fetched")

   useEffect(() => {
      const userToken = searchParams.get("u")
      if (userToken) {
         setToken(userToken)
      }
   }, [searchParams])
   if (isPending) {
      return <InlineLoading />
   }
   return (
      <>
         <Grid style={{ paddingTop: "1.5rem" }}>
            <Column lg={8} md={4} sm={4}>
               <InlineNotification
                  title={
                     data?.user?.kycComplete
                        ? "KYC requirement approval is approved"
                        : "KYC requirement approval is pending"
                  }
                  kind="info-square"
                  style={
                     data?.user?.kycComplete
                        ? { backgroundColor: "#24A148", border: "none" }
                        : { backgroundColor: "#FF832B", border: "none" }
                  }
                  className={style.notification}
                  hideCloseButton
               />
               <div className={style.line}>
                  <UserInfo
                     label={"Name"}
                     info={`${data?.user?.organizationName}` || "Not available"}
                     icon={false}
                  />
               </div>

               <div className={style.line}>
                  <UserInfo
                     label={"Type"}
                     info={data?.user?.organizationType || "Not available"}
                     icon={false}
                  />
               </div>
               <div className={style.line}>
                  <UserInfo
                     label={"Email"}
                     info={data?.user?.email || "Not available"}
                     icon={false}
                  />
               </div>
               <UserInfo
                  label={"Registration Number"}
                  info={data?.rc || "Not available"}
                  icon={true}
               />

               <UserFile
                  title={"CAC Document"}
                  item={data?.cac}
                  docType="CAC"
                  userData={data?.user}
               />
               <UserFile
                  title={"Memorandum and Article of Association:"}
              
                  docType="MAA"
                  item={data?.maa}
                  userData={data.user}
               />
               <UserInfo
                  label={"Govt Organisation Certification Type"}
                  info={"not returned"}
                  icon={false}
               />
               <UserFile
                  title={"Govt Organisation Certification:"}
                  item={data?.hefamaalicense}
                  docType="PCN"
                  userData={data}
               />
               <UserInfo
                  label={"CEO’s Means Of ID Type"}
                  info={data?.stakeHolders?.name}
                  icon={false}
               />
               <UserInfo label={"ID Number"} info={"Nor returned"} icon={true} />

               <UserFile
                  title={"CEO’s Means Of ID:"}
                  docType="IDCARD"
                  item={data?.stakeHolders}
                  userData={data}
               />

               <UserInfo label={"CEO’s Address"} info={data?.stakeHolders?.address} icon={false} />
               <UserInfo label={"CEO’s Proof Of Address Type"} info={"Power Bill"} icon={false} />
               <UserFile
                  title={"CEO’s Proof Of Address:"}
                  docType="ADDRESS"
                  item={data?.stakeHolders}
                  userData={data}
                  
               />

               <div className={style.line}>
                  <UserInfo label={"Organisation Location"} info={"Not retured"} icon={false} />
               </div>

               <div className={style.line}>
                  <UserInfo
                     label={"Organisation Address"}
                     info={data?.address?.address}
                     icon={false}
                  />
               </div>

               <div className={style.line}>
                  <UserInfo
                     label={"Organisation Proof Of Address Type"}
                     info={data?.address?.proofOfAddressType}
                     icon={false}
                  />
               </div>

               <UserFile
                  title={"CEO’s Proof Of Address:"}
                  item={data?.address}
                  docType="ADDRESS"
                  userData={data?.user}
               />
            </Column>
         </Grid>
      </>
   )
}

export default ComplianceTab
