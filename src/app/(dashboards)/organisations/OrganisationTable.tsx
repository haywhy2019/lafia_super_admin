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
import { convertToLowerCase, formatDate, truncateText } from "../../../helpers/utils"
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
   const [searchTerm, setSearchTerm] = React.useState("")

   const openInviteStaffModal = () => setInviteModal(true)
   // const closeInviteStaffModal = () => setInviteModal(false)

   const headers = [
      { header: "Last Active", key: "last_active", isSortable: true },
      { header: "Name", key: "name", isSortable: true },
      { header: "Type", key: "type", isSortable: true },
      { header: "Status", key: "status", isSortable: true },
      { header: "Action", key: "action", isSortable: false },
   ]

   const rows = organisations?.map((row) => {
      return {
         ...row,
         id: row.id.toString(),
         last_active: (
            <p className={styles.last_active_cell}>
               {row.lastLoginDate ? formatDate(row.lastLoginDate) : "-"}
            </p>
         ),
         name: (
            <p className={styles.last_active_cell} title={row.organizationName}>
               {truncateText(row.organizationName, 60)}
            </p>
         ),
         type: (
            <p className={styles.last_active_cell}>{convertToLowerCase(row.organizationType)}</p>
         ),
         status: (
            <p
               className={styles.last_active_cell}
               style={{ color: row.status === "A" ? "#34C759" : "#FF3B30", fontWeight: "500" }}
            >
               {row.status === "A" ? "Active" : "Inactive"}
            </p>
         ),
         action: (
            <Link
               href={`${appRoutes.organisations}/${row.id}?u=${row.uuid}`}
               className={styles.action_cell}
            >
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
      <DataTableSkeleton
         zebra
         rowCount={5}
         headers={headers}
         title=""
         aria-label="organisation table"
      />
   ) : (
      <>
         <DataTable
            rows={rows}
            headers={headers}
            useZebraStyles
            aria-label="organisation table"
            data-testId="organisation-table"
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
                           value={searchTerm}
                           onChange={(value) => setSearchTerm(value.toString)}
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
                           {headers.map((header: any) => (
                              <TableHeader
                                 {...getHeaderProps({
                                    header,
                                    isSortable: header.isSortable as boolean,
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
