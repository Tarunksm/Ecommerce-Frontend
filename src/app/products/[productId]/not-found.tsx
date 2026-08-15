import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
        <p className="mt-4 text-gray-500">
          Sorry, the product you are looking for does not exist.
        </p>
        <Link href="/products">
          <button className="mt-8 rounded-lg bg-gray-900 px-6 py-3 text-white hover:bg-gray-800 cursor-pointer">
            Back to Products
          </button>
        </Link>
      </div>
    </main>
  );
}
