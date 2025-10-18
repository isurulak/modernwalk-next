import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Button as ShadcnButton } from "@/designSystem/primitives/button"
import { Typography } from "@/designSystem/atoms/Typography"
import { cn } from "@/lib/utils"

const buttonAtomVariants = cva("", {
  variants: {
    colorVariant: {
      primary: "!text-primary-foreground",
      secondary: "bg-secondary !text-primary hover:bg-secondary/90",
      link: "bg-transparent !text-primary",
    },
    size: {
      small: "h-5 px-3 py-1.5",
      medium: "h-7 px-8 py-1.5",
      large: "h-9 px-8 py-1.5",
      link: "h-6 px-0.5 py-1.5",
    },
    width: {
      fitContent: "w-auto",
      fullWidth: "w-full",
    },
  },
  defaultVariants: {
    colorVariant: "primary",
    size: "medium",
    width: "fitContent",
  },
})

export interface ButtonProps
  extends Omit<React.ComponentProps<typeof ShadcnButton>, "variant" | "size">,
    VariantProps<typeof buttonAtomVariants> {
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, colorVariant, size, width, icon, iconPosition = "left", children, ...props }, ref) => {
    return (
      <ShadcnButton
        ref={ref}
        variant={colorVariant === "primary" ? "default" : undefined}
        className={cn(buttonAtomVariants({ colorVariant, size, width }), "gap-1.5", className)}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="flex items-center">{icon}</span>
        )}
        <Typography variant="button-md" as="span">
          {children}
        </Typography>
        {icon && iconPosition === "right" && (
          <span className="flex items-center">{icon}</span>
        )}
      </ShadcnButton>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonAtomVariants }
