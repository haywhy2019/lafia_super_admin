"use client"

import { setAuth } from "@/redux/features/auth.slice"
import { useAppDispatch } from "@/redux/hooks"
import { Button, FluidForm, InlineLoading, PasswordInput, Stack, TextInput } from "@carbon/react"
import { useMutation } from "@tanstack/react-query"
import { Formik } from "formik"

import React from "react"

import { useRouter } from "next/navigation"

import authApi from "@/axios/auth.api"

import Toast from "@/components/Toast"

import { appRoutes } from "@/helpers/routes"

import styles from "../auth.module.scss"
import { loginSchema } from "../auth.validators"

const LoginForm = () => {
   const [message, setMessage] = React.useState("")
   const dispatch = useAppDispatch()
   const router = useRouter()

   const {
      mutate: _login,
      isError,
      isSuccess,
      isPending,
   } = useMutation({
      mutationFn: authApi.login,
      onSuccess: ({ data }) => {
         const { role, ...user } = data.data.user
         const userPayload = {
            ...user,
            role: { ...role, permissions: [] }, //remove permissions from payload to declutter the user object before browser storage
         }
         const payload = { token: data.data.token, user: userPayload }

         setMessage("Login successful")
         dispatch(setAuth(payload))
         // router.push(redirect || redirectUrl!)
         router.push(appRoutes.dashboard)
      },
      onError: (error: any) => {
         setMessage(error.response.data.message || "An error occurred")
      },
   })

   const handleSubmit = (values: Record<string, string>) => {
      _login({ email: values.email, password: values.password })
   }

   return (
      <>
         {(isError || isSuccess) && (
            <Toast
               kind={isError ? "error" : "success"}
               title={message || (isError ? "An error occurred" : "Success")}
            />
         )}
         <div className={styles.auth_heading_container}>
            <h1 className={styles.auth_heading}>Login</h1>
            <p className={styles.auth_description}>Login to manage all tenants seamlessly.</p>
         </div>

         <Formik
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
            initialValues={{ email: "", password: "" }}
            data-testId="login-form"
         >
            {(props) => {
               return (
                  <FluidForm onSubmit={props.handleSubmit} className={styles.auth_form_container}>
                     <Stack gap={7}>
                        <Stack gap={3}>
                           <TextInput
                              id="name"
                              type="email"
                              name="email"
                              invalidText={props.errors.email}
                              labelText="Email Address"
                              placeholder="e.g joe@acmecorp.com"
                              invalid={!!(props.touched.email && props.errors.email)}
                              onChange={props.handleChange}
                              value={props.values.email}
                              onBlur={props.handleBlur}
                              size="lg"
                              style={{ borderBottom: "none" }}
                              data-testId="login-email-input"
                           />

                           <PasswordInput
                              id="password"
                              type="password"
                              name="password"
                              invalidText={props.errors.password}
                              labelText="Password"
                              placeholder="Type here..."
                              invalid={!!(props.touched.password && props.errors.password)}
                              onChange={props.handleChange}
                              value={props.values.password}
                              onBlur={props.handleBlur}
                              size="lg"
                              style={{ borderBottom: "none" }}
                              data-testId="login-password-input"
                           />

                           {/* <div style={{ display: "flex", justifyContent: "end" }}>
                              <Link
                                 href={authRoutes.forgotPassword}
                                 className={styles.auth_link}
                                 data-testId="login-password-forgot-password-link"
                              >
                                 Forgot Password?
                              </Link>
                           </div> */}
                        </Stack>

                        <Button
                           disabled={!props.isValid || isPending}
                           style={{ maxWidth: "none", width: "100%" }}
                           kind="primary"
                           type="submit"
                           size="lg"
                           data-testId="login-password-button"
                        >
                           {isPending ? <InlineLoading description="Logging in..." /> : "Login"}
                        </Button>
                     </Stack>
                  </FluidForm>
               )
            }}
         </Formik>
      </>
   )
}

export default LoginForm
