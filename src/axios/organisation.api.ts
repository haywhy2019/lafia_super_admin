/** @format */

/* eslint-disable */
import { AxiosResponse } from "axios"

import { privateInstance } from "./instance.api"

const organisationApi: orgApiType = {
   fetchAllOrganisations: async (payload) => {
      let url = `/user/users?pageSize=${payload.pageSize}&pageNo=${payload.pageNo}`
      // if (payload.query) url += `&query=${query}`
      return await privateInstance.get(url)
   },
   organisationCompliance: async (payload) => {
      return await privateInstance.post("/kyc/verify-manual-kyc-document",payload)
   },
}

export default organisationApi

type orgApiType = {
   fetchAllOrganisations: (payload: FetchAllTennantType) => Promise<AxiosResponse>
   organisationCompliance: (payload: organisationComplianceType) => Promise<AxiosResponse>
}

export type FetchAllTennantType = {
   pageSize: number
   pageNo: number
}

export type organisationComplianceType = {
   userId: number
   documentType: string
   idstatus: string
}
