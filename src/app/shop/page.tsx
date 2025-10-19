import { Suspense } from "react"
import { ShopPage } from "@/features/shop/components"

export default function Shop() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopPage />
    </Suspense>
  )
}
