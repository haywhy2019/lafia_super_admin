import React from 'react'
import LoginForm from './LoginForm'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "LafiaEMR - Login",
    description: "",
 }
 
function Login() {
  return (
   <LoginForm />
  )
}

export default Login