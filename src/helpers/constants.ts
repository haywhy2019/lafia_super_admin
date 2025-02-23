import {
   Currency,
   DashboardReference,
   DevicesApps,
   QuestionAnswering,
   Security,
   Settings,
   UserMultiple,
} from "@carbon/react/icons"
import Cookies from "js-cookie"


// import { User } from "../types/general.types"
// import { companyTypes, govCertificationTypes, idTypes, proofOfAddressTypes } from "./enum"
import { appRoutes } from "./routes"
import { User } from "@/types/general"
import LafiaCoreLogo from "../../public/svg/lafiaCore"
import LafiaErpLogo from "../../public/svg/lafiaErp"
import LafiaHmsLogo from "../../public/svg/lafiaHms"
import LafiaLabsLogo from "../../public/svg/lafiaLabs"
import LafiaMoreLogo from "../../public/svg/lafiaMore"

const user = Cookies.get("user") ? (JSON.parse(Cookies.get("user")!) as User) : null
// const hasCompletedKYC = user?.kycComplete

export const navLinks = [
   { name: "Dashboard", href: appRoutes.dashboard, icon: DashboardReference },
   { name: "Organisations", href: appRoutes.organisations, icon: UserMultiple },
   { name: "Products", href: appRoutes.products, icon: DevicesApps },
   { name: "Payment", href: appRoutes.payments, icon: Currency },
   { name: "Audit Logs", href: appRoutes.auditLogs, icon: Currency },
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

// export const idTypeOptions = [
//    { label: "International Passport", value: idTypes.INTERNATIONAL_PASSPORT },
//    { label: "Drivers License", value: idTypes.DRIVERS_LICENSE },
//    { label: "National Identification Number (NIN)", value: idTypes.NIN },
// ]

// export const proofOfAddressTypesOptions = [
//    { display: "Utility Bill", value: proofOfAddressTypes.UTILITY_BILL },
// ]

export const governmentCert = [
   { label: "Pharmaceutical Council of Nigeria (PCN)", value: "" },
   { label: "Medical and Dental Council of Nigeria (MDCN)", value: "" },
]

// export const companyTypeOptions = [
//    { display: "Business Name", value: companyTypes.BUSINESS_NAME },
//    { display: "Company", value: companyTypes.COMPANY },
//    { display: "Incorporated Trustees", value: companyTypes.INCORPORATED_TRUSTESS },
//    {
//       display: "Limited Liability Partnership",
//       value: companyTypes.LIMITED_LIABILITY_PARTNERSHIP,
//    },
//    { display: "Limited Partnership", value: companyTypes.LIMITED_PARTNERSHIP },
// ]

// export const govCertificationTypeOptions = [
//    { display: "Pharmaceutical Council of Nigeria (PCN)", value: govCertificationTypes.PCN },
//    { display: "Medical and Dental Council of Nigeria (MDCN)", value: govCertificationTypes.MDN },
//    {
//       display: "HEFAMAA License (for Organizations Operating in Lagos)",
//       value: govCertificationTypes.HEFAMAA,
//    },
   
// ]

export const queryKeys = {
   fetchStaff: "fetchStaff",
   fetchKyc: "fetchKyc",
   fetchProducts: "fetchProducts",
   fetchUser: "fetchUser",
}
