import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import { ProductActions } from "@/ components/ProductActions";

interface ProductDetailsProps {
  params: Promise<{ productId: string }>;
}
export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { productId } = await params;
  const product = await getProductById(Number(productId));
  if (!product) {
    notFound();
  }
  return (
    <main className="bg-gray-50 px-6 py-16">
      <ProductActions product={product} />
    </main>
  );
}
