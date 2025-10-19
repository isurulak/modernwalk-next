"use client"

import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import { productService } from "@/core/services/productService"

export function useShopProducts() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")

  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products", category],
    queryFn: () => {
      if (category) {
        return productService.getProductsByCategory(category)
      }
      return productService.getProducts()
    },
  })

  return {
    products: products || [],
    isLoading,
    error,
    selectedCategory: category,
  }
}
