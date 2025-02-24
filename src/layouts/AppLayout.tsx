"use client"

import { useWindowSize } from "@/hooks/useWindowSize"
import { initializeUser } from "@/redux/features/auth.slice"
import { useAppDispatch } from "@/redux/hooks"
import {
   Content,
   Header,
   HeaderContainer,
   HeaderGlobalAction,
   HeaderGlobalBar,
   HeaderMenuButton,
   HeaderName,
   SideNav,
   SideNavItems,
   SideNavLink,
   SkipToContent,
} from "@carbon/react"
import { Notification } from "@carbon/react/icons"

import React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import Logo from "@/components/Logo"
import SideNavFooter from "@/components/navigation/SideNavFooter"

import { navLinks } from "@/helpers/constants"

import styles from "./appLayout.module.scss"

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
   const { isDesktop } = useWindowSize()
   const pathname = usePathname()
   const dispatch = useAppDispatch()

   React.useEffect(() => {
      dispatch(initializeUser())
   }, [dispatch])

   return (
      <>
         <HeaderContainer
            render={({
               isSideNavExpanded,
               onClickSideNavExpand,
            }: {
               isSideNavExpanded: boolean
               onClickSideNavExpand: () => void
            }) => (
               <>
                  <Header aria-label="Carbon Tutorial">
                     <SkipToContent />
                     <HeaderMenuButton
                        aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
                        aria-expanded={isSideNavExpanded}
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                     />

                     <Link href="/" passHref legacyBehavior>
                        <HeaderName prefix="">
                           <Logo />
                        </HeaderName>
                     </Link>

                     <SideNav
                        aria-label="Side navigation"
                        expanded={isSideNavExpanded}
                        onSideNavBlur={onClickSideNavExpand}
                        href="#main-content"
                        style={{ borderRight: "1px solid #EBEBEB" }}
                     >
                        <SideNavItems isSideNavExpanded={isSideNavExpanded}>
                           {navLinks?.map(({ name, href, icon }) => (
                              <Link key={name} href={href} passHref legacyBehavior>
                                 <SideNavLink
                                    renderIcon={icon}
                                    large
                                    isActive={pathname.includes(href)}
                                    className={styles.side_nav_text}
                                    onClick={onClickSideNavExpand}
                                 >
                                    {name}
                                 </SideNavLink>
                              </Link>
                           ))}
                        </SideNavItems>

                        <SideNavFooter />
                     </SideNav>

                     <HeaderGlobalBar style={{ gap: "0.5rem", paddingRight: "1rem" }}>
                        <HeaderGlobalAction
                           aria-label="Notifications"
                           tooltipAlignment="center"
                           className="action-icons"
                        >
                           <Notification size={20} />
                        </HeaderGlobalAction>
                     </HeaderGlobalBar>
                  </Header>
               </>
            )}
         />

         {isDesktop && (
            <SideNav
               aria-label="Side navigation"
               expanded={isDesktop}
               // onSideNavBlur={onClickSideNavExpand}
               href="#main-content"
               style={{ borderRight: "1px solid #EBEBEB" }}
            >
               <SideNavItems>
                  {navLinks.map(({ name, href, icon }) => (
                     <Link key={name} href={href} passHref legacyBehavior>
                        <SideNavLink
                           renderIcon={icon}
                           large
                           isActive={pathname.includes(href)}
                           className={styles.side_nav_text}
                           style={{
                              backgroundColor: pathname.includes(href) ? "#E1EBFF" : "transparent",
                              color: pathname.includes(href) ? "#0F62FE" : "black",
                           }}
                        >
                           {name}
                        </SideNavLink>
                     </Link>
                  ))}
               </SideNavItems>

               <SideNavFooter />
            </SideNav>
         )}

         <Content> {children}</Content>
      </>
   )
}

export default AppLayout
