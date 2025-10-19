import * as React from "react";
import Link from "next/link";
import { Card } from "@/designSystem/primitives/card";
import { Image, Typography, Button } from "@/designSystem/atoms";
import { Rating } from "@/designSystem/molecules";

export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  imageSrc: string;
  imageAlt?: string;
  description?: string;
}

export default function ProductCard({
  id,
  title,
  price,
  rating,
  imageSrc,
  imageAlt = "Product image",
  description,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="block h-full">
      <Card className="h-full cursor-pointer transition-transform hover:scale-[1.02]">
      {/* Image Container with 250:224 aspect ratio */}
      <div className="p-4">
        <div className="relative w-full aspect-[250/224] overflow-hidden rounded-lg">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              fit="cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col space-y-2">
        <Typography variant="title" className="line-clamp-2">
          {title}
        </Typography>
        <div className="flex justify-between items-center">
          <Typography variant="body-sm" className="text-primary">
            ${price.toFixed(2)}
          </Typography>
          <Rating rating={rating} />
        </div>
        {description && (
          <Typography
            variant="body-xs"
            className="text-muted-foreground line-clamp-2"
          >
            {description}
          </Typography>
        )}

        <Button colorVariant="secondary" size="medium" width="fullWidth">
          + Add to Cart
        </Button>
      </div>
    </Card>
    </Link>
  );
}
