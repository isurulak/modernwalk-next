import * as React from "react"
import { Star, ArrowRight, Search, Mail, Handbag, User, Facebook, Twitter, Instagram, Minus, Plus, X, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const icons = {
  star: Star,
  arrowRight: ArrowRight,
  search: Search,
  mail: Mail,
  shoppingCart: Handbag,
  user: User,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  minus: Minus,
  plus: Plus,
  x: X,
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
        className={cn(className)}
        {...props}
      />
    )
  }
)

Icon.displayName = "Icon"

export { Icon, icons }
