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
}
