"use client";

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
} from "@carbon/react";
import { Notification, Switcher } from "@carbon/react/icons";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import SideNavFooter from "../../components/navigation/SideNavFooter";

import { useWindowSize } from "../../hooks/useWindowSize";
import SwitcherMenu from "./SwitcherMenu";
import styles from "./appLayout.module.scss";
import Logo from "@/components/Logo";
import { navLinks } from "@/helpers/constants";

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const { isDesktop, isMobile } = useWindowSize();
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prevState: boolean) => !prevState);
  };

  return (
    <>
      {/* displays on desktop */}
      <div style={isMobile ? { display: "none" } : {}}>
        <SwitcherMenu menuOpen={menuOpen} />
      </div>
      {/* // */}
      <HeaderContainer
        render={({
          isSideNavExpanded,
          onClickSideNavExpand,
        }: {
          isSideNavExpanded: boolean;
          onClickSideNavExpand: () => void;
        }) => (
          <>
            <Header aria-label="Carbon Tutorial">
              {/* displays on mobile */}
              <div style={isDesktop ? { display: "none" } : {}}>
                <SwitcherMenu menuOpen={menuOpen} />
              </div>
              {/* // */}
              <SkipToContent />
              <HeaderMenuButton
                aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
                aria-expanded={isSideNavExpanded}
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderGlobalAction
                aria-label="App Switcher"
                tooltipAlignment="end"
                onClick={toggleMenu}
              >
                <Switcher size={20} />
              </HeaderGlobalAction>

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
                    backgroundColor: pathname.includes(href)
                      ? "#E1EBFF"
                      : "transparent",
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
  );
};

export default AppLayout;
