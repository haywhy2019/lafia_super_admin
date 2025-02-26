import { InlineLoading, Tile, Toggle } from "@carbon/react"

import React from "react"

import Image from "next/image"

import styles from "./initializeProduct.module.scss"

type Props = {
   title: string
   productLogo: string
   poweredByLogo: string
   onInitialize: any
   onSetupAdmin: any
   loadingInit: boolean
   loadingAdmin: boolean
   initialised: boolean
   adminCreated: boolean
}

const InitializeProduct: React.FC<Props> = ({ ...props }) => {
   const handleToggle = async (type: "init" | "admin", checked: boolean) => {
      if (!checked) return

      if (type === "init") {
         await props.onInitialize()
      } else {
         await props.onSetupAdmin()
      }
   }

   return (
      <Tile className={styles.tile}>
         <div className={styles.header}>
            <Image src={props.productLogo} alt={props.title} width={179} height={32} />

            <div className={styles.poweredBy}>
               <span>Powered by</span>
               <Image src={props.poweredByLogo} alt={props.title} width={64} height={16} />
            </div>
         </div>

         <hr className={styles.divider} />

         <div className={styles.actionsContainer}>
            <div className={styles.actionRow}>
               <span>Initialize organisation</span>
               <div>
                  {props.loadingInit ? (
                     <InlineLoading className={styles.loading} description="Loading..." />
                  ) : (
                     <Toggle
                        id={`${props.title}-init`}
                        labelA=""
                        labelB=""
                        onToggle={(checked) => handleToggle("init", checked)}
                        toggled={props.initialised}
                     />
                  )}
               </div>
            </div>
            <div className={styles.actionRow}>
               <span>Setup admin</span>
               <div>
                  {props.loadingAdmin ? (
                     <InlineLoading className={styles.loading} description="Loading..." />
                  ) : (
                     <Toggle
                        id={`${props.title}-admin`}
                        labelA=""
                        labelB=""
                        onToggle={(checked) => handleToggle("admin", checked)}
                        toggled={props.adminCreated}
                     />
                  )}
               </div>
            </div>
         </div>
      </Tile>
   )
}

export default InitializeProduct
