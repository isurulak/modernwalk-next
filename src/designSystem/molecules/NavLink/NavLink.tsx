import * as React from "react"
import { Link, Typography } from "@/designSystem/atoms"
import { cn } from "@/lib/utils"

export interface NavLinkProps extends React.ComponentProps<typeof Link> {
  isActive?: boolean
  children: React.ReactNode
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ isActive = false, children, className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={cn(
          "transition-colors hover:underline",
          isActive ? "font-semibold" : "",
          className
        )}
        {...props}
      >
        <Typography variant="body" as="span">
          {children}
        </Typography>
      </Link>
    )
  }
)

NavLink.displayName = "NavLink"

export { NavLink }
