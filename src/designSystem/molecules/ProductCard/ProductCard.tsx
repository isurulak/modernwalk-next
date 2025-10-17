import * as React from "react"
import { Card } from "@/designSystem/primitives/card"
import { Image, Typography, Button } from "@/designSystem/atoms"

export interface ProductCardProps {
  imageUrl: string
  alt?: string
}

export default function ProductCard({ imageUrl, alt = "Product image" }: ProductCardProps) {
  return (
    <Card className="h-full">
      {/* Image Container with 250:224 aspect ratio */}
      <div className="p-4">
        <div className="relative w-full aspect-[250/224] overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            fit="cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col space-y-2">
        <Typography variant="title" className="line-clamp-2">
          Premium Wireless Headphones
        </Typography>
        <Typography variant="body-sm" className="text-muted-foreground line-clamp-2">
          High-quality audio with active noise cancellation and 30-hour battery life
        </Typography>
        <Typography variant="body-sm" className="text-primary">
          $299.99
        </Typography>
        <Button colorVariant="primary" size="medium" width="fullWidth">
          + Add to Cart
        </Button>
      </div>
    </Card>
  )
}
