"use client"

import { authSelector } from "@/redux/features/auth.slice"
import { useAppSelector } from "@/redux/hooks"
import { Button, Column, FluidForm, Grid, Stack, TextInput } from "@carbon/react"
import { Image as ImageIcon, Locked } from "@carbon/react/icons"
import { Formik } from "formik"

import React from "react"

import Image from "next/image"

import ChangePasswordModal from "./ChangePasswordModal"
import DeleteAccountModal from "./DeleteAccountModal"
import styles from "./profile.module.scss"

const ProfilePage = () => {
   const [preview, setPreview] = React.useState<string | null>(null)
   const [changePassword, setChangePassword] = React.useState(false)
   const [deleteAccount, setDeleteAccount] = React.useState(false)

   const inputRef = React.useRef<HTMLInputElement | null>(null)
   const user = useAppSelector(authSelector)?.user

   const openChangePasswordModal = () => setChangePassword(true)
   const closeChangePasswordModal = () => setChangePassword(false)
   // const openDeleteAccountModal = () => setDeleteAccount(true)
   const closeDeleteAccountModal = () => setDeleteAccount(false)

   const handleSubmit = () => {}

   const inputStyles = { borderBottom: "none", background: "white" }

   const handleUpload = () => {
      if (inputRef.current) {
         inputRef.current.click()
      }
   }

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
         const reader = new FileReader()
         reader.onload = () => setPreview(reader.result as string)
         reader.readAsDataURL(file)
      }
   }

   const name = user?.firstName ? `${user?.firstName} ${user?.lastName}` : ""

   return (
      <>
         <section className={styles.container}>
            <div className={styles.profile_header}>
               <div>
                  <h1 className={styles.profile_title}>My Profile</h1>
                  <p className={styles.profile_subTitle}>Manage your profile details</p>
               </div>

               <div className={styles.button_set}>
                  <Button kind="tertiary" renderIcon={Locked} onClick={openChangePasswordModal}>
                     Change Password
                  </Button>
                  {/* <Button
                     kind="danger--tertiary"
                     renderIcon={TrashCan}
                     onClick={openDeleteAccountModal}
                  >
                     Delete Account
                  </Button> */}
               </div>
            </div>

            <Grid fullWidth style={{ padding: "0px", margin: "0px", gap: "2rem" }}>
               <Column lg={8} md={5} sm={4}>
                  <div className={styles.profile_picture_container}>
                     <div className={styles.profile_picture}>
                        {preview ? (
                           <Image
                              src={preview}
                              alt="Profile Preview"
                              width={150}
                              height={150}
                              className="w-full h-full object-cover"
                              style={{
                                 width: "100%",
                                 height: "100%",
                                 objectFit: "cover",
                                 objectPosition: "top",
                              }}
                           />
                        ) : (
                           <ImageIcon size={32} />
                        )}
                     </div>
                     <p role="button" tabIndex={0} onClick={handleUpload}>
                        Upload Profile Picture
                     </p>
                  </div>

                  <input
                     type="file"
                     accept="image/*"
                     onChange={handleImageChange}
                     style={{ display: "none" }}
                     ref={inputRef}
                  />

                  <Formik
                     onSubmit={handleSubmit}
                     // validationSchema={loginSchema}
                     initialValues={{
                        name,
                        title: "Admin",
                        email: user?.email,
                     }}
                     enableReinitialize
                  >
                     {(props) => {
                        return (
                           <FluidForm
                              onSubmit={props.handleSubmit}
                              className={styles.auth_form_container}
                           >
                              <Stack gap={7}>
                                 <Stack gap={5}>
                                    <TextInput
                                       id="name"
                                       type="name"
                                       name="name"
                                       invalidText={props.errors.name}
                                       labelText="Name"
                                       placeholder="e.g John Doe"
                                       invalid={!!(props.touched && props.errors.name)}
                                       onChange={props.handleChange}
                                       value={props.values.name}
                                       onBlur={props.handleBlur}
                                       size="lg"
                                       style={inputStyles}
                                       readOnly
                                    />
                                    <TextInput
                                       id="title"
                                       type="title"
                                       name="title"
                                       invalidText={props.errors.title}
                                       labelText="Title"
                                       placeholder="e.g Doctor"
                                       invalid={!!(props.touched && props.errors.title)}
                                       onChange={props.handleChange}
                                       value={props.values.title}
                                       onBlur={props.handleBlur}
                                       size="lg"
                                       style={inputStyles}
                                       readOnly
                                    />
                                    <TextInput
                                       id="email"
                                       type="email"
                                       name="email"
                                       invalidText={props.errors.email}
                                       labelText="Email Address"
                                       placeholder="e.g joe@acmecorp.com"
                                       invalid={!!(props.touched && props.errors.email)}
                                       onChange={props.handleChange}
                                       value={props.values.email}
                                       onBlur={props.handleBlur}
                                       size="lg"
                                       style={inputStyles}
                                       readOnly
                                    />
                                 </Stack>

                                 {/* <Button
                                    // disabled={!props.isValid}
                                    style={{ maxWidth: "none", width: "100%" }}
                                    kind="primary"
                                    type="submit"
                                    size="lg"
                                 >
                                    Edit
                                 </Button> */}
                              </Stack>
                           </FluidForm>
                        )
                     }}
                  </Formik>
               </Column>

               {/* <Column lg={11} md={5} sm={4}>
                  <ProductAndRolesHeading />
                  {allProducts?.map((item: Products) => (
                     <ProductAndRoles
                        title={item.productName}
                        details={item.description}
                        logo={"/svg/productLogo.svg"}
                        key={item.id}
                        selected={selectedProducts}
                        setSelected={setSelectedProducts}
                        setRoles={setDropdownSelections}
                        product={item}
                        handleCheckboxChange={() =>
                           handleCheckboxChange(item, setSelectedProducts)
                        }
                        handleDropDown={handleDropDown}
                        name="product"
                     />
                  ))}
               </Column> */}
            </Grid>
         </section>

         <ChangePasswordModal openModal={changePassword} closeModal={closeChangePasswordModal} />
         <DeleteAccountModal openModal={deleteAccount} closeModal={closeDeleteAccountModal} />
      </>
   )
}

export default ProfilePage
