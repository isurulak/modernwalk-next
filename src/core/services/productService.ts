import { apiClient } from "@/lib/apiClient"
import type { Product, Category } from "@/core/types/product"

export const productService = {
  getCategories: async (): Promise<Category[]> => {
    return apiClient<Category[]>("/products/categories")
  },

  getProducts: async (limit?: number): Promise<Product[]> => {
    const endpoint = limit ? `/products?limit=${limit}` : "/products"
    return apiClient<Product[]>(endpoint)
  },

  getProductsByCategory: async (category: string, limit?: number): Promise<Product[]> => {
    const endpoint = limit
      ? `/products/category/${category}?limit=${limit}`
      : `/products/category/${category}`
    return apiClient<Product[]>(endpoint)
  },
}
