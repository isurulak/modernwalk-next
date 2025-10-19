"use client"

import { Section } from "@/designSystem/atoms"
import { CardGrid, ProductCard } from "@/designSystem/molecules"
import { BreadcrumbSection, PageTitle } from "@/designSystem/organisms"
import { CategoryFilter } from "../CategoryFilter"
import { ShopLayout } from "../ShopLayout"
import { useShopProducts } from "../../hooks/useShopProducts"

const sortOptions = [
  { value: "most-popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
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

export default function ShopPage() {
  const { products, isLoading } = useShopProducts()

  return (
    <>
      <BreadcrumbSection items={breadcrumbItems} />

      <Section>
        <PageTitle
          title="Shop"
          sortOptions={sortOptions}
          sortValue="most-popular"
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
            ) : products.length === 0 ? (
              <div className="text-center py-8">No products found.</div>
            ) : (
              <CardGrid columns={3}>
                {products.map((product) => (
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
