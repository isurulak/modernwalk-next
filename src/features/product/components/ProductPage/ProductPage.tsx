"use client"

import { Button, Section, Typography } from "@/designSystem/atoms"
import {
  QuantitySelector,
  Rating,
  SectionTitle,
  SizeSelector,
} from "@/designSystem/molecules"
import { BreadcrumbSection, ProductGallery } from "@/designSystem/organisms"

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Product", href: "/product" },
]

const productImage = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736"

const galleryImages = {
  thumbnails: [
    { src: productImage, alt: "Product thumbnail 1" },
    { src: productImage, alt: "Product thumbnail 2" },
    { src: productImage, alt: "Product thumbnail 3" },
  ] as [
    { src: string; alt: string },
    { src: string; alt: string },
    { src: string; alt: string }
  ],
  mainImage: { src: productImage, alt: "Main product image" },
}

const sizes = ["Small", "Medium", "Large", "X-Large"]

export interface ProductPageProps {
  description?: string
}

export default function ProductPage({
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. /nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}: ProductPageProps = {}) {
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
              <Typography variant="heading-lg">Product Title</Typography>
              <Rating rating={4.5} />
              <Typography variant="price">$99.00</Typography>
              <Typography variant="body-xs">
                This is a detailed product description that explains the key
                features and benefits of this amazing product.
              </Typography>
            </div>

            {/* Size Selector */}
            <div className="py-8 flex flex-col gap-6">
              <Typography variant="body-xs">Select Size</Typography>
              <SizeSelector sizes={sizes} selectedSize="Medium" />
            </div>

            {/* Quantity and Add to Cart */}
            <div className="py-8 flex gap-3">
              <QuantitySelector
                count={1}
                onIncrement={() => {}}
                onDecrement={() => {}}
              />
              <Button colorVariant="primary" size="large">
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
            {description}
          </Typography>
        </div>
      </Section>
    </>
  )
}
