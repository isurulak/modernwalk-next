"use client"

import { Typography } from "@/designSystem/atoms"
import { CheckboxWithLabel } from "@/designSystem/molecules"

export interface FilterOption {
  id: string
  label: string
  checked?: boolean
}

export interface CategoryFilterProps {
  title: string
  options: FilterOption[]
  onOptionChange?: (id: string, checked: boolean) => void
}

export default function CategoryFilter({
  title,
  options,
  onOptionChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-col gap-6">
      <Typography variant="title">{title}</Typography>
      <div className="flex flex-col gap-[10px]">
        {options.map((option) => (
          <CheckboxWithLabel
            key={option.id}
            id={option.id}
            label={option.label}
            checked={option.checked}
            onCheckedChange={(checked) => {
              if (onOptionChange) {
                onOptionChange(option.id, checked as boolean)
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}
