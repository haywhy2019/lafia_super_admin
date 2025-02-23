import { Link as CarbonLink, Column } from "@carbon/react"

import React from "react"



import styles from "./app_card.module.scss"
import { User } from "@/types/general"
import { ProductType } from "@/types/product.types"

type Props = Partial<ProductType> & {
   name: string
   logo: string
   url?: string
   comingSoon?: boolean
   user: User
}

const AppCard: React.FC<Props> = ({ ...props }) => {
   const isKycCompleted = props?.user?.kycComplete

   return (
      <Column
         as={isKycCompleted ? "a" : "div"}
         {...(isKycCompleted && {
            href: props.comingSoon
               ? "#"
               : `${process.env.NEXT_PUBLIC_AUTH_APP}/login?prompt=${props.name}&continue=${props.url}`,
         })}
         xlg={4}
         lg={8}
         md={4}
         sm={4}
         className={styles.app_card_container}
         role="button"
         tabIndex={0}
         style={{ opacity: isKycCompleted ? 1 : 0.4 }}
      >
         <div className={styles.app_card_header}>
            <span />

            {props.comingSoon && (
               <div title="Coming Soon" className={styles.app_card_tag}>
                  Coming Soon
               </div>
            )}
         </div>

         <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
         </div>

         {props.comingSoon ? (
            <CarbonLink style={{ maxWidth: "fit-content" }}>View Features</CarbonLink>
         ) : (
            <CarbonLink style={{ maxWidth: "fit-content" }}>Open App</CarbonLink>
         )}
      </Column>
   )
}

export default AppCard
