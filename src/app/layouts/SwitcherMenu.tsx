import React from "react"

import Link from "next/link"

import styles from "./switcher_menu.module.scss"
import { appSwitcherLinks } from "@/helpers/constants"
import AppswitchArrow from "../../../public/svg/appSwitchArrow"

function SwitcherMenu({ menuOpen }: { menuOpen: boolean }) {
   return (
      menuOpen && (
         <div className={styles.menu}>
            <p className={styles.menu_item_title}>My Apps</p>
            {appSwitcherLinks.map(({ name, href, Icon }, index) => (
               <Link
                  href={`${process.env.NEXT_PUBLIC_AUTH_APP}/login?prompt=${name}&continue=${href}`}
                  passHref
                  legacyBehavior
               >
                  <div className={styles.menu_container}>
                     <div className={styles.menu_container2}>
                        <Icon />
                        <p className={styles.menu_item}>{name}</p>
                     </div>

                     {index == 0 && <AppswitchArrow />}
                  </div>
               </Link>
            ))}
         </div>
      )
   )
}

export default SwitcherMenu
