import * as React from "react"
import NextLink from "next/link"
import { cn } from "@/lib/utils"

export interface LinkProps extends React.ComponentProps<typeof NextLink> {
  className?: string
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <NextLink ref={ref} className={cn(className)} {...props}>
        {children}
      </NextLink>
    )
  }
)

Link.displayName = "Link"

export { Link }
