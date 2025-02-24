"use client"

import { Add } from "@carbon/icons-react"
import { Button, SkeletonText } from "@carbon/react"
import { useQuery } from "@tanstack/react-query"

import React, { useMemo } from "react"

import Image from "next/image"

import organisationApi from "@/axios/organisation.api"

import PageHeader from "@/components/navigation/PageHeader"

import { User } from "@/types/general"

import { queryKeys } from "../../helpers/constants"
import OrganisationTable from "./OrganisationTable"
import styles from "./staff.module.scss"

const OrganisationListPage = () => {
   const [inViteModal, setInviteModal] = React.useState(false) //eslint-disable-line
   const [page, setPage] = React.useState(1)
   const [pageSize, setPageSize] = React.useState(10)

   // const closeInviteModal = () => setInviteModal(false)
   const openInviteModal = () => setInviteModal(true)

   const { data, isPending } = useQuery({
      queryKey: [queryKeys.fetchStaff, page, pageSize],
      queryFn: () =>
         organisationApi
            .fetchAllOrganisations({ pageNo: page - 1, pageSize })
            .then((res) => res.data.data),
   })

   const organisations = data?.content

   const activeUsersCount = useMemo(
      () =>
         organisations?.reduce(
            (count: number, user: User) => count + (user.status === "A" ? 1 : 0),
            0,
         ),
      [organisations],
   )

   const metrics = [
      { name: "Active", value: data?.numberOfElements || 0 },
      { name: "Inactive", value: activeUsersCount || 0 },
      { name: "Pending", value: data?.numberOfElements - (activeUsersCount || 0) || 0 },
   ]

   return (
      <>
         <PageHeader
            image={<Image src="/svg/orgPageIcon.svg" alt="" width={36} height={36} />}
            title="Organisations"
            text="Manage all tenants (organisation) on the platform."
         />

         {(!organisations || organisations?.length) === 0 && !isPending ? (
            <div className={styles.emptyContainer}>
               <div className={styles.emptyContent}>
                  <Image src="/svg/orgPageIcon.svg" alt="" width={36} height={36} />
                  <h2 className={styles.emptyTitle}>No Organisation Yet</h2>
                  <p className={styles.emptyText}>
                     It looks like there are no registered Organisations. Once Organisations sign
                     up, they'll appear here.
                  </p>
                  <Button
                     kind="ghost"
                     renderIcon={Add}
                     onClick={openInviteModal}
                     data-testId="invite-staff-btn"
                  >
                     Onboard New Organisation
                  </Button>
               </div>
            </div>
         ) : (
            <section className={styles.container}>
               <div className={styles.metric_container}>
                  {metrics?.map((metric) => (
                     <div key={metric.name}>
                        <h3 data-testId={`${metric.name.toLowerCase()}-organisation`}>
                           {isPending ? <SkeletonText width="100px" /> : metric.value}
                        </h3>
                        <p>{isPending ? <SkeletonText width="65px" /> : metric.name}</p>
                     </div>
                  ))}
               </div>

               <OrganisationTable
                  organisations={organisations}
                  isLoading={isPending}
                  page={page}
                  setPage={setPage}
                  pageSize={pageSize}
                  setPageSize={setPageSize}
                  totalOrganisations={data?.numberOfElements}
               />
            </section>
         )}

         {/* <InviteStaffModal openModal={inViteModal} closeModal={closeInviteModal} /> */}
      </>
   )
}

export default OrganisationListPage
