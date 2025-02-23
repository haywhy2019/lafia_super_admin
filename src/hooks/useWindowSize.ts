import { useEffect, useState } from "react"

interface WindowSize {
   width: number
   height: number
   isMobile: boolean
   isTablet: boolean
   isDesktop: boolean
}

interface BreakpointConfig {
   mobile: number
   tablet: number
   desktop: number
}

const defaultBreakpoints: BreakpointConfig = {
   mobile: 640, // Carbon's small breakpoint
   tablet: 1056, // Carbon's medium breakpoint
   desktop: 1584, // Carbon's large breakpoint
}

export const useWindowSize = (customBreakpoints?: Partial<BreakpointConfig>): WindowSize => {
   const breakpoints = { ...defaultBreakpoints, ...customBreakpoints }

   // Initialize with undefined to handle SSR
   const [windowSize, setWindowSize] = useState<WindowSize>({
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
   })

   useEffect(() => {
      // Skip if window is not defined (SSR)
      if (typeof window === "undefined") return

      const handleResize = () => {
         const width = window.innerWidth
         const height = window.innerHeight

         setWindowSize({
            width,
            height,
            isMobile: width < breakpoints.mobile,
            isTablet: width >= breakpoints.mobile && width < breakpoints.tablet,
            isDesktop: width >= breakpoints.tablet,
         })
      }

      // Add event listener
      window.addEventListener("resize", handleResize)

      // Call handler right away to update initial size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize)
   }, [breakpoints.mobile, breakpoints.tablet, breakpoints.desktop])

   return windowSize
}
