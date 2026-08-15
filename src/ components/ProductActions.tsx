"use client";

import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const {
    addToCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    placeOrder,
    cart,
  } = useCart();
  const cartItem = cart.find((item) => item.product.id === product.id);

  return (
    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
      <div className="flex relative h-125 items-center justify-center rounded-2xl bg-gray-100">
        <Image
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          src={product.image}
          alt={product.title}
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm mt-2 font-semibold uppercase tracking-widest text-blue-600">
          {product.category}
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          {product.title}
        </h1>
        <p className="mt-5 text-3xl font-bold text-gray-900">
          ${product.price}
        </p>
        <p className="mt-6 max-w-xl leading-7 text-gray-500">
          {product.description}
        </p>
        <div className="mt-8 flex gap-4">
          {cartItem?.quantity ? (
            <div className="flex items-center gap-4 rounded-lg border border-gray-300 px-4 py-3">
              <button
                onClick={() => {
                  decreaseCartQuantity(product.id);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-md border cursor-pointer hover:bg-gray-300"
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={() => {
                  increaseCartQuantity(product.id);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-md border cursor-pointer hover:bg-gray-300"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="rounded-lg bg-gray-900 px-8 py-3 font-medium text-white active:scale-95 hover:bg-gray-800 cursor-pointer"
            >
              Add to Cart
            </button>
          )}
          <Link
            href="/orders"
            onClick={() => {
              addToCart(product);
              placeOrder();
            }}
            className="rounded-lg border border-gray-300 bg-white px-8 py-3 font-bold text-gray-700 hover:bg-gray-100 active:scale-95 cursor-pointer"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
