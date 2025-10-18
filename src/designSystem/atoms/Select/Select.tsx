"use client"

import * as React from "react"
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/designSystem/primitives/select"

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  className?: string
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ options, value, onValueChange, placeholder = "Select...", className }, ref) => {
    return (
      <ShadcnSelect value={value} onValueChange={onValueChange}>
        <SelectTrigger
          ref={ref}
          className={`p-4 text-s font-medium text-foreground rounded-md gap-[10px] ${className || ""}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>
    )
  }
)

Select.displayName = "Select"

export { Select }
