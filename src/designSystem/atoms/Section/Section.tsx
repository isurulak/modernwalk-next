import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export default function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className="w-full" {...props}>
      <div className={cn("max-w-container mx-auto px-30 pb-32", className)}>
        {children}
      </div>
    </section>
  )
}
