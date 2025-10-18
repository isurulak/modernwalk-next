import * as React from "react"
import { Star, ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const icons = {
  star: Star,
  arrowRight: ArrowRight,
} as const

export type IconName = keyof typeof icons

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName
  size?: number
  color?: string
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 16, color, className, ...props }, ref) => {
    const LucideIcon = icons[name]

    return (
      <LucideIcon
        ref={ref}
        size={size}
        color={color}
        fill={color}
        className={cn(className)}
        {...props}
      />
    )
  }
)

Icon.displayName = "Icon"

export { Icon, icons }
