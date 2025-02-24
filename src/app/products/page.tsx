import React from "react"

import { Metadata } from "next"

import ProductsPage from "./ProductsPage"

export const metadata: Metadata = {
   title: "LafiaEMR - Products",
   description: "",
}

const Products = () => {
   return <ProductsPage />
}

export default Products
