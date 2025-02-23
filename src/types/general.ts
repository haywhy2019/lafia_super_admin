import { organizationTypes, userStatus, userTypes } from "@/helpers/enum"

export type User = {
    id: number
    version: number
    dateCreated: string
    organizationName: string
    organizationType: organizationTypes
    tenantId: string
    userName: string
    fullName: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    expiryDate: string
    lastLoginDate: string
    status: userStatus
    accountStatus: null
    userType: userTypes
    pinReset: boolean
    needSetup: boolean
    changePassword: boolean
    selfRegistration: boolean
    middleName: string
    gender: string
    role: Role
    permissions: null
    lafiaHMSPermissions: null
    lafiaLabsPermissions: null
    lafiaERPPermissions: null
    onLien: boolean
    uuid: string
    kycStatus?: string
    kycComplete: boolean
 }
 
 
 export type Role = {
    id: number
    version: number
    delFlag: "N"
    deletedOn: null
    dateCreated: string
    name: string
    description: null
    permissions: Permission[]
    lastUpdatedTime: null
    teamMembers: 14
    roleType: null
    createdBy: null
    tenantId: string
 }

 
 export type Permission = {
    id: number
    version: number
    delFlag: "N"
    deletedOn: null
    dateCreated: string
    description: null
    code: string
    category: string
 }