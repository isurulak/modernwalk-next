"use client"

import { Section } from "@/designSystem/atoms"
import { CardGrid, ProductCard, SectionTitle } from "@/designSystem/molecules"
import { useFlashSales } from "../../hooks/useFlashSales"

export default function FlashSalesSection() {
  const { products, isLoading } = useFlashSales(8)

  return (
    <Section>
      <SectionTitle title="Flash Sales" linkText="Browse All Products" linkHref="/shop" className="mb-8"/>
      {isLoading ? (
        <div className="text-center py-8">Loading flash sales...</div>
      ) : (
        <CardGrid columns={4} gap="lg">
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
      )}
    </Section>
  )
}
