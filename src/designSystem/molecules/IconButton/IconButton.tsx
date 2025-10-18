import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Icon, type IconName, Link } from "@/designSystem/atoms"
import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "relative flex items-center justify-center transition-colors",
  {
    variants: {
      variant: {
        primary: "w-10 h-10 rounded-lg bg-background text-primary hover:bg-muted",
        ghost: "w-10 h-10 rounded-lg bg-transparent text-primary hover:bg-muted",
        dark: "w-8 h-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/80",
      },
    },
    defaultVariants: {
      variant: "ghost",
    },
  }
)

export interface IconButtonProps
  extends VariantProps<typeof iconButtonVariants>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: IconName
  badgeCount?: number
  href?: string
  className?: string
}

const IconButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(
  ({ icon, variant, badgeCount, href, className, onClick, ...props }, ref) => {
    const iconSize = variant === "primary" ? 14 : variant === "dark" ? 16 : 24
    const classes = cn(iconButtonVariants({ variant }), className)

    const content = (
      <>
        <Icon name={icon} size={iconSize} />
        {badgeCount !== undefined && badgeCount > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-primary text-primary-foreground text-es font-medium rounded-full">
            {badgeCount > 99 ? "99+" : badgeCount}
          </span>
        )}
      </>
    )

    if (href) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
        >
          {content}
        </Link>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    )
  }
)

IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants }
