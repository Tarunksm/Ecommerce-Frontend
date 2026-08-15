"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, increaseCartQuantity, cart, decreaseCartQuantity } =
    useCart();

  const cartItem = cart.find((item) => item.product.id === product.id);
  return (
    <Link href={`/products/${product.id}`}>
      <div className="overflow-hidden flex flex-col h-full rounded-xl border border-gray-200 bg-white">
        <div className=" h-64 relative bg-gray-100">
          <Image
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            src={product.image}
            alt={product.title.slice(0, 20)}
            className="object-cover"
            fill
          />
        </div>
        <div className="p-5">
          <p className="text-sm mt-3 text-gray-500">{product.category}</p>
          <h3 className="mt-2 text-lg h-17 font-semibold text-gray-900">
            {product.title.slice(0, 40)}...
          </h3>
          <p className="mt-3 text-xl font-bold text-gray-900">
            ${product.price}
          </p>
          {cartItem ? (
            <div className="flex mt-5 items-center justify-center gap-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  decreaseCartQuantity(product.id);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-md border cursor-pointer hover:bg-gray-300"
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  increaseCartQuantity(product.id);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-md border cursor-pointer hover:bg-gray-300"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product);
              }}
              className="mt-5 w-full rounded-lg bg-gray-900 py-3 text-sm font-medium text-white hover:bg-gray-700 cursor-pointer active:scale-95"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
