import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("m-0 leading-none", {
  variants: {
    variant: {
      display: "font-bold text-4xl",
      "heading-lg": "font-bold text-3xl",
      "heading-md": "font-bold text-2xl",
      "heading-sm": "font-semibold text-b",
      title: "font-semibold text-b",
      body: "font-normal text-b",
      "body-sm": "font-normal text-s",
      "body-xs": "font-normal text-es",
      "button-sm": "font-medium text-es",
      "button-md": "font-medium text-s",
      price: "font-normal text-3xl",
      label: "font-normal text-es uppercase tracking-wide",
      meta: "font-normal text-es text-muted-foreground",
      subtitle: "font-bold text-3xl",
      count: "font-bold text-3xl",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

// Map variants → semantic tags
const variantToTag: Record<string, keyof JSX.IntrinsicElements> = {
  display: "h1",
  "heading-lg": "h2",
  "heading-md": "h3",
  "heading-sm": "h4",
  title: "h5",
  subtitle: "h6",
  count: "span",
  body: "p",
  "body-sm": "p",
  "body-xs": "p",
  "button-sm": "span",
  "button-md": "span",
  price: "span",
  label: "label",
  meta: "span",
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: keyof JSX.IntrinsicElements
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, as, className, ...props }, ref) => {
    const Component = (as || variantToTag[variant || "body"] || "p") as any

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      />
    )
  }
)

Typography.displayName = "Typography"

export { Typography, typographyVariants }
