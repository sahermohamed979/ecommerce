"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faGift,
  faInbox,
  faPhone,
  faTruck,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/images/freshcart-logo.svg";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/src/featuers/auth/store/auth.slice";
import { useCart } from "@/src/featuers/cart/hooks/useCart";
import { useWishlist } from "@/src/featuers/WishList/hooks/useWishlist";
import UserDropdown from "./UserDropdown";

export default function Navbar() {
  const { isAuthenticated, userInfo, logout } = useAuthStore();
  const { numOfCartItems } = useCart();
  const { count: wishlistCount } = useWishlist();

  useEffect(() => {
    // Both hooks handle their own fetching, no manual trigger needed here
  }, [isAuthenticated]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      return () => {
        document.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block text-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-6 text-gray-500">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTruck} className="text-primary-600" />
                <span>Free Shipping on Orders 500 EGP</span>
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGift} className="text-primary-600" />
                <span>New Arrivals Daily</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-gray-500">
                <Link
                  href="tel:+18001234567"
                  className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+1 (800) 123-4567</span>
                </Link>
                <Link
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faInbox} />
                  <span>support@freshcart.com</span>
                </Link>
              </div>
              <span className="w-px h-4 bg-gray-200"></span>
              <div className="flex items-center gap-4">
                {isAuthenticated ? (
                  <>
                    {" "}
                    <Link
                      className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                      href="/profile"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <span>{userInfo?.name}</span>
                    </Link>
                    <button
                      className="flex items-center gap-1.5 text-gray-600 hover:text-primary-1000 transition-colors"
                      onClick={logout}
                    >
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                      href="/login"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <span>Sign In</span>
                    </Link>
                    <Link
                      className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
                      href="/signup"
                    >
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span>Sign Up</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main navbar */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
              {/* Logo */}
              <Link className="shrink-0" href="/">
                <Image
                  alt="FreshCart"
                  src={logo}
                  width={160}
                  height={31}
                  className="h-6 lg:h-8 w-auto"
                  style={{ color: "transparent" }}
                  priority={false}
                />
              </Link>
              {/* Search */}
              <form className="hidden lg:flex flex-1 max-w-2xl">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
                  >
                    {/* Replace with your search icon */}
                    <span className="sr-only">Search</span>
                    <svg
                      className="text-sm"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      width={16}
                      height={16}
                      aria-hidden="true"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                  </button>
                </div>
              </form>
              {/* Nav links */}
              <nav className="hidden xl:flex items-center gap-6">
                <Link
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  href="/shop"
                >
                  Shop
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-1.5 text-gray-700 hover:text-primary-600 font-medium transition-colors py-2">
                    Categories
                    {/* Replace with your chevron icon */}
                    <svg
                      className="text-[10px] transition-transform group-hover:rotate-180"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      width={12}
                      height={12}
                      aria-hidden="true"
                    >
                      <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-50">
                      <Link
                        className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        href="/categories"
                      >
                        All Categories
                      </Link>
                      <Link
                        className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        href="/products?category=6439d58a0049ad0b52b9003f"
                      >
                        Electronics
                      </Link>
                      <Link
                        className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        href="/products?category=6439d5b90049ad0b52b90048"
                      >
                        Women&apos;s Fashion
                      </Link>
                      <Link
                        className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        href="/products?category=6439d2d167d9aa4ca970649f"
                      >
                        Men&apos;s Fashion
                      </Link>
                      <Link
                        className="block px-4 py-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        href="/products?category=6439d40367d9aa4ca97064a8"
                      >
                        Beauty &amp; Health
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  href="/brands"
                >
                  Brands
                </Link>
              </nav>
              {/* Right icons */}
              <div className="flex items-center gap-1 lg:gap-2">
                {/* Support */}
                <Link
                  className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
                  href="/contact"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                    {/* Replace with your headset icon */}
                    <svg
                      className="text-primary-600"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      width={20}
                      height={20}
                      aria-hidden="true"
                    >
                      <path d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z" />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="text-gray-400">Support</div>
                    <div className="font-semibold text-gray-700">24/7 Help</div>
                  </div>
                </Link>
                {/* Wishlist */}
                <Link
                  className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
                  title="Wishlist"
                  href="/wishlist"
                >
                  {wishlistCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                  {/* Replace with your heart icon */}
                  <svg
                    className="text-xl text-gray-500 group-hover:text-primary-600 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  >
                    <path d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1z" />
                  </svg>
                </Link>
                {/* Cart */}
                <Link
                  className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
                  title="Cart"
                  href="/cart"
                >
                  {numOfCartItems > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 bg-primary-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {numOfCartItems}
                    </span>
                  )}
                  {/* Replace with your cart icon */}
                  <svg
                    className="text-xl text-gray-500 group-hover:text-primary-600 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  >
                    <path d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                  </svg>
                </Link>
                {/* Sign In */}

                {isAuthenticated ? (
                  <UserDropdown />
                ) : (
                  <Link
                    className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-primary-600/20"
                    href="/login"
                  >
                    {/* Replace with your user icon */}
                    <svg
                      className="text-xs"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      width={16}
                      height={16}
                      aria-hidden="true"
                    >
                      <path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z" />
                    </svg>
                    Sign In
                  </Link>
                )}

                {/* Mobile menu button */}
                <button
                  className="lg:hidden ml-1 w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  {/* Replace with your bars icon */}
                  <svg
                    className=""
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile side menu */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-out z-40 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      {/* Side menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-all duration-300 ease-out overflow-y-auto z-50 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50 animate-slide-down">
          <Image
            alt="FreshCart"
            src={logo}
            width={160}
            height={31}
            className="h-8 w-auto"
            style={{ color: "transparent" }}
          />
          <button
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              className="text-gray-600"
              fill="currentColor"
              viewBox="0 0 384 512"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <form
          className="p-4 border-b border-gray-100 animate-slide-down"
          style={{ animationDelay: "100ms" }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm transition-all duration-200 focus:scale-[1.02]"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg
                className="text-sm"
                fill="currentColor"
                viewBox="0 0 512 512"
                width={14}
                height={14}
                aria-hidden="true"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Navigation */}
        <nav
          className="p-4 animate-slide-down"
          style={{ animationDelay: "200ms" }}
        >
          <div className="space-y-1">
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
              href="/categories"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
              href="/brands"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Brands
            </Link>
          </div>
        </nav>

        {/* Divider */}
        <div
          className="mx-4 border-t border-gray-100 animate-slide-down"
          style={{ animationDelay: "300ms" }}
        ></div>

        {/* User Actions */}
        <div
          className="p-4 space-y-1 animate-slide-down"
          style={{ animationDelay: "350ms" }}
        >
          <Link
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 transition-all duration-200 hover:scale-[1.02] hover:translate-x-1"
            href="/wishlist"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                <svg
                  className="text-red-500"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  width={16}
                  height={16}
                  aria-hidden="true"
                >
                  <path d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1z" />
                </svg>
              </div>
              <span className="font-medium text-gray-700">Wishlist</span>
            </div>
          </Link>
          <Link
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 transition-all duration-200 hover:scale-[1.02] hover:translate-x-1"
            href="/cart"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
                <svg
                  className="text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                  width={16}
                  height={16}
                  aria-hidden="true"
                >
                  <path d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                </svg>
              </div>
              <span className="font-medium text-gray-700">Cart</span>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div
          className="mx-4 border-t border-gray-100 animate-slide-down"
          style={{ animationDelay: "400ms" }}
        ></div>

        {/* Auth Buttons */}
        <div
          className="p-4 space-y-1 animate-slide-down"
          style={{ animationDelay: "450ms" }}
        >
          {isAuthenticated ? (
            <>
              <Link
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all duration-200 w-full hover:scale-[1.02] active:scale-95"
                href="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUser} />
                {"Profile"}
              </Link>
              <Link
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#101828] text-white font-semibold hover:bg-primary-700 transition-all duration-200 w-full hover:scale-[1.02] active:scale-95"
                href="/allorders"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faCartArrowDown} />
                {"All Orders"}
              </Link>
              <button
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-red-600 text-red-600 font-semibold hover:bg-red-50 transition-all duration-200 w-full hover:scale-[1.02] active:scale-95"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  logout();
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} />
                Sign Out
              </button>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all duration-200 hover:scale-[1.02] active:scale-95"
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition-all duration-200 hover:scale-[1.02] active:scale-95"
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Support */}
        <Link
          className="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-primary-50 transition-all duration-200 hover:scale-[1.02] hover:shadow-md animate-slide-down"
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ animationDelay: "500ms" }}
        >
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
            <svg
              className="text-primary-600"
              fill="currentColor"
              viewBox="0 0 448 512"
              width={18}
              height={18}
              aria-hidden="true"
            >
              <path d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-700">
              Need Help?
            </div>
            <div className="text-sm text-primary-600">Contact Support</div>
          </div>
        </Link>
      </div>
    </>
  );
}
