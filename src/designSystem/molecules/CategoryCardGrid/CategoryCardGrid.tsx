import * as React from "react"
import { CategoryCard } from "@/designSystem/molecules"

export interface CategoryCardData {
  imageUrl: string
  alt: string
  title: string
  linkText: string
  linkHref?: string
  onLinkClick?: () => void
}

export interface CategoryCardGridProps {
  cards: [CategoryCardData, CategoryCardData, CategoryCardData]
  className?: string
}

export default function CategoryCardGrid({ cards, className }: CategoryCardGridProps) {
  const [leftCard, topRightCard, bottomRightCard] = cards

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className || ""}`}>
      {/* Left card - Full height on desktop */}
      <div className="md:row-span-2 aspect-[588/536]">
        <CategoryCard {...leftCard} />
      </div>

      {/* Top right card */}
      <div>
        <CategoryCard {...topRightCard} />
      </div>

      {/* Bottom right card */}
      <div>
        <CategoryCard {...bottomRightCard} />
      </div>
    </div>
  )
}
