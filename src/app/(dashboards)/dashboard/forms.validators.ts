import * as Yup from "yup"

export const inviteSchema = Yup.object({
   firstname: Yup.string().required("First Name is required"),
   lastname: Yup.string().required("Last Name is required"),
   title: Yup.string().required("Title is required"),
   email: Yup.string().email("Please enter a valid email address").required("Email is required"),
})
