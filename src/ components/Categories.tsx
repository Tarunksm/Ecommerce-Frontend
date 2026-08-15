export function Categories() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Electronics</h3>
            <p className="mt-2 text-gray-500">Latest gadgets and devices</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Clothing</h3>
            <p className="mt-2 text-gray-500"> Modern styles for everyone</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Accessories</h3>
            <p className="mt-2 text-gray-500">Complete your everyday look</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">Home</h3>
            <p className="mt-2 text-gray-500"> Make your space better</p>
          </div>
        </div>
      </div>
    </section>
  );
}
