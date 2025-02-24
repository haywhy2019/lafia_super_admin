import * as React from "react"
import { SVGProps } from "react"
const GrowthUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#24A148"
      stroke="#24A148"
      strokeWidth={0.4}
      d="M7.5 2.8h-.2v1.15H9.487L6.75 6.687 5.282 5.219a.575.575 0 0 0-.814 0l-3.86 3.86-.14.14.14.142.53.53.142.142.142-.142 3.453-3.453 1.468 1.468a.575.575 0 0 0 .814 0L10.3 4.763V6.95h1.15V2.8H7.5Z"
    />
  </svg>
)
export default GrowthUp
