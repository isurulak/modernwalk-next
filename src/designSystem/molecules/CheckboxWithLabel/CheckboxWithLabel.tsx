"use client"

import * as React from "react"
import { Checkbox } from "@/designSystem/atoms/Checkbox"
import { Checkbox as ShadcnCheckbox } from "@/designSystem/primitives/checkbox"
import { Typography } from "@/designSystem/atoms/Typography"

export interface CheckboxWithLabelProps extends React.ComponentPropsWithoutRef<typeof ShadcnCheckbox> {
  label: string
  id: string
}

export default function CheckboxWithLabel({
  label,
  id,
  className,
  ...props
}: CheckboxWithLabelProps) {
  return (
    <div className={`flex items-center space-x-2 ${className || ""}`}>
      <Checkbox id={id} {...props} />
      <label
        htmlFor={id}
        className="cursor-pointer select-none"
      >
        <Typography variant="body-sm">{label}</Typography>
      </label>
    </div>
  )
}
