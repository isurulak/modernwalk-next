import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { Product } from "@/core/types/product"

export interface CartItem {
  product: Product
  size: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  cartCount: number
  subtotal: number
  tax: number
  shipping: number
  grandTotal: number
  addToCart: (product: Product, size: string, quantity: number) => void
  removeFromCart: (productId: number, size: string) => void
  updateQuantity: (productId: number, size: string, quantity: number) => void
  clearCart: () => void
}

const calculateDerivedState = (items: CartItem[]) => {
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )
  const tax = subtotal * 0.1 // 10% tax
  const shipping = items.length > 0 ? 5 : 0 // $5 flat shipping
  const grandTotal = subtotal + tax + shipping
  const cartCount = items.reduce((total, item) => total + item.quantity, 0)

  return { subtotal, tax, shipping, grandTotal, cartCount }
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      cartCount: 0,
      subtotal: 0,
      tax: 0,
      shipping: 0,
      grandTotal: 0,

      addToCart: (product, size, quantity) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.product.id === product.id && item.size === size
          )

          let updatedItems: CartItem[]
          if (existingItemIndex > -1) {
            updatedItems = [...state.items]
            updatedItems[existingItemIndex].quantity += quantity
          } else {
            updatedItems = [...state.items, { product, size, quantity }]
          }

          return { items: updatedItems, ...calculateDerivedState(updatedItems) }
        })
      },

      removeFromCart: (productId, size) => {
        set((state) => {
          const updatedItems = state.items.filter(
            (item) => !(item.product.id === productId && item.size === size)
          )
          return { items: updatedItems, ...calculateDerivedState(updatedItems) }
        })
      },

      updateQuantity: (productId, size, quantity) => {
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.product.id === productId && item.size === size
              ? { ...item, quantity }
              : item
          )
          return { items: updatedItems, ...calculateDerivedState(updatedItems) }
        })
      },

      clearCart: () => set({ items: [], cartCount: 0, subtotal: 0, tax: 0, shipping: 0, grandTotal: 0 }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const derived = calculateDerivedState(state.items)
          state.cartCount = derived.cartCount
          state.subtotal = derived.subtotal
          state.tax = derived.tax
          state.shipping = derived.shipping
          state.grandTotal = derived.grandTotal
        }
      },
    }
  )
)
