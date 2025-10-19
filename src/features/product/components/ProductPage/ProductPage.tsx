"use client"

import { useState } from "react"
import { Button, Section, Typography } from "@/designSystem/atoms"
import {
  QuantitySelector,
  Rating,
  SectionTitle,
  SizeSelector,
} from "@/designSystem/molecules"
import { BreadcrumbSection, ProductGallery } from "@/designSystem/organisms"
import { useProductDetail } from "../../hooks/useProductDetail"
import { useCartStore } from "@/core/store/cartStore"

const sizes = ["Small", "Medium", "Large", "X-Large"]

export interface ProductPageProps {
  productId: number
}

export default function ProductPage({ productId }: ProductPageProps) {
  const { product, isLoading } = useProductDetail(productId)
  const addToCart = useCartStore((state) => state.addToCart)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [sizeError, setSizeError] = useState(false)

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true)
      return
    }
    if (!product) return

    addToCart(product, selectedSize, quantity)
    setSelectedSize(null)
    setQuantity(1)
  }

  const handleSizeChange = (size: string) => {
    setSelectedSize(size)
    setSizeError(false)
  }

  if (isLoading) {
    return (
      <Section>
        <div className="text-center py-8">Loading product...</div>
      </Section>
    )
  }

  if (!product) {
    return (
      <Section>
        <div className="text-center py-8">Product not found</div>
      </Section>
    )
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: product.title, href: `/product/${productId}` },
  ]

  const galleryImages = {
    thumbnails: [
      { src: product.image, alt: product.title },
      { src: product.image, alt: product.title },
      { src: product.image, alt: product.title },
    ] as [
      { src: string; alt: string },
      { src: string; alt: string },
      { src: string; alt: string }
    ],
    mainImage: { src: product.image, alt: product.title },
  }
  return (
    <>
      <BreadcrumbSection items={breadcrumbItems} />

      <Section>
        <div className="flex gap-6">
          {/* Left column - Gallery */}
          <div className="flex-1">
            <ProductGallery
              thumbnails={galleryImages.thumbnails}
              mainImage={galleryImages.mainImage}
            />
          </div>

          {/* Right column - Product Details */}
          <div className="flex-1 flex flex-col justify-center items-start">
            {/* Product Info */}
            <div className="flex flex-col gap-4">
              <Typography variant="heading-lg">{product.title}</Typography>
              <Rating rating={product.rating.rate} />
              <Typography variant="price">${product.price.toFixed(2)}</Typography>
              <Typography variant="body-xs">
                {product.description}
              </Typography>
            </div>

            {/* Size Selector */}
            <div className="py-8 flex flex-col gap-6">
              <div>
                <Typography variant="body-xs">Select Size</Typography>
                {sizeError && (
                  <Typography variant="body-xs" className="text-red-500 mt-1">
                    Please select a size before adding to cart
                  </Typography>
                )}
              </div>
              <SizeSelector
                sizes={sizes}
                selectedSize={selectedSize || undefined}
                onSizeChange={handleSizeChange}
              />
            </div>

            {/* Quantity and Add to Cart */}
            <div className="py-8 flex gap-3">
              <QuantitySelector
                count={quantity}
                onIncrement={() => setQuantity(q => q + 1)}
                onDecrement={() => setQuantity(q => Math.max(1, q - 1))}
                min={1}
              />
              <Button colorVariant="primary" size="large" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Description Section */}
      <Section>
        <SectionTitle title="Description" />
        <div className="mt-8 max-w-[792px]">
          <Typography variant="body-medium" className="text-muted-foreground font-medium">
            {product.description}
          </Typography>
        </div>
      </Section>
    </>
  )
}
