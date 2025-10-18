import { Section } from "@/designSystem/atoms"
import { CardGrid, ProductCard } from "@/designSystem/molecules"
import { BreadcrumbSection, PageTitle } from "@/designSystem/organisms"
import { CategoryFilter } from "../CategoryFilter"
import { ShopLayout } from "../ShopLayout"

const sortOptions = [
  { value: "most-popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
]

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
]

const categoryOptions = [
  { id: "new-arrivals", label: "New Arrivals", checked: true },
  { id: "men", label: "Men", checked: false },
  { id: "women", label: "Women", checked: false },
  { id: "unisex", label: "Unisex", checked: false },
  { id: "accessories", label: "Accessories", checked: false },
]

// Mock product data
const mockProducts = Array.from({ length: 20 }, (_, i) => ({
  id: `product-${i + 1}`,
  title: `Product ${i + 1}`,
  price: 99 + i * 10,
  rating: 4.5,
  imageSrc: "/product_image.png",
  imageAlt: `Product ${i + 1}`,
}))

export default function ShopPage() {
  return (
    <>
      <BreadcrumbSection items={breadcrumbItems} />

      <Section>
        <PageTitle
          title="Shop"
          sortOptions={sortOptions}
          sortValue="most-popular"
        />

        <ShopLayout
          filters={
            <div className="flex flex-col gap-6">
              <CategoryFilter title="Category" options={categoryOptions} />
            </div>
          }
          products={
            <CardGrid columns={3}>
              {mockProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                />
              ))}
            </CardGrid>
          }
        />
      </Section>
    </>
  )
}
