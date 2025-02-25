import { Copy } from "@carbon/icons-react"

import React from "react"

import style from "./userInfo.module.scss"

function UserInfo({ label, info, icon }: { label: string; info: string; icon: boolean }) {
   return (
      <div className={style.userInfoContainer}>
         <p>{label}</p>
         {icon ? (
            <span className={style.text_icon_container}>
               <p style=    {{marginRight: "0.5rem"}}>{info}</p>
               <Copy size={15} fill="#0F62FE" />
            </span>
         ) : (
            <p>{info}</p>
         )}
      </div>
   )
}

export default UserInfo
