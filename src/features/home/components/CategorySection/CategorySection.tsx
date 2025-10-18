import { Section } from "@/designSystem/atoms"
import { CategoryCardGrid, SectionTitle } from "@/designSystem/molecules"

export default function CategorySection() {
  const categoryImage = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736"

  return (
    <Section className="pt-32">
      <SectionTitle title="Shop by Category" linkText="Browse All Categories" className="mb-8" />
      <CategoryCardGrid
        cards={[
          {
            imageUrl: categoryImage,
            alt: "Skincare Category",
            title: "Skincare",
            linkText: "Shop Now",
          },
          {
            imageUrl: categoryImage,
            alt: "Haircare Category",
            title: "Haircare",
            linkText: "Shop Now",
          },
          {
            imageUrl: categoryImage,
            alt: "Makeup Category",
            title: "Makeup",
            linkText: "Shop Now",
          },
        ]}
      />
    </Section>
  )
}
