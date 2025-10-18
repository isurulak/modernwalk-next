import { Section } from "@/designSystem/atoms"
import { CategoryCardGrid, SectionTitle } from "@/designSystem/molecules"

export default function CategorySection() {
  const productImage = "https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-mock-up-cosmetic-products-for-skin-and-hair-care-with-plant-png-image_12702096.png"

  return (
    <Section className="pt-32">
      <SectionTitle title="Shop by Category" linkText="Browse All Categories" className="mb-8" />
      <CategoryCardGrid
        cards={[
          {
            imageUrl: productImage,
            alt: "Skincare Category",
            title: "Skincare",
            linkText: "Shop Now",
          },
          {
            imageUrl: productImage,
            alt: "Haircare Category",
            title: "Haircare",
            linkText: "Shop Now",
          },
          {
            imageUrl: productImage,
            alt: "Makeup Category",
            title: "Makeup",
            linkText: "Shop Now",
          },
        ]}
      />
    </Section>
  )
}
