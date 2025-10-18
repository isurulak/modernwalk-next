import * as React from "react"
import { ProductImage, type ProductImageProps } from "../ProductImage"

export interface ImageCardProps extends ProductImageProps {
  className?: string
}

export default function ImageCard({
  src,
  alt,
  aspectRatio,
  className,
}: ImageCardProps) {
  return (
    <div className={`border border-border p-4 rounded-lg ${className || ""}`}>
      <ProductImage src={src} alt={alt} aspectRatio={aspectRatio} />
    </div>
  )
}
