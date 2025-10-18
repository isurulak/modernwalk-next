"use client"

import * as React from "react"
import { Button } from "@/designSystem/atoms"

export interface SizeSelectorProps {
  sizes: string[]
  selectedSize?: string
  onSizeChange?: (size: string) => void
  className?: string
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
  className,
}: SizeSelectorProps) {
  return (
    <div className={`flex gap-3 ${className || ""}`}>
      {sizes.map((size) => {
        const isSelected = size === selectedSize
        return (
          <Button
            key={size}
            colorVariant={isSelected ? "primary" : "secondary"}
            size="small"
            onClick={() => onSizeChange?.(size)}
          >
            {size}
          </Button>
        )
      })}
    </div>
  )
}
