import Link from "next/link";
import { ShopNowButton } from "./ShopNowButton";

export function Hero() {
  return (
    <section className="bg-gray-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            New collection
          </p>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Shop smarter.
            <br />
            Live better.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Discover products you love, carefully selected for quality, style,
            and everyday life.
          </p>
          <div className="mt-8 flex gap-4">
            <ShopNowButton />
            <Link
              href="/products"
              className="rounded-lg border border-gray-700 px-6 py-3 font-medium hover:bg-gray-800 cursor-pointer"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
