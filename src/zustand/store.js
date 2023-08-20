import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  addToCart: (product) =>
    set((state) => ({
      products: [...state.products, { ...product, quantity: 1 }],
    })),
  increaseQuantity: (productId) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    })),
  decreaseQuantity: (productId) =>
    set((state) => ({
      products: state.products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0),
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),

  getCartTotal: () =>
    state.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ),
}));

export default useStore;
