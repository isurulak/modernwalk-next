import * as React from "react"
import { Image, Typography, Button, Icon, Link } from "@/designSystem/atoms"

export interface CategoryCardProps {
  imageUrl: string
  alt: string
  title: string
  linkText: string
  linkHref?: string
  onLinkClick?: () => void
  className?: string
}

export default function CategoryCard({
  imageUrl,
  alt,
  title,
  linkText,
  linkHref,
  onLinkClick,
  className,
}: CategoryCardProps) {
  const content = (
    <div className={`relative w-full h-full p-8 overflow-hidden rounded-xl ${className || ""}`}>
      {/* Background Image - Absolute positioning covering entire container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay - Between image and content */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-[#0A0A0A]/20 to-[#0A0A0A]/0" />

      {/* Content Container - Aligned to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="flex flex-col gap-2 items-start">
          <Typography variant="heading-md" className="text-background">
            {title}
          </Typography>
          <Button
            colorVariant="link-light"
            size="link"
            icon={<Icon name="arrowRight" size={16} />}
            iconPosition="right"
            as="span"
          >
            {linkText}
          </Button>
        </div>
      </div>
    </div>
  )

  if (linkHref) {
    return (
      <Link href={linkHref} className="block h-full cursor-pointer transition-transform hover:scale-[1.02]">
        {content}
      </Link>
    )
  }

  if (onLinkClick) {
    return (
      <button onClick={onLinkClick} className="block h-full w-full cursor-pointer transition-transform hover:scale-[1.02]">
        {content}
      </button>
    )
  }

  return content
}
