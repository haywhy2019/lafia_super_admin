import { Button, Stack } from "@carbon/react"
import { ArrowRight, Logout } from "@carbon/react/icons"

import React from "react"

import { useRouter } from "next/navigation"


import styles from "./sideNavFooter.module.scss"
import { getFirstTwoInitials, truncateText, convertToLowerCase } from "@/helpers/utils"
import { appRoutes } from "@/helpers/routes"
import { authSelector, logout } from "@/redux/features/auth.slice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

const SideNavFooter = () => {
   const router = useRouter()
   const dispatch = useAppDispatch()
   const user = useAppSelector(authSelector).user

   const handleLogout = () => dispatch(logout())

   const name = user?.firstName || user?.organizationName

   return (
      <Stack gap={4} className={styles.side_nav_footer_container}>
         <div
            className={styles.side_nav_profile_container}
            onClick={() => router.push(appRoutes.profile)}
            role="link"
            tabIndex={0}
         >
            <div className={styles.side_nav_profile}>
               <span>{getFirstTwoInitials(name)}</span>

               <div>
                  <h3 title={name}>{truncateText(name, 8)}</h3>
                  <p>{convertToLowerCase(user?.role?.name)}</p>
               </div>
            </div>

            <div
               style={{
                  padding: "1rem",
                  borderRadius: "50%",
                  background: "#FAFAFA",
               }}
            >
               <ArrowRight />
            </div>
         </div>

         <Button
            size="md"
            style={{
               width: "100%",
               background: "#FAFAFA",
               color: "#DA1E28",
               fontWeight: "bold",
               position: "relative",
            }}
            onClick={handleLogout}
         >
            Logout
            <Logout style={{ position: "absolute", right: "1rem" }} />
         </Button>
      </Stack>
   )
}

export default SideNavFooter
