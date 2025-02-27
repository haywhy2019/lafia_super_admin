"use client"

import { authSelector } from "@/redux/features/auth.slice"
import { useAppSelector } from "@/redux/hooks"
import { DocumentDownload, DocumentView } from "@carbon/icons-react"
import { InlineLoading, InlineNotification } from "@carbon/react"
import { useMutation } from "@tanstack/react-query"

import React, { useState } from "react"

import organisationApi, { organisationComplianceType } from "@/axios/organisation.api"

import Toast from "@/components/Toast"

import style from "./userFile.module.scss"

function UserFile({ title, name, docType }: { title: string; name: string; docType: string }) {
   const user = useAppSelector(authSelector).user

   console.log(user, "user")

   const payload = {
      userId: user.id,
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
      onSuccess: ({ data }) => {},
      onError: (error: any) => {
         setMessage(error.response.data.message || "An error occurred")
      },
   })

   return (
      <>
         {(isError || isSuccess) && (
            <InlineNotification
               kind={isError ? "error" : "success"}
               title={message || (isError ? "An error occurred" : "Success")}
            />
         )}
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
               <div className={style.loading}>
                  {" "}
                  <InlineLoading />
               </div>
            ) : user.kycComplete == false ? (
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
                        _verifyDoc(payload)
                     }}
                  >
                     Deny
                  </p>
               </div>
            ) : (
               <div className={style.flex_start}>
                  <p
                     className={style.approve_text}
                     onClick={() => {
                        payload.idstatus = "PENDING_VERIFICATION"
                        _verifyDoc(payload)
                     }}
                  >
                     Resubmit
                  </p>
               </div>
            )}
         </div>
      </>
   )
}

export default UserFile
