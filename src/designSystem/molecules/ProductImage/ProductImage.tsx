import * as React from "react"
import { Image } from "@/designSystem/atoms"

export interface ProductImageProps {
  src: string
  alt: string
  aspectRatio: string
  className?: string
}

export default function ProductImage({
  src,
  alt,
  aspectRatio,
  className,
}: ProductImageProps) {
  return (
    <div
      className={`relative ${className || ""}`}
      style={{ aspectRatio }}
    >
      <Image src={src} alt={alt} fill className="object-cover rounded-lg" />
    </div>
  )
}
