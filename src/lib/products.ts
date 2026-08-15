import type { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products: Product[] = await response.json();
  return products;
}

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const product: Product = await response.json();
  return product;
}
