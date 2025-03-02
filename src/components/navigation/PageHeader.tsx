import { Tile } from "@carbon/react"

import React from "react"

import styles from "./pageHeader.module.scss"

function PageHeader({
   image,
   title,
   text,
}: {
   image: React.ReactElement
   title: string
   text: string
}) {
   return (
      <Tile id="tile-1" className={styles.tile_padding}>
         <div className={styles.container}>
            {image}
            <div>
               <h1 className={styles.title}>{title}</h1>
               <p className={styles.text}>{text}</p>
            </div>
         </div>
      </Tile>
   )
}

export default PageHeader
