/** @format */

/* eslint-disable */
import { AxiosResponse } from "axios"

import { userTypes } from "@/helpers/enum"

import { privateInstance } from "./instance.api"

const organisationApi: orgApiType = {
   fetchAllOrganisations: async (payload) => {
      let url = `/user/fetch-user?size=${payload.pageSize}&page=${payload.pageNo}&userType=${payload.userType || userTypes.ORGANIZATION}`
      if (payload.needSetup) url += `&needSetup=${payload.needSetup}`
      if (payload.isKycComplete) url += `&isKycComplete=${payload.isKycComplete}`
      return await privateInstance.get(url)
   },
   organisationCompliance: async (payload) => {
      return await privateInstance.post("/kyc/verify-manual-kyc-document",payload)
   },
   organisationGetComplianceDoc: async (payload) => {
      return await privateInstance.get(`/kyc/${payload}`)
   },
   organisationViewComplianceDoc: async (payload) => {
      return await privateInstance.post("/file/presign-url/file-view",payload)
   },
   initialiseHms: async (uuid) => await privateInstance.post(`/tenant/create/${uuid}`),
   createHmsAdmin: async (uuid) => await privateInstance.post(`/tenant/create/user/${uuid}`),
}

export default organisationApi

type orgApiType = {
   fetchAllOrganisations: (payload: FetchAllTennantType) => Promise<AxiosResponse>
   organisationCompliance: (payload: organisationComplianceType) => Promise<AxiosResponse>
   organisationGetComplianceDoc: (payload: string) => Promise<AxiosResponse>
   organisationViewComplianceDoc:  (payload: organisationViewComplianceDoc) => Promise<AxiosResponse>
   initialiseHms: (uuid: string) => Promise<AxiosResponse>
   createHmsAdmin: (uuid: string) => Promise<AxiosResponse>
}

export type FetchAllTennantType = {
   pageSize: number
   pageNo: number
   userType?: userTypes
   needSetup?: boolean
   isKycComplete?: boolean
}

export type organisationComplianceType = {
   userId: string
   documentType: string
   idstatus: string
}

export type organisationViewComplianceDoc = {
   fileKey: string
}
