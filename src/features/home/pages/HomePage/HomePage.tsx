import { HeroSection } from "../../components/HeroSection"
import { CategorySection } from "../../components/CategorySection"
import { FlashSalesSection } from "../../components/FlashSalesSection"
import { LatestProductsSection } from "../../components/LatestProductsSection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FlashSalesSection />
      <LatestProductsSection />
    </main>
  )
}
