import * as React from "react"
import { Typography, Button, Icon } from "@/designSystem/atoms"

export interface SectionTitleProps {
  title: string
  linkText?: string
  linkHref?: string
  onLinkClick?: () => void
  className?: string
}

export default function SectionTitle({
  title,
  linkText,
  linkHref,
  onLinkClick,
  className,
}: SectionTitleProps) {
  return (
    <div className={`flex justify-between items-center ${className || ""}`}>
      <Typography variant="subtitle">{title}</Typography>
      {linkText && (
        <Button
          colorVariant="link-dark"
          size="link"
          icon={<Icon name="arrowRight" size={16} />}
          iconPosition="right"
          onClick={onLinkClick}
          {...(linkHref && { as: "a", href: linkHref })}
        >
          {linkText}
        </Button>
      )}
    </div>
  )
}
