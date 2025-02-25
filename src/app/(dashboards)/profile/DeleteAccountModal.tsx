import { Modal } from "@carbon/react"

import styles from "./profile.module.scss"

interface ModalProps {
   openModal: boolean
   closeModal: () => void
}
const DeleteAccountModal = ({ openModal, closeModal }: ModalProps) => {
   return (
      <Modal
         open={openModal}
         onRequestClose={closeModal}
         modalHeading={""}
         secondaryButtonText={"No, Do not"}
         primaryButtonText={"Yes, Delete Account"}
         danger
      >
         <div>
            <p className={styles.modal_heading_center}>Delete Account</p>
            <p className={styles.modal_body_center}>
               Are you sure you want to delete your account? This is a permanent action
            </p>
         </div>
      </Modal>
   )
}

export default DeleteAccountModal
