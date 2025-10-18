import * as React from "react"
import { Typography } from "@/designSystem/atoms"

export interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col">
      <Typography variant="heading-lg">{value}</Typography>
      <Typography variant="body" className="text-muted-foreground">
        {label}
      </Typography>
    </div>
  )
}
