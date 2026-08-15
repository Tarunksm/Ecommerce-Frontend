"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch] = useState("");
  const { cart } = useCart();
  useEffect(() => {
    const flipMount = () => {
      setIsMounted(true);
    };
    flipMount();
  }, []);
  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = () => {
    if (!search.trim()) return;
    router.push(`search?q=${search}`);
    setSearch("");
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-4xl font-bold">
            Shop<span className="text-blue-500">ly</span>
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={
              pathName === "/" ? "text-blue-600 font-bold" : "text-gray-200"
            }
          >
            HOME
          </Link>

          <Link
            href="/products"
            className={
              pathName === "/products"
                ? "text-blue-600 font-bold"
                : "text-gray-200"
            }
          >
            PRODUCTS
          </Link>

          <Link
            href="/orders"
            className={
              pathName === "/orders"
                ? "text-blue-600 font-bold"
                : "text-gray-200"
            }
          >
            ORDERS
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white"
            />
            <button
              onClick={handleSearch}
              className="rounded-lg cursor-pointer hover:bg-blue-700 bg-blue-600 ml-2 active:scale-95 px-4 py-2"
            >
              🔍
            </button>
          </div>

          <div className="relative inline-block">
            <Link
              href="/cart"
              className=" rounded-lg bg-blue-600 px-5 py-2 text-white"
            >
              Cart
              {isMounted && cart.length > 0 && (
                <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
