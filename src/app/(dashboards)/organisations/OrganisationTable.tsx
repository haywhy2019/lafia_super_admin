"use client"

import { Add } from "@carbon/icons-react"
import {
   Button,
   DataTable,
   DataTableSkeleton,
   Pagination,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableHeader,
   TableRow,
   TableToolbar,
   TableToolbarContent,
   TableToolbarSearch,
} from "@carbon/react"

import React from "react"

import Link from "next/link"

import { User } from "@/types/general"

import { pageSizes } from "../../../helpers/constants"
import { appRoutes } from "../../../helpers/routes"
import { formatDate } from "../../../helpers/utils"
import styles from "./staff.module.scss"

type Props = {
   organisations: User[]
   isLoading: boolean
   page: number
   setPage: React.Dispatch<React.SetStateAction<number>>
   pageSize: number
   setPageSize: React.Dispatch<React.SetStateAction<number>>
   totalOrganisations: number
}

const OrganisationTable: React.FC<Props> = ({
   organisations,
   isLoading,
   page,
   setPage,
   pageSize,
   setPageSize,
   totalOrganisations,
}) => {
   const [inviteModal, setInviteModal] = React.useState(false) //eslint-disable-line

   const openInviteStaffModal = () => setInviteModal(true)
   // const closeInviteStaffModal = () => setInviteModal(false)

   const headers = [
      { header: "Last Active", key: "last_active" },
      { header: "Name", key: "name" },
      { header: "Type", key: "email" },
      { header: "Status", key: "status" },
      { header: "Action", key: "action" },
   ]

   const rows = organisations?.map((row) => {
      return {
         ...row,
         id: row.id.toString(),
         last_active: (
            <p className={styles.last_active_cell}>{formatDate(row.lastLoginDate) || "-"}</p>
         ),
         name: <p className={styles.last_active_cell}>{`${row.firstName} ${row.lastName}`}</p>,
         status: (
            <p
               className={styles.last_active_cell}
               style={{ color: row.status === "A" ? "#34C759" : "#FF3B30", fontWeight: "500" }}
            >
               {row.status === "A" ? "Active" : "Inactive"}
            </p>
         ),
         action: (
            <Link href={`${appRoutes.organisations}/${row.id}`} className={styles.action_cell}>
               View
            </Link>
         ),
      }
   })

   const handlePageChange = (e: any) => {
      setPage(e.page)
      setPageSize(e.pageSize)
   }

   return isLoading ? (
      <DataTableSkeleton zebra rowCount={5} headers={headers} title="" aria-label="staff table" />
   ) : (
      <>
         <DataTable
            rows={rows}
            headers={headers}
            isSortable
            useZebraStyles
            aria-label="staff table"
            data-testId="staff-table"
         >
            {({
               rows,
               headers,
               getHeaderProps,
               getRowProps,
               getTableProps,
               getToolbarProps,
               //  onInputChange,
               getTableContainerProps,
            }) => (
               <TableContainer {...getTableContainerProps()}>
                  <TableToolbar {...getToolbarProps()} aria-label="staff table toolbar">
                     <TableToolbarContent>
                        <TableToolbarSearch
                           // onChange={onInputChange}
                           placeholder="Search organisation name"
                           persistent
                           data-testId="organisation-search-input"
                        />
                        <Button
                           kind="ghost"
                           renderIcon={Add}
                           onClick={openInviteStaffModal}
                           data-testId="onboard-organisation-btn"
                        >
                           Onboard New Organisation
                        </Button>
                     </TableToolbarContent>
                  </TableToolbar>
                  <Table {...getTableProps()} aria-label="organisation table">
                     <TableHead>
                        <TableRow>
                           {headers.map((header) => (
                              <TableHeader
                                 // key={header.key}
                                 {...getHeaderProps({
                                    header,
                                 })}
                                 key={header.key}
                              >
                                 {header.header}
                              </TableHeader>
                           ))}
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {rows.map((row) => (
                           <TableRow
                              //  key={row.id}
                              {...getRowProps({
                                 row,
                              })}
                              key={row.id}
                           >
                              {row.cells.map((cell) => (
                                 <TableCell key={cell.id}>{cell.value}</TableCell>
                              ))}
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            )}
         </DataTable>

         <Pagination
            page={page}
            pageSize={pageSize}
            pageSizes={pageSizes}
            onChange={handlePageChange}
            totalItems={totalOrganisations}
         />
         {/* 
         <InviteStaffModal openModal={inviteModal} closeModal={closeInviteStaffModal} /> */}
      </>
   )
}

export default OrganisationTable
