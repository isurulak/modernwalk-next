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
  addToCart: (product: Product, size: string, quantity: number) => void
  removeFromCart: (productId: number, size: string) => void
  updateQuantity: (productId: number, size: string, quantity: number) => void
  clearCart: () => void
  getCartCount: () => number
  getSubtotal: () => number
  getTax: () => number
  getShipping: () => number
  getGrandTotal: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product, size, quantity) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.product.id === product.id && item.size === size
          )

          if (existingItemIndex > -1) {
            const updatedItems = [...state.items]
            updatedItems[existingItemIndex].quantity += quantity
            return { items: updatedItems }
          }

          return { items: [...state.items, { product, size, quantity }] }
        })
      },

      removeFromCart: (productId, size) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.product.id === productId && item.size === size)
          ),
        }))
      },

      updateQuantity: (productId, size, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId && item.size === size
              ? { ...item, quantity }
              : item
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      getCartCount: () => {
        const state = get()
        return state.items.reduce((total, item) => total + item.quantity, 0)
      },

      getSubtotal: () => {
        const state = get()
        return state.items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      },

      getTax: () => {
        return get().getSubtotal() * 0.1 // 10% tax
      },

      getShipping: () => {
        const state = get()
        return state.items.length > 0 ? 5 : 0 // $5 flat shipping
      },

      getGrandTotal: () => {
        const state = get()
        return state.getSubtotal() + state.getTax() + state.getShipping()
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
