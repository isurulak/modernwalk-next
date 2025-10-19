"use client"

import { useQuery } from "@tanstack/react-query"
import { productService } from "@/core/services/productService"

export function useProductDetail(productId: number) {
  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productService.getProductById(productId),
    enabled: !!productId, // Only fetch if productId exists
  })

  return {
    product,
    isLoading,
    error,
  }
}
