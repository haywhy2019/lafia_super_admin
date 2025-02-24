/* eslint-disable */


import {
   Currency,
   DashboardReference,
   DataFormat,
   DevicesApps,
   Money,
   Settings,
   UserMultiple,
} from "@carbon/react/icons"

import LafiaCoreLogo from "../../public/svg/lafiaCore"
import LafiaErpLogo from "../../public/svg/lafiaErp"
import LafiaHmsLogo from "../../public/svg/lafiaHms"
import LafiaLabsLogo from "../../public/svg/lafiaLabs"
import LafiaMoreLogo from "../../public/svg/lafiaMore"
import { appRoutes } from "./routes"

export const navLinks = [
   { name: "Dashboard", href: appRoutes.dashboard, icon: DashboardReference },
   { name: "Organisations", href: appRoutes.organisations, icon: UserMultiple },
   { name: "Products", href: appRoutes.products, icon: DevicesApps },
   { name: "Payment", href: appRoutes.payments, icon: Money },
   { name: "Audit Logs", href: appRoutes.auditLogs, icon: DataFormat },
   { name: "Settings", href: appRoutes.settings, icon: Settings },
]

export const appSwitcherLinks = [
   { name: "LafiaCore", href: "", Icon: LafiaCoreLogo },
   { name: "LafiaHMS", href: process.env.NEXT_PUBLIC_HMS_APP, Icon: LafiaHmsLogo },
   { name: "LafiaLabs", href: "", Icon: LafiaLabsLogo },
   { name: "LafiaERP", href: "", Icon: LafiaErpLogo },
   { name: "More Lafia Products", href: "", Icon: LafiaMoreLogo },
]
const sizes = ["10", "20", "30", "40", "50"]
export const pageSizes = sizes.map((size) => ({ value: Number(size), text: size }))

export const productRoles = [
   { display: "Doctor", value: "doctor" },
   { display: "Nurse", value: "nurse" },
   { display: "Lab Technician", value: "lab" },
   { display: "Financial Manager", value: "financial manager" },
]

export const organisationLocation = [
   { value: "lagos", label: "Lagos" },
   { value: "ibadan", label: "Ibadan" },
   { value: "ogun", label: "Ogun" },
]

export const governmentCert = [
   { label: "Pharmaceutical Council of Nigeria (PCN)", value: "" },
   { label: "Medical and Dental Council of Nigeria (MDCN)", value: "" },
]

export const queryKeys = {
   fetchStaff: "fetchStaff",
   fetchKyc: "fetchKyc",
   fetchProducts: "fetchProducts",
   fetchUser: "fetchUser",
   fetchOrganisations: "fetchOrganisations",
}
