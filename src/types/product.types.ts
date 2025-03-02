/** @format */

/* eslint-disable */
import { AxiosResponse } from "axios"

import { products } from "../helpers/enum"

export type productApiType = {
   fetchProducts: () => Promise<AxiosResponse>
}

export type ProductType = {
   id: number
   version: number
   delFlag: "N"
   deletedOn: string
   dateCreated: string
   productName: products
   prices: {
      credit: number
      monthly: number
      quarterly: number
      yearly: number
   }
   description: string
   features: string[]
}

export type Role = {
   id: number
   version: number
   delFlag: string
   deletedOn: string | null
   dateCreated: string
   name: string
   uuid: string
}

export type SelectedProduct = {
   productId: number
   roleId: number | null
}

export type Products = {
   id: number
   version: number
   delFlag: string
   deletedOn: string | null
   dateCreated: string
   productName: string
   prices: Price[]
   description: string
   features: string[]
   url: string
   activeFlag: boolean
   roles: Role[]
}

export type Price = {
   id: number
   version: number
   delFlag: string
   deletedOn: string | null
   dateCreated: string
   priceType: "MONTHLY" | "QUARTERLY" | "ANNUALLY"
   credit: number | null
   amount: number
}
