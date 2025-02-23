import { Breadcrumb, BreadcrumbItem } from "@carbon/react"

import React from "react"

type Crumbs = {
   pages: { title: string; href: string }[]
}

function BreadCrumbs({ pages }: Crumbs) {
   return (
      <Breadcrumb noTrailingSlash>
         {pages.map((item,index) => (
            <BreadcrumbItem isCurrentPage={index == pages.length - 1} key={index}>
               <a href={item.href}>{item.title}</a>
            </BreadcrumbItem>
         ))}
      </Breadcrumb>
   )
}

export default BreadCrumbs
