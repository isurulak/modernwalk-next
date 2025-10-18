"use client"

import * as React from "react"
import { Typography } from "@/designSystem/atoms"
import { IconButton } from "../IconButton"

export interface QuantitySelectorProps {
  count: number
  onIncrement: () => void
  onDecrement: () => void
  min?: number
  max?: number
  className?: string
}

export default function QuantitySelector({
  count,
  onIncrement,
  onDecrement,
  min = 0,
  max = 99,
  className,
}: QuantitySelectorProps) {
  const isMinDisabled = count <= min
  const isMaxDisabled = count >= max

  return (
    <div
      className={`flex items-center justify-between bg-muted rounded-md p-1 w-[140px] ${className || ""}`}
    >
      <IconButton
        icon="minus"
        variant="primary"
        onClick={onDecrement}
        disabled={isMinDisabled}
      />
      <Typography variant="body-xs">{count}</Typography>
      <IconButton
        icon="plus"
        variant="primary"
        onClick={onIncrement}
        disabled={isMaxDisabled}
      />
    </div>
  )
}
