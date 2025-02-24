import { redirect } from "next/navigation"

import { appRoutes } from "@/helpers/routes"

export default function Home() {
   redirect(appRoutes.dashboard)
}
