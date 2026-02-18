"use client";
import Link from "next/link";

export default function inCart() {
  return (
    <>
      <Link
        className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
        href="/cart"
      >
        <svg
          data-prefix="fas"
          data-icon="check"
          className="svg-inline--fa fa-check text-xs text-green-600"
          role="img"
          viewBox="0 0 448 512"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
          ></path>
        </svg>
        <span className="md:hidden lg:inline">View Cart</span>
      </Link>
    </>
  );
}
