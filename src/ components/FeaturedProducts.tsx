import { ProductCard } from "./ProductCard";
import { getProducts } from "@/lib/products";

export async function FeaturedProducts() {
  const products = await getProducts();
  return (
    <section id="featuredProducts" className="bg-gray-50 px-6 py-16">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Collection
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="mt-3 text-gray-500">
            Explore some of our most popular products.
          </p>
        </div>
        <button className="hidden rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-white md:block cursor-pointer">
          View All
        </button>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
