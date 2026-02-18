"use client";

import Image from "next/image";
import { useState } from "react";
import { Order } from "../types";
import { count } from "console";
export default function CardOrder({ order }: { order: Order }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    shippingAddress,
    cartItems,
    taxPrice,
    paymentMethodType,
    totalOrderPrice,
    shippingPrice,
    isDelivered,
    id,
    createdAt,
  } = order;
  return (
    <>
      <div className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200">
        {/* ── Card header ── */}
        <div className="p-5 sm:p-6">
          <div className="flex gap-5">
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-2.5 overflow-hidden">
                <Image
                  alt=""
                  width={112}
                  height={112}
                  className="w-full h-full object-contain"
                  src={cartItems[0].product.imageCover}
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 rounded-lg mb-2">
                    <svg
                      data-prefix="fas"
                      data-icon="truck"
                      className="svg-inline--fa fa-truck text-xs text-blue-600"
                      role="img"
                      viewBox="0 0 576 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-blue-600">
                      {isDelivered ? "Delivered" : "On the way"}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    <svg
                      data-prefix="fas"
                      data-icon="hashtag"
                      className="svg-inline--fa fa-hashtag text-xs text-gray-400"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M214.7 .7c17.3 3.7 28.3 20.7 24.6 38l-19.1 89.3 126.5 0 22-102.7C372.4 8 389.4-3 406.7 .7s28.3 20.7 24.6 38L412.2 128 480 128c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-27.4 128 67.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-81.6 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l19.1-89.3-126.5 0-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38L99.8 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 27.4-128-67.8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.6 0 22-102.7C180.4 8 197.4-3 214.7 .7zM206.4 192l-27.4 128 126.5 0 27.4-128-126.5 0z"
                      />
                    </svg>
                    {id}
                  </h3>
                </div>
                {paymentMethodType === "cash" ? (
                  <>
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100">
                      <svg
                        data-prefix="fas"
                        data-icon="money-bill"
                        className="svg-inline--fa fa-money-bill text-gray-600"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm192 24c0 4.4-3.6 8.1-8 7.5-29-3.6-51.9-26.6-55.5-55.5-.5-4.4 3.1-8 7.5-8l48 0c4.4 0 8 3.6 8 8l0 48zM64 328c0-4.4 3.6-8.1 8-7.5 29 3.6 51.9 26.6 55.5 55.5 .5 4.4-3.1 8-7.5 8l-48 0c-4.4 0-8-3.6-8-8l0-48zm8-136.5c-4.4 .5-8-3.1-8-7.5l0-48c0-4.4 3.6-8 8-8l48 0c4.4 0 8.1 3.6 7.5 8-3.6 29-26.6 51.9-55.5 55.5zm368 129c4.4-.5 8 3.1 8 7.5l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8.1-3.6-7.5-8 3.6-29 26.6-51.9 55.5-55.5z"
                        />
                      </svg>
                    </div>
                  </>
                ) : (
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-purple-100">
                    <svg
                      data-prefix="fas"
                      data-icon="credit-card"
                      className="svg-inline--fa fa-credit-card text-purple-600"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M0 128l0 32 512 0 0-32c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm0 80L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-176-512 0zM64 360c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm144 0c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <svg
                    data-prefix="fas"
                    data-icon="calendar-days"
                    className="svg-inline--fa fa-calendar-days text-xs text-gray-400"
                    role="img"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"
                    />
                  </svg>
                  {new Date(createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="flex items-center gap-1.5">
                  <svg
                    data-prefix="fas"
                    data-icon="box"
                    className="svg-inline--fa fa-box text-xs text-gray-400"
                    role="img"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"
                    />
                  </svg>
                  {cartItems.length} items
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="flex items-center gap-1.5">
                  <svg
                    data-prefix="fas"
                    data-icon="location-dot"
                    className="svg-inline--fa fa-location-dot text-xs text-gray-400"
                    role="img"
                    viewBox="0 0 384 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
                    />
                  </svg>
                  {shippingAddress.city}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    {totalOrderPrice}
                  </span>
                  <span className="text-sm font-medium text-gray-400 ml-1">
                    EGP
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${isOpen ? "bg-primary-600 shadow-primary-600/25 text-white" : "bg-gray-50"} text-gray-700`}
                >
                  {isOpen ? "Hide Details" : "View Details"}
                  <svg
                    data-prefix="fas"
                    data-icon="chevron-down"
                    className={`svg-inline--fa fa-chevron-down text-xs transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    role="img"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Expandable details section ── */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-gray-100 bg-gray-50/50">
              {/* Order Items */}
              <div className="p-5 sm:p-6">
                <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg
                      data-prefix="fas"
                      data-icon="receipt"
                      className="svg-inline--fa fa-receipt text-xs text-primary-600"
                      role="img"
                      viewBox="0 0 384 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.2-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6S384 14.6 384 24l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6l-40.4-34.6-40.4 34.6c-9 7.7-22.2 7.7-31.2 0l-40.4-34.6-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM104 136c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM80 352c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24-120c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"
                      />
                    </svg>
                  </div>
                  Order Items
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-16 h-16 rounded-xl bg-gray-50 p-2 shrink-0">
                      <Image
                        alt=""
                        width={112}
                        height={112}
                        className="w-full h-full object-contain"
                        src={cartItems[0].product.imageCover}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {cartItems[0].product.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        <span className="font-medium text-gray-700">
                          {cartItems[0].count}
                        </span>{" "}
                        ×{cartItems[0].price} EGP
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-lg font-bold text-gray-900">
                        {" "}
                        {totalOrderPrice}
                      </p>
                      <p className="text-xs text-gray-400">EGP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Address + Order Summary */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 grid sm:grid-cols-2 gap-4">
                {/* Delivery Address */}
                <div className="p-4 bg-white rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg
                        data-prefix="fas"
                        data-icon="location-dot"
                        className="svg-inline--fa fa-location-dot text-xs text-blue-600"
                        role="img"
                        viewBox="0 0 384 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
                        />
                      </svg>
                    </div>
                    Delivery Address
                  </h4>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">
                      {shippingAddress.city}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {shippingAddress.details}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2 pt-1">
                      <svg
                        data-prefix="fas"
                        data-icon="phone"
                        className="svg-inline--fa fa-phone text-xs text-gray-400"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
                        />
                      </svg>
                      {shippingAddress.phone}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2 pt-1">
                      Post Code: {shippingAddress.postalCode}
                    </p>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="p-4 rounded-xl bg-blue-100 border border-blue-200">
                  <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center">
                      <svg
                        data-prefix="fas"
                        data-icon="truck"
                        className="svg-inline--fa fa-truck text-xs text-white"
                        role="img"
                        viewBox="0 0 576 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        />
                      </svg>
                    </div>
                    Order Summary
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-medium">
                        {totalOrderPrice - taxPrice - shippingPrice} EGP
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span className="font-medium">{taxPrice} EGP</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="font-medium">{shippingPrice} EGP</span>
                    </div>
                    <hr className="border-gray-200/50 my-2" />
                    <div className="flex justify-between pt-1">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="font-bold text-lg text-gray-900">
                        {totalOrderPrice} EGP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
