import * as React from "react"
import { Breadcrumb, type BreadcrumbItemType } from "@/designSystem/atoms"

export interface BreadcrumbSectionProps {
  items: BreadcrumbItemType[]
  className?: string
}

export default function BreadcrumbSection({
  items,
  className,
}: BreadcrumbSectionProps) {
  return (
    <div className={`w-full px-16 pb-16 pt-8 ${className || ""}`}>
      <div className="max-w-[1200px] mx-auto">
        <Breadcrumb items={items} />
      </div>
    </div>
  )
}
