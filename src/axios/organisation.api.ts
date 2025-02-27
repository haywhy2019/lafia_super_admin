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
   initialiseHms: async (uuid) => await privateInstance.post(`/tenant/create/${uuid}`),
   createHmsAdmin: async (uuid) => await privateInstance.post(`/tenant/create/user/${uuid}`),
}

export default organisationApi

type orgApiType = {
   fetchAllOrganisations: (payload: FetchAllTennantType) => Promise<AxiosResponse>
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
