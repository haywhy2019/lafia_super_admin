import { FluidForm, Modal, PasswordInput } from "@carbon/react"
import { Formik } from "formik"

import styles from "./profile.module.scss"

interface ModalProps {
   openModal: boolean
   closeModal: () => void
}
const ChangePasswordModal = ({ openModal, closeModal }: ModalProps) => {
   return (
      <Modal
         open={openModal}
         onRequestClose={closeModal}
         modalHeading={""}
         primaryButtonText={"Change"}
      >
         <div>
            <p className={styles.modal_heading}>Change Password</p>
            <p className={styles.modal_body}>Provide the details below to change your password.</p>
            <Formik
               onSubmit={() => {}}
               // validationSchema={""}
               initialValues={{ oldPassword: "", password: "", confirmPassword: "" }}
            >
               {(props) => {
                  return (
                     <div>
                        <FluidForm style={{ marginInline: 0 }}>
                           <div className={styles.text_input}>
                              <PasswordInput
                                 id="oldPassword"
                                 labelText="Old Password"
                                 name="oldPassword"
                                 placeholder="Type here..."
                                 invalidText={props.errors.oldPassword}
                                 invalid={!!(props.touched && props.errors.oldPassword)}
                                 onChange={props.handleChange}
                                 value={props.values.oldPassword}
                                 onBlur={props.handleBlur}
                                 size="lg"
                                 style={{ borderBottom: "none", backgroundColor: "#FAFAFA" }}
                                 data-modal-primary-focus
                              />
                           </div>

                           <div className={styles.text_input}>
                              <PasswordInput
                                 id="password"
                                 name="password"
                                 labelText="New Password"
                                 placeholder="Type here..."
                                 invalidText={props.errors.password}
                                 invalid={!!(props.touched && props.errors.password)}
                                 onChange={props.handleChange}
                                 value={props.values.password}
                                 onBlur={props.handleBlur}
                                 size="lg"
                                 style={{ borderBottom: "none", backgroundColor: "#FAFAFA" }}
                                 className={styles.text_input}
                              />
                           </div>
                           <div className={styles.text_input}>
                              <PasswordInput
                                 id="three"
                                 labelText="Confirm New Password"
                                 placeholder="Type here..."
                                 name="confirmPassword"
                                 invalidText={props.errors.confirmPassword}
                                 invalid={!!(props.touched && props.errors.confirmPassword)}
                                 onChange={props.handleChange}
                                 value={props.values.confirmPassword}
                                 onBlur={props.handleBlur}
                                 size="lg"
                                 style={{ borderBottom: "none", backgroundColor: "#FAFAFA" }}
                                 className={styles.text_input}
                              />
                           </div>
                        </FluidForm>
                     </div>
                  )
               }}
            </Formik>
         </div>
      </Modal>
   )
}

export default ChangePasswordModal
