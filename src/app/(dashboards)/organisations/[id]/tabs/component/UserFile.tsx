"use client"

import { DocumentDownload, DocumentView } from "@carbon/icons-react"
import { InlineLoading } from "@carbon/react"
import { useMutation } from "@tanstack/react-query"

import React, { useState } from "react"

import organisationApi, { organisationComplianceType } from "@/axios/organisation.api"

import style from "./userFile.module.scss"
import { authSelector } from "@/redux/features/auth.slice"
import { useAppSelector } from "@/redux/hooks"

function UserFile({ title, name ,docType}: { title: string; name: string,docType: string}) {

      const user = useAppSelector(authSelector).user.id
   const payload = {
      userId: user,
      documentType: docType,
      idstatus: "",
   }


   const [message, setMessage] = useState("")

   const {
      mutate: _verifyDoc,
      isError,
      isSuccess,
      isPending,
   } = useMutation({
      mutationFn: organisationApi.organisationCompliance,
      onSuccess: ({ data }) => {
         console.log(data, "payload")
      },
      onError: (error: any) => {
         console.log(error, "error")
         setMessage(error.response.data.message || "An error occurred")
      },
   })

   return (
      <div className={style.container}>
         <div className={style.container_bg}>
            <div className={style.flex_between}>
               <div className={style.flex_between}>
                  <p className={style.title}>{title}:</p>
                  <p className={style.name}>{name}</p>
               </div>
               <div className={style.flex_between}>
                  <div className={style.icon}>
                     <DocumentDownload fill={"#0F62FE"} size={10} />
                     <p>Download</p>
                  </div>
                  <div className={style.icon}>
                     <DocumentView fill={"#0F62FE"} size={10} />
                     <p>View</p>
                  </div>
               </div>
            </div>
         </div>
         {isPending ? (
            <div className={style.loading}>  <InlineLoading /></div>
           
         ) : (
            <div className={style.flex_start}>
               <p
                  className={style.approve_text}
                  onClick={() => {
                     payload.idstatus = "VERIFIED"
                     console.log(payload)
                     _verifyDoc(payload)
                  }}
               >
                  Approve
               </p>
               <p
                  className={style.deny_text}
                  onClick={() => {
                     payload.idstatus = "DECLINED"
                     console.log(payload)
                     _verifyDoc(payload)
                  }}
               >
                  Deny
               </p>
            </div>
         )}
      </div>
   )
}

export default UserFile
