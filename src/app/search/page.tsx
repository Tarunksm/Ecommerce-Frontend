import type { Product } from "@/types/product";
import { ProductCard } from "@/ components/ProductCard";

interface SearchPageProps {
  searchParams: { q?: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes((q || "").toLowerCase()),
  );
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold">Search results for: {q}</h1>
      {filteredProducts.length === 0 ? (
        <p className="mt-6 text-gray-500">No products found</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
