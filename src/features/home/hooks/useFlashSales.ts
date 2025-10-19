import { useQuery } from "@tanstack/react-query"
import { productService } from "@/core/services/productService"
import type { Product } from "@/core/types/product"

export function useFlashSales(limit: number = 8) {
  const { data: menProducts, isLoading: menLoading } = useQuery({
    queryKey: ["products", "men's clothing", limit],
    queryFn: () => productService.getProductsByCategory("men's clothing", Math.ceil(limit / 2)),
  })

  const { data: womenProducts, isLoading: womenLoading } = useQuery({
    queryKey: ["products", "women's clothing", limit],
    queryFn: () => productService.getProductsByCategory("women's clothing", Math.ceil(limit / 2)),
  })

  // Alternate: Men → Women → Men → Women
  const alternateProducts = (): Product[] => {
    if (!menProducts || !womenProducts) return []

    const result: Product[] = []
    const maxLength = Math.max(menProducts.length, womenProducts.length)

    for (let i = 0; i < maxLength && result.length < limit; i++) {
      if (menProducts[i]) result.push(menProducts[i])
      if (womenProducts[i] && result.length < limit) result.push(womenProducts[i])
    }

    return result
  }

  return {
    products: alternateProducts(),
    isLoading: menLoading || womenLoading,
  }
}
