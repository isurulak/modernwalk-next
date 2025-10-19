import { Section } from "@/designSystem/atoms"
import { CategoryCardGrid, SectionTitle } from "@/designSystem/molecules"

const categoryCards = [
  {
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
    alt: "New Arrivals",
    title: "New Arrivals",
    linkText: "Shop Now",
    linkHref: "/shop",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500",
    alt: "Women's Clothing",
    title: "Women's Clothing",
    linkText: "Shop Now",
    linkHref: "/shop?category=women's clothing",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500",
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
