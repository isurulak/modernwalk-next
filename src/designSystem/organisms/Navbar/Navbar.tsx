"use client"

import * as React from "react"
import { Link, Typography, Input } from "@/designSystem/atoms"
import { NavLink, IconButton } from "@/designSystem/molecules"
import { useCartStore } from "@/core/store/cartStore"

export interface NavbarProps {
  className?: string
}

export default function Navbar({ className }: NavbarProps) {
  const [mounted, setMounted] = React.useState(false)
  const cartCount = useCartStore((state) => state.cartCount)

  React.useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <nav className={`w-full px-16 py-8 border-b border-border ${className || ""}`}>
      <div className="mx-auto max-w-[1200px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Typography variant="heading-lg" as="span">
            MW.
          </Typography>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/on-sale">On Sale</NavLink>
          <NavLink href="/new-arrivals">New Arrivals</NavLink>
          <NavLink href="/brands">Brands</NavLink>
        </div>

        {/* Search Bar */}
        <Input
          type="search"
          placeholder="Search for products..."
          className="w-[374px]"
        />

        {/* Icon Buttons */}
        <div className="flex items-center gap-8">
          <IconButton
            icon="shoppingCart"
            variant="ghost"
            badgeCount={mounted ? cartCount : undefined}
            href="/cart"
          />
          <IconButton icon="user" variant="ghost" href="/account" />
        </div>
      </div>
    </nav>
  )
}
