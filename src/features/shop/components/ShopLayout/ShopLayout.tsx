import * as React from "react"

export interface ShopLayoutProps {
  filters: React.ReactNode
  products: React.ReactNode
}

export default function ShopLayout({ filters, products }: ShopLayoutProps) {
  return (
    <div className="flex gap-6 mt-16">
      {/* Left column - Filters */}
      <div className="w-[282px] flex-shrink-0">{filters}</div>

      {/* Right column - Products */}
      <div className="flex-1">{products}</div>
    </div>
  )
}
