import * as React from "react"
import { Icon, Typography } from "@/designSystem/atoms"

export interface RatingProps {
  rating: number
  maxRating?: number
  className?: string
}

export default function Rating({ rating, maxRating = 5, className }: RatingProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <Icon name="star" size={16} color="#FFC633" fill="#FFC633" />
      <Typography variant="body" className="text-muted-foreground">
        {rating}/{maxRating}
      </Typography>
    </div>
  )
}
