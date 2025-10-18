import * as React from "react"
import { Input as ShadcnInput } from "@/designSystem/primitives/input"
import { Icon } from "@/designSystem/atoms/Icon"
import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<typeof ShadcnInput> {
  type?: "text" | "email" | "search" | "password" | "number" | "tel" | "url"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    const showIcon = type === "search" || type === "email"
    const iconName = type === "search" ? "search" : type === "email" ? "mail" : undefined

    return (
      <div className="flex items-center gap-2 px-3 py-[10px] border border-border rounded-lg bg-background">
        {showIcon && iconName && (
          <Icon name={iconName} size={20} className="text-muted-foreground flex-shrink-0" />
        )}
        <ShadcnInput
          ref={ref}
          type={type}
          className={cn(
            "border-0 shadow-none p-0 h-auto text-s placeholder:text-muted-foreground",
            "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
