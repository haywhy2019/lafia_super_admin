import * as React from "react"
import { SVGProps } from "react"
const GrowthDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 9.2h-.2V8.05H9.487L6.75 5.313 5.282 6.781a.575.575 0 0 1-.814 0l-3.86-3.86-.14-.14.14-.142.53-.53.142-.142.142.142 3.453 3.453 1.468-1.468a.575.575 0 0 1 .814 0L10.3 7.237V5.05h1.15V9.2H7.5Z"
    />
  </svg>
)
export default GrowthDown
