import * as Yup from "yup"

export const inviteSchema = Yup.object({
   name: Yup.string().required("Name is required"),
   title: Yup.string().required("Title is required"),
   email: Yup.string().email("Please enter a valid email address").required("Email is required"),
   product: Yup.string().required("Product is required"),
   role: Yup.string().required("Role is required"),
})
