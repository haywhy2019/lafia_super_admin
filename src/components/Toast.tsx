import { ToastNotification, ToastNotificationProps } from "@carbon/react"

import React from "react"

const Toast: React.FC<ToastNotificationProps> = ({ ...props }) => {
   return (
      <ToastNotification
         {...props}
         role="status"
         timeout={3000}
         style={{ position: "absolute", top: 50, minWidth: "fit-content", zIndex: 100 }}
      />
   )
}

export default Toast
