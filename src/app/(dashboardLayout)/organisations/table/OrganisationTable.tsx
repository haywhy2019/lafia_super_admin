import { Add } from "@carbon/icons-react";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  Button,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Pagination,
} from "@carbon/react";

import React from "react";

enum Action {
  VIEW = "view",
  EDIT = "edit",
  DELETE = "delete",
}

type RecordType = {
  id: string;
  lastActive: string;
  name: string;
  type: string;
  status: string;
  action: Action;
};

const rows: RecordType[] = [
  {
    lastActive: "10th feb 2020",
    name: "Frad hort",
    type: "Hospital",
    status: "Active",
    action: Action.VIEW,
    id: "1",
  },
  {
    lastActive: "10th feb 2020",
    name: "Frad hort",
    type: "Hospital",
    status: "Active",
    action: Action.VIEW,
    id: "2",
  },
  {
    lastActive: "10th feb 2020",
    name: "Frad hort",
    type: "Hospital",
    status: "Active",
    action: Action.VIEW,
    id: "3",
  },
];

const headers = [
  {
    header: "Last Active",
    key: "lastActive",
  },
  {
    header: "Name",
    key: "name",
  },
  {
    header: "Type",
    key: "type",
  },
  {
    header: "Status",
    key: "status",
  },
  {
    header: "Action",
    key: "action",
  },
  {
    header: "Status",
    key: "status",
  },
];



function OrganisationTable() {
  return (
    <>
    <DataTable rows={rows} headers={headers} isSortable >
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps ,  getTableContainerProps,   getToolbarProps}) => (
        <TableContainer title="" description="" {...getTableContainerProps()}>
              <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
          <TableToolbarContent>
            <TableToolbarSearch 
            // onChange={onInputChange} 
            />
            <Button renderIcon={Add} onClick={() => {} } kind="tertiary">New Organisation</Button>
          </TableToolbarContent>
        </TableToolbar>
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableHeader {...getHeaderProps({ header })} key={index}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow {...getRowProps({ row })} key={index}>
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
      page={1}
      pageSize={10}
      pageSizes={[20]}
      onChange={    () => {}}
    //   totalItems={20}
   />
   </>
  );
}

export default OrganisationTable;
