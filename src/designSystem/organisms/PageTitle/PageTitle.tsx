import * as React from "react"
import { Section, Typography, Select, type SelectOption } from "@/designSystem/atoms"

export interface PageTitleProps {
  title: string
  sortOptions?: SelectOption[]
  sortValue?: string
  onSortChange?: (value: string) => void
  className?: string
}

export default function PageTitle({
  title,
  sortOptions,
  sortValue,
  onSortChange,
  className,
}: PageTitleProps) {
  return (
    // <Section className={`pt-0 pb-16 ${className || ""}`}>
      <div className="flex pb-16 justify-between items-center border-b border-border">
        <Typography variant="heading-lg">{title}</Typography>
        {sortOptions && sortOptions.length > 0 && (
          <Select
            options={sortOptions}
            value={sortValue}
            onValueChange={onSortChange}
            placeholder="Sort by"
          />
        )}
      </div>
    // </Section>
  )
}
