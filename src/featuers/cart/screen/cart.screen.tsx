"use client";
import Link from "next/link";
import CartCard from "../components/CartCard";
import ClearButton from "../components/ui/ClearButton";
import { useCart } from "../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

export default function CartScreen() {
  const { items, numOfCartItems, totalCartPrice, isLoading, shipping } =
    useCart();

  if (isLoading && items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <>
      {numOfCartItems === 0 ? (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                <svg
                  data-prefix="fas"
                  data-icon="box-open"
                  className="svg-inline--fa fa-box-open text-5xl text-gray-300"
                  role="img"
                  viewBox="0 0 640 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Looks like you haven&apos;t added anything to your cart yet.
              <br />
              Start exploring our products!
            </p>
            <Link
              className="inline-flex items-center gap-2 bg-linear-to-r from-primary-600 to-primary-700 text-white py-3.5 px-8 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-600/20 active:scale-[0.98]"
              href="/"
            >
              Start Shopping
              <svg
                data-prefix="fas"
                data-icon="arrow-right"
                className="svg-inline--fa fa-arrow-right text-sm"
                role="img"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </Link>
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-400 mb-4">Popular Categories</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link
                  className="px-4 py-2 bg-gray-50 hover:bg-primary-50 hover:text-primary-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                  href="/categories"
                >
                  Electronics
                </Link>
                <Link
                  className="px-4 py-2 bg-gray-50 hover:bg-primary-50 hover:text-primary-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                  href="/categories"
                >
                  Fashion
                </Link>
                <Link
                  className="px-4 py-2 bg-gray-50 hover:bg-primary-50 hover:text-primary-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                  href="/categories"
                >
                  Home
                </Link>
                <Link
                  className="px-4 py-2 bg-gray-50 hover:bg-primary-50 hover:text-primary-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                  href="/categories"
                >
                  Beauty
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 min-h-screen py-8">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link className="hover:text-primary-600 transition" href="/">
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Shopping Cart</span>
              </nav>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="bg-primary-600 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                      <svg
                        data-prefix="fas"
                        data-icon="cart-shopping"
                        className="svg-inline--fa fa-cart-shopping"
                        role="img"
                        viewBox="0 0 640 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                        />
                      </svg>
                    </span>
                    Shopping Cart
                  </h1>
                  <p className="text-gray-500 mt-2">
                    You have{" "}
                    <span className="font-semibold text-primary-600">
                      {numOfCartItems || 0} items
                    </span>{" "}
                    in your cart
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {items.map((product) => (
                    <CartCard key={product._id} item={product} />
                  ))}
                  <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                    <Link
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2"
                      href="/"
                    >
                      <span>←</span> Continue Shopping
                    </Link>
                    <ClearButton />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-4">
                  <div className="bg-primary-600 p-5">
                    <h2 className="text-white font-bold text-lg">
                      Order Summary
                    </h2>
                    <p className="text-primary-100 text-sm mt-1">
                      {numOfCartItems || 0} item in your cart
                    </p>
                  </div>
                  <div className="p-5 space-y-4">
                    {totalCartPrice > 500 ? (
                      <div className="mt-2 text-sm text-green-600 font-medium">
                        ✓ Free shipping!
                      </div>
                    ) : (
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <FontAwesomeIcon
                            icon={faTruck}
                            className="text-orange-500"
                          />
                          <span className="text-sm font-medium text-gray-700">
                            Add {500 - (totalCartPrice || 0)} EGP for free
                            shipping
                          </span>
                        </div>
                        <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                            style={{
                              width: `${(((totalCartPrice || 0) / 500) * 100).toFixed(2)}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({numOfCartItems || 0} items)</span>
                      <span className="font-semibold">
                        {totalCartPrice || 0} EGP
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-green-600 font-medium">
                        {shipping} EGP
                      </span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Estimated Total</span>
                      <span className="text-primary-600">
                        {shipping + (totalCartPrice || 0)} EGP
                      </span>
                    </div>
                    <div className="pt-4 space-y-3">
                      <Link
                        href="/checkout"
                        className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all"
                      >
                        <svg
                          data-prefix="fas"
                          data-icon="user"
                          className="svg-inline--fa fa-user"
                          role="img"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"
                          />
                        </svg>
                        Checkout
                      </Link>
                    </div>
                    <div className="pt-4 border-t border-gray-100 space-y-2">
                      <p className="text-xs text-gray-500">
                        ✓ Your cart items will be saved
                      </p>
                      <p className="text-xs text-gray-500">
                        ✓ Track your orders easily
                      </p>
                      <p className="text-xs text-gray-500">
                        ✓ Access exclusive member deals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
