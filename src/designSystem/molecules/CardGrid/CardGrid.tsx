import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardGridVariants = cva("grid w-full", {
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "sm:grid-cols-2",
      3: "sm:grid-cols-2 lg:grid-cols-3",
      4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      5: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
      6: "sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6",
    },
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
  },
  defaultVariants: {
    columns: 4,
    gap: "md",
  },
})

export interface CardGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardGridVariants> {
  children: React.ReactNode
}

export default function CardGrid({
  className,
  columns,
  gap,
  children,
  ...props
}: CardGridProps) {
  return (
    <div
      className={cn(cardGridVariants({ columns, gap, className }))}
      {...props}
    >
      {children}
    </div>
  )
}
