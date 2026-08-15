export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold">
            Shop<span className="text-blue-500">ly</span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-400">
            Discover quality products made for your everyday lifestyle.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Shop</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li>Products</li>
            <li>Categories</li>
            <li>New Arrivals</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-4 flex gap-4 text-sm text-gray-400">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2026 Shoply. All rights reserved.
      </div>
    </footer>
  );
}
