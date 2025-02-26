import { Copy } from "@carbon/icons-react"
import { CopyButton } from "@carbon/react"

import React from "react"

import style from "./userInfo.module.scss"

function UserInfo({ label, info, icon }: { label: string; info: string; icon: boolean }) {
   const handleCopy = () => {
      navigator.clipboard
         .writeText(info)
         .then(() => console.log("Copied successfully!"))
         .catch((err) => console.error("Copy failed!", err))
   }
   return (
      <div className={style.userInfoContainer}>
         <p>{label}</p>
         {icon ? (
            <span className={style.text_icon_container}>
               <p style={{ marginRight: "0.5rem" }}>{info}</p>
               <CopyButton
                  style={{
                     backgroundColor: "transparent",
                     fill: "#0F62FE",
                     color: "#0F62FE",
                     height: "5px",
                  }}
                  size="sm"
                  onClick={handleCopy}
                  className={style.copy}
               />
            </span>
         ) : (
            <p>{info}</p>
         )}
      </div>
   )
}

export default UserInfo
