"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { PersistGate } from "redux-persist/integration/react"

import React from "react"

import { persistor, store } from "../../redux/store"

const AppProvider = ({
   children,
}: Readonly<{
   children: React.ReactNode
}>) => {
   const queryClient = new QueryClient()

   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
               <ToastContainer
                  theme="colored"
                  autoClose={4000}
                  position="top-center"
                  hideProgressBar
               />
         
                  {children}
               
            </QueryClientProvider>
         </PersistGate>
      </Provider>
   )
}

export default AppProvider
