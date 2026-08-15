"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    placeOrder,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="mt-6 text-gray-500">Your cart is empty</p>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-5 lg:col-span-2">
            {cart.map((cartItem) => (
              <div
                key={cartItem.product.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={cartItem.product.image}
                    alt={cartItem.product.title}
                    width={112}
                    height={112}
                    sizes="112px"
                    className="h-28 w-28 rounded-lg object-cover"
                  />

                  <div>
                    <h2 className="text-lg font-semibold">
                      {cartItem.product.title.slice(0, 20)}...
                    </h2>

                    <p className="mt-2 text-gray-600">
                      ${cartItem.product.price}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() =>
                          decreaseCartQuantity(cartItem.product.id)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-md border cursor-pointer active:scale-95 hover:bg-gray-200"
                      >
                        -
                      </button>

                      <span className="font-medium">{cartItem.quantity}</span>

                      <button
                        onClick={() =>
                          increaseCartQuantity(cartItem.product.id)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-md border cursor-pointer active:scale-95 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-3 font-semibold">
                      Subtotal: ${cartItem.product.price * cartItem.quantity}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(cartItem.product.id)}
                  className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium cursor-pointer active:scale-95 text-white hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold">Order Summary</h2>

            <div className="mt-5 flex justify-between">
              <span className="text-gray-600">Total</span>

              <span className="text-xl font-bold">${total}</span>
            </div>

            <Link
              href="/orders"
              onClick={() => placeOrder()}
              className="mt-7 block w-full rounded-lg bg-gray-900 py-3 text-center font-medium text-white cursor-pointer active:scale-95 hover:bg-gray-700"
            >
              Place Order
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
