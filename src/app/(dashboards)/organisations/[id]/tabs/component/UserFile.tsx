"use client"

import { authSelector } from "@/redux/features/auth.slice"
import { useAppSelector } from "@/redux/hooks"
import { DocumentDownload, DocumentView } from "@carbon/icons-react"
import {
   Dropdown,
   InlineLoading,
   InlineNotification,
   Modal,
   MultiSelect,
   TextInput,
} from "@carbon/react"
import { useMutation } from "@tanstack/react-query"

import React, { useState } from "react"

import organisationApi, { organisationComplianceType } from "@/axios/organisation.api"

import Toast from "@/components/Toast"

import style from "./userFile.module.scss"

const denyReasonDropdownOptions = [
   {
      id: "option-0",
      text: "File not clear",
   },
   {
      id: "option-1",
      text: "Wrong file uploaded",
   },
   {
      id: "option-2",
      text: "Face ID mismatch",
   },
  
]

function UserFile({ title, name, docType }: { title: string; name: string; docType: string }) {
   const [message, setMessage] = useState("")
   const [open, setOpen] = useState(true)
   const user = useAppSelector(authSelector).user

   const payload = {
      userId: user.id,
      documentType: docType,
      idstatus: "",
   }

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

   const DenyModal = () => {
      return (
         <Modal
            onRequestClose={(e) => {
               setOpen(false)
            }}
            modalHeading="Reason For Denial"
            primaryButtonText="Add"
            onSubmit={() => {
               payload.idstatus = "DECLINED"
               _verifyDoc(payload)
            }}
            aria-label="Modal content"
            open={open}
         
         >
            <p
               style={{
                  marginBottom: "1rem",
               }}
            >
             Kindly let the organisation know why you are denying this requirement approval.
            </p>

            <Dropdown
               autoAlign={true}
               id="default"
               style={{
                  margin: "1rem 0",
               }}
               titleText="Reason"
               helperText="Reason for document denial"
               label="Reason for document denial"
               items={denyReasonDropdownOptions}
               itemToString={(item) => (item ? item.text : "")}
               direction="top"
            />
         </Modal>
      )
   }

   return (
      <>
      <DenyModal />
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
                     onClick={() => setOpen(true)}
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
