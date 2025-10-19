import { Section } from "@/designSystem/atoms"
import { CategoryCardGrid, SectionTitle } from "@/designSystem/molecules"

const categoryCards = [
  {
    imageUrl: "/new_arrivals.png",
    alt: "New Arrivals",
    title: "New Arrivals",
    linkText: "Shop Now",
    linkHref: "/shop",
  },
  {
    imageUrl: "/women's_clothing.png",
    alt: "Women's Clothing",
    title: "Women's Clothing",
    linkText: "Shop Now",
    linkHref: "/shop?category=women's clothing",
  },
  {
    imageUrl: "/men's_clothing.png",
    alt: "Men's Clothing",
    title: "Men's Clothing",
    linkText: "Shop Now",
    linkHref: "/shop?category=men's clothing",
  },
] as const

export default function CategorySection() {
  return (
    <Section className="pt-32">
      <SectionTitle title="Shop by Category" linkText="Browse All Categories" linkHref="/shop" className="mb-8" />
      <CategoryCardGrid cards={categoryCards} />
    </Section>
  )
}
