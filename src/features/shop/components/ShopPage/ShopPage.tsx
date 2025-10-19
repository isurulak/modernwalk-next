"use client"

import { useState, useMemo } from "react"
import { Section } from "@/designSystem/atoms"
import { CardGrid, ProductCard } from "@/designSystem/molecules"
import { BreadcrumbSection, PageTitle } from "@/designSystem/organisms"
import { CategoryFilter } from "../CategoryFilter"
import { ShopLayout } from "../ShopLayout"
import { useShopProducts } from "../../hooks/useShopProducts"
import type { Product } from "@/core/types/product"

const sortOptions = [
  { value: "most-popular", label: "Most Popular" },
  { value: "best-rating", label: "Best Rating" },
  { value: "recent", label: "Recent" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
]

const categoryOptions = [
  { id: "new-arrivals", label: "New Arrivals", checked: true },
  { id: "men", label: "Men", checked: false },
  { id: "women", label: "Women", checked: false },
  { id: "unisex", label: "Unisex", checked: false },
  { id: "accessories", label: "Accessories", checked: false },
]

const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sorted = [...products]

  switch (sortBy) {
    case "most-popular":
      return sorted.sort((a, b) => b.rating.count - a.rating.count)
    case "best-rating":
      return sorted.sort((a, b) => b.rating.rate - a.rating.rate)
    case "recent":
      return sorted.sort((a, b) => b.id - a.id)
    case "price-low-high":
      return sorted.sort((a, b) => a.price - b.price)
    case "price-high-low":
      return sorted.sort((a, b) => b.price - a.price)
    default:
      return sorted
  }
}

export default function ShopPage() {
  const { products, isLoading } = useShopProducts()
  const [sortValue, setSortValue] = useState("most-popular")

  const sortedProducts = useMemo(
    () => sortProducts(products, sortValue),
    [products, sortValue]
  )

  const handleSortChange = (value: string) => {
    setSortValue(value)
  }

  return (
    <>
      <BreadcrumbSection items={breadcrumbItems} />

      <Section>
        <PageTitle
          title="Shop"
          sortOptions={sortOptions}
          sortValue={sortValue}
          onSortChange={handleSortChange}
        />

        <ShopLayout
          filters={
            <div className="flex flex-col gap-6">
              <CategoryFilter title="Category" options={categoryOptions} />
            </div>
          }
          products={
            isLoading ? (
              <div className="text-center py-8">Loading products...</div>
            ) : sortedProducts.length === 0 ? (
              <div className="text-center py-8">No products found.</div>
            ) : (
              <CardGrid columns={3}>
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    rating={product.rating.rate}
                    imageSrc={product.image}
                    imageAlt={product.title}
                    description={product.description}
                  />
                ))}
              </CardGrid>
            )
          }
        />
      </Section>
    </>
  )
}
