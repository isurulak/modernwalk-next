import * as React from "react"
import { Typography, Button } from "@/designSystem/atoms"

export interface OrderSummaryProps {
  subtotal: string
  shipping: string
  tax: string
  taxPercentage?: string
  grandTotal: string
  onCheckout?: () => void
  className?: string
}

export default function OrderSummary({
  subtotal,
  shipping,
  tax,
  taxPercentage = "10%",
  grandTotal,
  onCheckout,
  className,
}: OrderSummaryProps) {
  return (
    <div className={`rounded-xl p-8 bg-muted flex flex-col gap-9 ${className || ""}`}>
      {/* Title */}
      <Typography variant="heading-md">Order summary</Typography>

      {/* Summary Items */}
      <div>
        {/* Subtotal */}
        <div className="py-4 flex justify-between border-b border-border">
          <Typography variant="body" className="text-muted-foreground">
            Subtotal
          </Typography>
          <Typography variant="body">{subtotal}</Typography>
        </div>

        {/* Shipping */}
        <div className="py-4 flex justify-between border-b border-border">
          <Typography variant="body" className="text-muted-foreground">
            Shipping
          </Typography>
          <Typography variant="body">{shipping}</Typography>
        </div>

        {/* Tax */}
        <div className="py-4 flex justify-between border-b border-border">
          <Typography variant="body" className="text-muted-foreground">
            Tax ({taxPercentage})
          </Typography>
          <Typography variant="body">{tax}</Typography>
        </div>

        {/* Grand Total */}
        <div className="py-4 flex justify-between">
          <Typography variant="title">Grand Total</Typography>
          <Typography variant="title">{grandTotal}</Typography>
        </div>
      </div>

      {/* Checkout Button */}
      <Button colorVariant="primary" size="large" onClick={onCheckout}>
        Go to Checkout
      </Button>
    </div>
  )
}
