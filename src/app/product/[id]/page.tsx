import { ProductPage } from "@/features/product/components"

export default function Product({ params }: { params: { id: string } }) {
  return <ProductPage productId={parseInt(params.id)} />
}
