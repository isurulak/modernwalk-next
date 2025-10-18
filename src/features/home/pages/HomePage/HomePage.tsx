import { HeroSection } from "../../components/HeroSection"
import { CategorySection } from "../../components/CategorySection"
import { FlashSalesSection } from "../../components/FlashSalesSection"
import { MostPopularSection } from "../../components/MostPopularSection"
import { LatestProductsSection } from "../../components/LatestProductsSection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FlashSalesSection />
      <MostPopularSection />
      <LatestProductsSection />
    </main>
  )
}
