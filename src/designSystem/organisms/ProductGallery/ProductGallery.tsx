import * as React from "react"
import { ProductImage } from "@/designSystem/molecules/ProductImage"
import { ImageCard } from "@/designSystem/molecules/ImageCard"

export interface GalleryImage {
  src: string
  alt: string
}

export interface ProductGalleryProps {
  thumbnails: [GalleryImage, GalleryImage, GalleryImage]
  mainImage: GalleryImage
  className?: string
}

export default function ProductGallery({
  thumbnails,
  mainImage,
  className,
}: ProductGalleryProps) {
  return (
    <div className={`flex gap-6 ${className || ""}`}>
      {/* Left column - Thumbnails */}
      <div className="w-[180px] flex flex-col gap-2">
        {thumbnails.map((thumbnail, index) => (
          <ImageCard
            key={index}
            src={thumbnail.src}
            alt={thumbnail.alt}
            aspectRatio="1/1"
          />
        ))}
      </div>

      {/* Right column - Main image */}
      <div className="flex-1">
        <ProductImage
          src={mainImage.src}
          alt={mainImage.alt}
          aspectRatio="486/556"
        />
      </div>
    </div>
  )
}
