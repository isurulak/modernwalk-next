"use client";

import { Button, Section } from "@/designSystem/atoms";
import { CartCard } from "@/designSystem/molecules";
import {
  BreadcrumbSection,
  PageTitle,
  OrderSummary,
} from "@/designSystem/organisms";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Cart", href: "/cart" },
];

const productImage =
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736";

const cartItems = [
  {
    id: 1,
    productImage,
    productName: "Men's Cotton Jacket",
    size: "Medium",
    price: "$95.00",
    quantity: 1,
  },
  {
    id: 2,
    productImage,
    productName: "Urban Slim-Fit Shirt",
    size: "Small",
    price: "$85.00",
    quantity: 2,
  },
  {
    id: 3,
    productImage,
    productName: "Classic Denim Jeans",
    size: "Large",
    price: "$75.00",
    quantity: 1,
  },
];

export default function CartPage() {
  return (
    <>
      <BreadcrumbSection items={breadcrumbItems} />

      <Section>
        <PageTitle title="Shopping Cart" />

        {/* Two Column Layout */}
        <div className="flex gap-6 mt-16">
          {/* Left Column - Cart Items */}
          <div className="flex-1 flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartCard
                key={item.id}
                productImage={item.productImage}
                productName={item.productName}
                size={item.size}
                price={item.price}
                quantity={item.quantity}
                onIncrement={() => {}}
                onDecrement={() => {}}
                onRemove={() => {}}
              />
            ))}
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-[486px]">
            <OrderSummary
              subtotal="$255.00"
              shipping="$5.00"
              tax="$26.00"
              taxPercentage="10%"
              grandTotal="$286.00"
              onCheckout={() => {}}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
