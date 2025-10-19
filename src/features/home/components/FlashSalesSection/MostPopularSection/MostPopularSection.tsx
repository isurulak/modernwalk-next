import { Section } from "@/designSystem/atoms"
import { CardGrid, ProductCard, SectionTitle } from "@/designSystem/molecules"

export default function MostPopularSection() {
  const productImage = "https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-mock-up-cosmetic-products-for-skin-and-hair-care-with-plant-png-image_12702096.png"

  return (
    <Section>
      {/* @TODO check if below mb-8 pattern has any better alternates */}
      <SectionTitle title="Most Popular" linkText="Browse All Products" className="mb-8"/>
      <CardGrid columns={4} gap="lg">
        <ProductCard imageUrl={productImage} alt="Product 1" />
        <ProductCard imageUrl={productImage} alt="Product 2" />
        <ProductCard imageUrl={productImage} alt="Product 3" />
        <ProductCard imageUrl={productImage} alt="Product 4" />
        <ProductCard imageUrl={productImage} alt="Product 5" />
        <ProductCard imageUrl={productImage} alt="Product 6" />
        <ProductCard imageUrl={productImage} alt="Product 7" />
        <ProductCard imageUrl={productImage} alt="Product 8" />
      </CardGrid>
    </Section>
  )
}
