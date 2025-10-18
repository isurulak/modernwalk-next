import * as React from "react"
import { Typography } from "@/designSystem/atoms"
import { Card } from "@/designSystem/primitives/card"
import { IconButton, QuantitySelector } from "@/designSystem/molecules"
import { ProductImage } from "../ProductImage"

export interface CartCardProps {
  productImage: string
  productName: string
  size: string
  price: string
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
  onRemove: () => void
  className?: string
}

export default function CartCard({
  productImage,
  productName,
  size,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
  className,
}: CartCardProps) {
  return (
    <Card className={`relative p-6 group ${className || ""}`}>
      {/* Close/Remove Button */}
      <IconButton
        icon="x"
        variant="dark"
        onClick={onRemove}
        className="absolute -top-5 -left-5 opacity-0 group-hover:opacity-100 transition-opacity"
      />

      {/* Content Wrapper */}
      <div className="flex justify-between">
        {/* Column 1: Product Image */}
        <div className="w-[180px] h-[164px]">
          <ProductImage
            src={productImage}
            alt={productName}
            aspectRatio="180/164"
          />
        </div>

        {/* Column 2: Product Info */}
        <div className="flex flex-col gap-3">
          <Typography variant="title">{productName}</Typography>
          <div className="flex">
            <Typography variant="body-xs" className="text-muted-foreground">
              Size: {size}
            </Typography>
          </div>
          <Typography variant="body">{price}</Typography>
        </div>

        {/* Column 3: Quantity Selector */}
        <div className="flex items-center">
          <QuantitySelector
            count={quantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </div>
      </div>
    </Card>
  )
}
