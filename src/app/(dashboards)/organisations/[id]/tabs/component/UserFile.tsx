"use client"

import { DocumentDownload, DocumentView } from "@carbon/icons-react"
import { Dropdown, InlineLoading, InlineNotification, Modal } from "@carbon/react"
import { useMutation } from "@tanstack/react-query"

import React, { useEffect, useState } from "react"

import Image from "next/image"
import { useParams } from "next/navigation"

import organisationApi from "@/axios/organisation.api"

import { downloadImage } from "@/helpers/utils"

import { KYCDocument } from "@/types/documents.types"
import { User } from "@/types/general"

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

function UserFile({
   title,
   item,
   docType,
   userData,
}: {
   title: string
   docType: string
   item: KYCDocument
   userData: User
}) {
   const [message, setMessage] = useState("")
   const [openDenyModal, setOpenDenyModal] = useState(false)
   const [openViewDocModal, setOpenViewDocModal] = useState(false)
   const [doctString, setDocString] = useState("")
   const [reason, setReason] = useState<string | undefined>("")
   const { id } = useParams()

   const payload = {
      userId: id.toString(),
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
      onSuccess: ({}) => {},
      onError: (error: any) => {
         setMessage(error.response.data.message || "An error occurred")
      },
   })

   const {
      mutate: _viewDoc,
      isError: viewErr,
      isPending: viewLoading,
   } = useMutation({
      mutationFn: organisationApi.organisationViewComplianceDoc,
      onSuccess: ({ data }) => {
         setDocString(data.data)
      },
      onError: (error: any) => {
         setMessage(error.response.data.message || "An error occurred")
      },
   })

   const DenyModal = () => {
      return (
         <Modal
            onRequestClose={() => {
               setOpenDenyModal(false)
            }}
            modalHeading="Reason For Denial"
            primaryButtonText="Send"
            onRequestSubmit={() => {
               payload.idstatus = "DECLINED"

               setOpenDenyModal(false)
               _verifyDoc(payload)
            }}
            primaryButtonDisabled={!reason ? true : false}
            loadingStatus={isPending ? "active" : "inactive"}
            aria-label="Modal content"
            open={openDenyModal}
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
               label="Select reason for document denial"
               items={denyReasonDropdownOptions}
               itemToString={(item) => (item ? item.text : "")}
               onChange={({ selectedItem }) => setReason(selectedItem?.text)}
               direction="bottom"
            />
            <p className={style.error}>{reason}</p>
         </Modal>
      )
   }

   const ViewDocModal = () => {
      return (
         <Modal
            onRequestClose={() => {
               setOpenViewDocModal(false)
            }}
            modalHeading={`${docType}`}
            passiveModal
            aria-label="Modal content"
            open={openViewDocModal}
         >
            <Image src={doctString} alt="Picture of the document" width={600} height={400} />
         </Modal>
      )
   }

   useEffect(() => {
      _viewDoc({ fileKey: item?.documentFile })
   }, [item?.documentFile])

   if (viewLoading) {
      return <InlineLoading className={style.container_bg} />
   }

   if (viewErr) {
      return <InlineNotification kind={"error"} title={message || "An error occurred"} />
   }
   return (
      <>
         <DenyModal />
         <ViewDocModal />

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
                     <p className={style.title}>{title}</p>
                     <p className={style.name}>
                        {item?.documentName?.slice(0, 50) + "..." || "Not found"}
                     </p>
                  </div>
                  <div className={style.flex_between}>
                     <div
                        className={style.icon}
                        onClick={() => {
                           downloadImage(doctString, `${userData?.organizationName}${docType}`)
                        }}
                     >
                        <DocumentDownload fill={"#0F62FE"} size={10} />
                        <p>Download</p>
                     </div>
                     <div className={style.icon} onClick={() => setOpenViewDocModal(true)}>
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
            ) : item?.status === "VERIFIED" ? (
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
            ) : (
               <div className={style.flex_start}>
                  <p
                     className={style.approve_text}
                     onClick={() => {
                        payload.idstatus = "VERIFIED"
                        _verifyDoc(payload)
                     }}
                  >
                     Approve
                  </p>
                  <p className={style.deny_text} onClick={() => setOpenDenyModal(true)}>
                     Deny
                  </p>
               </div>
            )}
         </div>
      </>
   )
}

export default UserFile
