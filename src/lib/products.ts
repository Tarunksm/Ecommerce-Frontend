import type { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      // run at request-time and avoid stale cache during dev/CI
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("getProducts: non-ok response", response.status);
      return [];
    }
    return (await response.json()) as Product[];
  } catch (err) {
    console.error("getProducts failed:", err);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("getProductById: non-ok response", response.status);
      return null;
    }
    return (await response.json()) as Product;
  } catch (err) {
    console.error("getProductById failed:", err);
    return null;
  }
}
