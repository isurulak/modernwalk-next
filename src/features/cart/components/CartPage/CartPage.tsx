"use client";

import { Section, Typography } from "@/designSystem/atoms";
import { CartCard } from "@/designSystem/molecules";
import {
  BreadcrumbSection,
  PageTitle,
  OrderSummary,
} from "@/designSystem/organisms";
import { useCartStore } from "@/core/store/cartStore";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Cart", href: "/cart" },
];

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const subtotal = useCartStore((state) => state.subtotal);
  const tax = useCartStore((state) => state.tax);
  const shipping = useCartStore((state) => state.shipping);
  const grandTotal = useCartStore((state) => state.grandTotal);
  return (
    <>
      <BreadcrumbSection items={breadcrumbItems} />

      <Section>
        <PageTitle title="Shopping Cart" />

        {items.length === 0 ? (
          <div className="text-center py-16">
            <Typography variant="body">Your cart is empty</Typography>
          </div>
        ) : (
          <div className="flex gap-6 mt-16">
            {/* Left Column - Cart Items */}
            <div className="flex-1 flex flex-col gap-4">
              {items.map((item) => (
                <CartCard
                  key={`${item.product.id}-${item.size}`}
                  productImage={item.product.image}
                  productName={item.product.title}
                  size={item.size}
                  price={`$${item.product.price.toFixed(2)}`}
                  quantity={item.quantity}
                  onIncrement={() =>
                    updateQuantity(
                      item.product.id,
                      item.size,
                      item.quantity + 1
                    )
                  }
                  onDecrement={() =>
                    updateQuantity(
                      item.product.id,
                      item.size,
                      Math.max(1, item.quantity - 1)
                    )
                  }
                  onRemove={() => removeFromCart(item.product.id, item.size)}
                />
              ))}
            </div>

            {/* Right Column - Order Summary */}
            <div className="w-[486px]">
              <OrderSummary
                subtotal={`$${subtotal.toFixed(2)}`}
                shipping={`$${shipping.toFixed(2)}`}
                tax={`$${tax.toFixed(2)}`}
                taxPercentage="10%"
                grandTotal={`$${grandTotal.toFixed(2)}`}
                onCheckout={() => console.log("Proceed to checkout")}
              />
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
