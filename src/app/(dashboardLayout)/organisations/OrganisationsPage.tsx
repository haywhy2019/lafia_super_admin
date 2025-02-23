'use client'
import PageHeader from '@/components/navigation/PageHeader'
import Image from "next/image"

import React from 'react'



function OrganisationsPage() {
  return (
    <div>
        <PageHeader
            image={<Image src="/svg/dashboardNotice.svg" alt="" width={36} height={36} />}
            title={`Organisations`}
            text="Manage all tenants (organisation) on the platform."
         />
    </div>
  )
}

export default OrganisationsPage