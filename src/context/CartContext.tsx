"use client";

import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import type { Product } from "@/types/product";
import type { CartItem } from "@/types/cartItem";
import type { Order } from "@/types/order";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseCartQuantity: (productId: number) => void;
  decreaseCartQuantity: (productId: number) => void;
  placeOrder: () => void;
  orders: Order[];
}

export const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadCart = () => {
      const savedCart = localStorage.getItem("cart");
      const savedOrders = localStorage.getItem("orders");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
      setIsLoaded(true);
    };
    loadCart();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders, isLoaded]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (cartItem) => cartItem.product.id === product.id,
      );
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.product.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((cart) => cart.product.id !== productId));
  };

  const increaseCartQuantity = (productId: number) => {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.product.id === productId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
  };

  const decreaseCartQuantity = (productId: number) => {
    setCart((prev) =>
      prev
        .map((cartItem) =>
          cartItem.product.id === productId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    );
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    const total = cart.reduce(
      (acc, cartItem) => acc + cartItem.product.price * cartItem.quantity,
      0,
    );
    const newOrder: Order = {
      id: crypto.randomUUID(),
      items: cart,
      total: total,
      createdAt: Date.now(),
    };
    setOrders((prev) => [...prev, newOrder]);
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        orders,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
