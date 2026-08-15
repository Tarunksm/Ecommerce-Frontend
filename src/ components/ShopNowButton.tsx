"use client";
import Link from "next/link";

export function ShopNowButton() {
  const scrollToFeatured = () =>
    document
      .getElementById("featuredProducts")
      ?.scrollIntoView({ behavior: "smooth" });
  return (
    <Link
      onClick={scrollToFeatured}
      href="#featuredProducts"
      className="rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700 cursor-pointer"
    >
      Shop Now
    </Link>
  );
}
