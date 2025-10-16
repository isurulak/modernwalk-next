import * as React from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const imageVariants = cva("", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    fit: {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
      scaleDown: "object-scale-down",
    },
    position: {
      center: "object-center",
      top: "object-top",
      bottom: "object-bottom",
      left: "object-left",
      right: "object-right",
      "left-top": "object-left-top",
      "left-bottom": "object-left-bottom",
      "right-top": "object-right-top",
      "right-bottom": "object-right-bottom",
    },
    aspect: {
      auto: "aspect-auto",
      square: "aspect-square",
      video: "aspect-video",
      product: "aspect-product",
      hero: "aspect-hero",
      categoryLarge: "aspect-category-large",
    },
  },
  defaultVariants: {
    rounded: "none",
    fit: "cover",
    position: "center",
  },
})

export interface ImageProps
  extends Omit<NextImageProps, "className">,
    VariantProps<typeof imageVariants> {
  className?: string
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, rounded, fit, position, aspect, alt, ...props }, ref) => {
    return (
      <NextImage
        ref={ref}
        alt={alt}
        className={cn(imageVariants({ rounded, fit, position, aspect, className }))}
        {...props}
      />
    )
  }
)

Image.displayName = "Image"

export { Image, imageVariants }
