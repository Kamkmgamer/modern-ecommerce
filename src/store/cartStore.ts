// src/store/cartStore.ts
import { create } from 'zustand';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type CartItem = Product & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  // You can add more actions like clearCart, updateQuantity, etc.
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        // If item exists, just increase quantity
        const updatedItems = state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { items: updatedItems };
      } else {
        // Otherwise, add new item to cart
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
}));
