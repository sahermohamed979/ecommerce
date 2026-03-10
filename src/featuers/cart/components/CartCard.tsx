"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { CartItem } from "../types";
import { useCart } from "../hooks/useCart";

export default function CartCard({ item }: { item: CartItem }) {
  const { removeProduct, updateQuantity } = useCart();
  const [action, setAction] = useState<"idle" | "updating" | "removing">(
    "idle",
  );

  const handleUpdateQuantity = async (newCount: number) => {
    setAction("updating");
    try {
      await updateQuantity({ productId: item.product._id, count: newCount });
    } finally {
      setAction("idle");
    }
  };

  const handleRemove = async () => {
    setAction("removing");
    try {
      await removeProduct(item.product._id);
    } finally {
      setAction("idle");
    }
  };

  return (
    <>
      <div className=" relative bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
        {action !== "idle" && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 rounded-2xl flex items-center justify-center">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
              <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
              <span className="text-sm font-medium text-gray-600">
                {action === "updating" ? "Updating..." : "Removing..."}
              </span>
            </div>
          </div>
        )}
        <div className="flex gap-4 sm:gap-6">
          <Link
            className="relative shrink-0 group"
            href={`/products/${item.product._id}`}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
              {item.product.imageCover ? (
                <Image
                  src={item.product.imageCover}
                  alt={item.product.title}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-full h-full rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                  No Image
                </div>
              )}
            </div>
            {item.product.quantity > 0 && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                <svg
                  data-prefix="fas"
                  data-icon="check"
                  className="svg-inline--fa fa-check text-[8px]"
                  role="img"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                  />
                </svg>
                In Stock
              </div>
            )}
          </Link>
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="mb-3">
              <Link
                className="group/title"
                href={`/products/${item.product._id}`}
              >
                <h3 className="font-semibold text-gray-900 group-hover/title:text-primary-600 transition-colors leading-relaxed text-base sm:text-lg">
                  {item.product.title}
                </h3>
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                  Women&apos;s Fashion
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-primary-600 font-bold text-lg me-2">
                {item.price} EGP
              </span>
              <span className="text-xs text-gray-400">per unit</span>
            </div>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                <button
                  disabled={action !== "idle"}
                  onClick={async () => {
                    if (item.count > 1) {
                      await handleUpdateQuantity(item.count - 1);
                    }
                  }}
                  className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40 transition-all"
                >
                  <FontAwesomeIcon icon={faMinus} className="text-xs" />
                </button>
                <span className="w-12 text-center font-bold text-gray-900">
                  {item.count}
                </span>
                <button
                  disabled={action !== "idle"}
                  onClick={async () =>
                    await handleUpdateQuantity(item.count + 1)
                  }
                  className="h-8 w-8 rounded-lg bg-primary-600 shadow-sm flex items-center justify-center text-white hover:bg-primary-700 transition-all"
                >
                  <FontAwesomeIcon icon={faPlus} className="text-xs" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-0.5">Total</p>
                  <p className="text-xl font-bold text-gray-900">
                    {item.price * item.count}
                    <span className="text-sm font-medium text-gray-400 ms-2">
                      EGP
                    </span>
                  </p>
                </div>
                <button
                  className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200"
                  title="Remove item"
                  disabled={action !== "idle"}
                  onClick={handleRemove}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
