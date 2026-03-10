"use client";
import Link from "next/link";
import WishlistCard from "../components/cardWishlist";
import { useWishlist } from "../hooks/useWishlist";

export default function WishlistScreen() {
  const { items, count, isLoading } = useWishlist();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Link
                className="hover:text-primary-600 transition-colors"
                href="/"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Wishlist</span>
            </nav>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                  <svg
                    data-prefix="fas"
                    data-icon="heart"
                    className="svg-inline--fa fa-heart text-xl text-red-500"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    My Wishlist
                  </h1>
                  <p className="text-gray-500 text-sm">{count} item saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Status</div>
              <div className="col-span-2 text-center">Actions</div>
            </div>
            <div className="divide-y divide-gray-100">
              {items.map((item, index) => (
                <WishlistCard key={item._id ?? index} item={item} />
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <Link
              className="text-gray-500 hover:text-primary-600 text-sm font-medium transition-colors"
              href="/products"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
