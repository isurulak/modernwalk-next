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
    <section className={cn("w-full px-16 pb-32", className)} {...props}>
      <div className="max-w-[1200px] mx-auto">
        {children}
      </div>
    </section>
  )
}
