import * as React from "react"
import { Section, Breadcrumb } from "@/designSystem/atoms"

export default function BreadcrumbSection() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Men", href: "/shop/men" },
    { label: "T-shirts" }, // Current page, no href
  ]

  return (
    <Section className="pt-32 pb-16">
      <Breadcrumb items={breadcrumbItems} />
    </Section>
  )
}
