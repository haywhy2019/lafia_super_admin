import type { Metadata } from "next"

import AppLayout from "@/layouts/AppLayout"

export const metadata: Metadata = {
   title: "LafiaEMR Super Admin",
   description: "",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return <AppLayout>{children}</AppLayout>
}
