"use client"

import { DocumentDownload, DocumentView } from "@carbon/icons-react"

import React from "react"

import style from "./userFile.module.scss"

function UserFile({ title, name }: { title: string; name: string }) {
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
                  <DocumentDownload fill={"#0F62FE"} size={10}/>
                  <p>Download</p>
               </div>
               <div className={style.icon}>
                  <DocumentView fill={"#0F62FE"} size={10}/>
                  <p>View</p>
               </div>
            </div>
         </div>
       
      </div>
      <div className={style.flex_start}>
            <p className={style.approve_text}>Approve</p>
            <p className={style.deny_text}>Deny</p>
         </div>
      </div>
   )
}

export default UserFile
