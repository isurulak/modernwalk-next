"use client"

import * as React from "react"
import { Checkbox as ShadcnCheckbox } from "@/designSystem/primitives/checkbox"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof ShadcnCheckbox>,
  React.ComponentPropsWithoutRef<typeof ShadcnCheckbox>
>(({ className, ...props }, ref) => {
  return (
    <ShadcnCheckbox
      ref={ref}
      className={cn("rounded-[2px]", className)}
      {...props}
    />
  )
})

Checkbox.displayName = "Checkbox"

export { Checkbox }
