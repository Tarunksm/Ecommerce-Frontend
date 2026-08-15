"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "@/ components/ProductCard";
import { getProducts } from "@/lib/products";
import type { Product } from "@/types/product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <main className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Store
          </p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            All products
          </h1>
          <p className="mt-3 max-w-2xl text-gray-500">
            Browse our complete collection of products and find something you
            love.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white">
              All
            </button>
            <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              Electronics
            </button>
            <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              Clothing
            </button>
            <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              Accessories
            </button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
