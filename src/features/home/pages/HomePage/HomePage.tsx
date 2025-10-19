import { HeroSection } from "../../components/HeroSection"
import { CategorySection } from "../../components/CategorySection"
import { FlashSalesSection } from "../../components/FlashSalesSection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FlashSalesSection />
    </main>
  )
}
