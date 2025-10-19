import * as React from "react"
import { Link, Typography } from "@/designSystem/atoms"
import { NavLink, IconButton } from "@/designSystem/molecules"

export interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`w-full bg-muted px-16 py-16 ${className || ""}`}>
      <div className="mx-auto max-w-[1200px] flex flex-col gap-16">
        {/* Top Container */}
        <div className="flex justify-between">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <Link href="/">
              <Typography variant="heading-lg" as="span">
                MW.
              </Typography>
            </Link>

            {/* Description */}
            <Typography variant="body-xs" className="text-muted-foreground max-w-[248px]">
              We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
            </Typography>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <IconButton
                icon="facebook"
                variant="primary"
                href="https://facebook.com"
              />
              <IconButton
                icon="twitter"
                variant="primary"
                href="https://twitter.com"
              />
              <IconButton
                icon="instagram"
                variant="primary"
                href="https://instagram.com"
              />
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="flex gap-32">
            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <Typography variant="title">Company</Typography>
              <div className="flex flex-col gap-4">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/features">Features</NavLink>
                <NavLink href="/works">Works</NavLink>
                <NavLink href="/career">Career</NavLink>
              </div>
            </div>

            {/* Help Column */}
            <div className="flex flex-col gap-4">
              <Typography variant="title">Help</Typography>
              <div className="flex flex-col gap-4">
                <NavLink href="/customer-support">Customer Support</NavLink>
                <NavLink href="/delivery-details">Delivery Details</NavLink>
                <NavLink href="/terms-and-conditions">Terms & Conditions</NavLink>
                <NavLink href="/privacy-policy">Privacy Policy</NavLink>
              </div>
            </div>

            {/* FAQ Column */}
            <div className="flex flex-col gap-4">
              <Typography variant="title">FAQ</Typography>
              <div className="flex flex-col gap-4">
                <NavLink href="/account">Account</NavLink>
                <NavLink href="/manage-deliveries">Manage Deliveries</NavLink>
                <NavLink href="/orders">Orders</NavLink>
                <NavLink href="/payments">Payments</NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Container - Copyright */}
        <div className="pt-16 border-t border-border">
          <Typography variant="body-xs" className="text-muted-foreground">
            © 2025 Modern Walk. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
}
