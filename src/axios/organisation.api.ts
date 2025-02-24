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
}

export default organisationApi

type orgApiType = {
   fetchAllOrganisations: (payload: FetchAllTennantType) => Promise<AxiosResponse>
}

export type FetchAllTennantType = {
   pageSize: number
   pageNo: number
}
