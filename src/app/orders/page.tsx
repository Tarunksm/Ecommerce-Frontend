"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function OrdersPage() {
  const { orders } = useCart();

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>

      {orders.length === 0 ? (
        <p className="mt-6 text-gray-500">No orders placed yet</p>
      ) : (
        <div className="mt-8 space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              {/* Order Header */}
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Order #{order.id.slice(0, 4).toUpperCase()}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                  Order Placed
                </span>
              </div>

              {/* Products */}
              <div className="mt-6 space-y-5">
                {order.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-5">
                      <Image
                        src={item.product.image}
                        alt={item.product.title}
                        width={80}
                        height={80}
                        sizes="80px"
                        className="h-20 w-20 rounded-xl object-cover"
                      />

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.product.title.slice(0, 30)}...
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>

                        <p className="mt-1 text-sm text-gray-600">
                          ${item.product.price} each
                        </p>
                      </div>
                    </div>

                    <p className="font-bold text-gray-900">
                      ${item.product.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-6 flex justify-between border-t pt-5">
                <span className="font-medium text-gray-600">Total Amount</span>

                <span className="text-xl font-bold text-gray-900">
                  ${order.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
