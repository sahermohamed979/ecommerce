"use client";

import { useState } from "react";

export default function Reviews() {
  const [activeTab, setActiveTab] = useState<
    "details" | "reviews" | "shipping"
  >("details");

  return (
    <>
      <section id="product-details-tabs" className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto scrollbar-hide">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === "details"
                      ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50/50"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  }`}
                >
                  <svg
                    data-prefix="fas"
                    data-icon="box"
                    className="svg-inline--fa fa-box text-sm"
                    role="img"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"
                    />
                  </svg>
                  Product Details
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === "reviews"
                      ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50/50"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  }`}
                >
                  <svg
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star text-sm"
                    role="img"
                    viewBox="0 0 576 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                    />
                  </svg>
                  Reviews (2)
                </button>
                <button
                  onClick={() => setActiveTab("shipping")}
                  className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === "shipping"
                      ? "text-primary-600 border-b-2 border-primary-600 bg-primary-50/50"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  }`}
                >
                  <svg
                    data-prefix="fas"
                    data-icon="truck"
                    className="svg-inline--fa fa-truck text-sm"
                    role="img"
                    viewBox="0 0 576 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                    />
                  </svg>
                  Shipping &amp; Returns
                </button>
              </div>
            </div>
            <div className="p-6">
              {activeTab === "details" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      About this Product
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Material Polyester Blend Colour Name Multicolour
                      Department Women
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Product Information
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between text-sm">
                          <span className="text-gray-500">Category</span>
                          <span className="text-gray-900 font-medium">
                            Women&apos;s Fashion
                          </span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-gray-500">Subcategory</span>
                          <span className="text-gray-900 font-medium">
                            Women&apos;s Clothing
                          </span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-gray-500">Brand</span>
                          <span className="text-gray-900 font-medium">
                            DeFacto
                          </span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-gray-500">Items Sold</span>
                          <span className="text-gray-900 font-medium">
                            24072+ sold
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-600">
                          <svg
                            data-prefix="fas"
                            data-icon="check"
                            className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                            role="img"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                            />
                          </svg>
                          Premium Quality Product
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <svg
                            data-prefix="fas"
                            data-icon="check"
                            className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                            role="img"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                            />
                          </svg>
                          100% Authentic Guarantee
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <svg
                            data-prefix="fas"
                            data-icon="check"
                            className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                            role="img"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                            />
                          </svg>
                          Fast &amp; Secure Packaging
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <svg
                            data-prefix="fas"
                            data-icon="check"
                            className="svg-inline--fa fa-check text-primary-600 mr-2 w-4"
                            role="img"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                            />
                          </svg>
                          Quality Tested
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-gray-900 mb-2">
                          5
                        </div>
                        <div className="text-yellow-400">
                          <svg
                            data-prefix="fas"
                            data-icon="star"
                            className="svg-inline--fa fa-star"
                            role="img"
                            viewBox="0 0 576 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                            />
                          </svg>
                          <svg
                            data-prefix="fas"
                            data-icon="star"
                            className="svg-inline--fa fa-star"
                            role="img"
                            viewBox="0 0 576 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                            />
                          </svg>
                          <svg
                            data-prefix="fas"
                            data-icon="star"
                            className="svg-inline--fa fa-star"
                            role="img"
                            viewBox="0 0 576 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                            />
                          </svg>
                          <svg
                            data-prefix="fas"
                            data-icon="star"
                            className="svg-inline--fa fa-star"
                            role="img"
                            viewBox="0 0 576 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                            />
                          </svg>
                          <svg
                            data-prefix="fas"
                            data-icon="star"
                            className="svg-inline--fa fa-star"
                            role="img"
                            viewBox="0 0 576 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          Based on 2 reviews
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            5 star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">
                            60%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            4 star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: "25%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">
                            25%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            3 star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: "5%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">5%</span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            2 star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: "5%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">5%</span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            1 star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: "5%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">5%</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-6">
                      <div className="text-center py-8">
                        <svg
                          data-prefix="fas"
                          data-icon="star"
                          className="svg-inline--fa fa-star text-4xl text-gray-300 mb-3"
                          role="img"
                          viewBox="0 0 576 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                          />
                        </svg>
                        <p className="text-gray-500">
                          Customer reviews will be displayed here.
                        </p>
                        <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium">
                          Write a Review
                        </button>
                      </div>
                    </div>
                  </div>اه
                </div>
              )}

              {activeTab === "shipping" && (
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-linear-to-br from-primary-50 to-primary-100 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-12 w-12 bg-primary-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              data-prefix="fas"
                              data-icon="truck"
                              className="svg-inline--fa fa-truck text-xl"
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
                          <h4 className="font-semibold text-gray-900">
                            Shipping Information
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <svg
                              data-prefix="fas"
                              data-icon="check"
                              className="svg-inline--fa fa-check text-primary-600 mt-0.5"
                              role="img"
                              viewBox="0 0 448 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                              />
                            </svg>
                            <span>Free shipping on orders over $50</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <svg
                              data-prefix="fas"
                              data-icon="check"
                              className="svg-inline--fa fa-check text-primary-600 mt-0.5"
                              role="img"
                              viewBox="0 0 448 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                              />
                            </svg>
                            <span>Standard delivery: 3-5 business days</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <svg
                              data-prefix="fas"
                              data-icon="check"
                              className="svg-inline--fa fa-check text-primary-600 mt-0.5"
                              role="img"
                              viewBox="0 0 448 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                              />
                            </svg>
                            <span>
                              Express delivery available (1-2 business days)
                            </span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <svg
                              data-prefix="fas"
                              data-icon="check"
                              className="svg-inline--fa fa-check text-primary-600 mt-0.5"
                              role="img"
                              viewBox="0 0 448 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                              />
                            </svg>
                            <span>Track your order in real-time</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              data-prefix="fas"
                              data-icon="rotate-left"
                              className="svg-inline--fa fa-rotate-left text-xl"
                              role="img"
                              viewBox="0 0 512 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M24 192l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-46.7-46.7c75.3-58.6 184.3-53.3 253.5 15.9 75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-10.2-10.2-19-21.3-26.4-33-9.5-14.9-29.3-19.3-44.2-9.8s-19.3 29.3-9.8 44.2C49.7 408.7 61.4 423.5 75 437 175 537 337 537 437 437S537 175 437 75C342.8-19.3 193.3-24.7 92.7 58.8L41 7C34.1 .2 23.8-1.9 14.8 1.8S0 14.3 0 24L0 168c0 13.3 10.7 24 24 24z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900">
                            Returns &amp; Refunds
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <svg
                              data-prefix="fas"
                              data-icon="check"
                              className="svg-inline--fa fa-check text-green-600 mt-0.5"
                              role="img"
                              viewBox="0 0 448 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                              />
                            </svg>
                            <span>30-day hassle-free returns</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <svg
                              data-prefix="fas"
                              data-icon="check"
                              className="svg-inline--fa fa-check text-green-600 mt-0.5"
                              role="img"
                              viewBox="0 0 448 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                              />
                            </svg>
                            <span>Full refund or exchange available</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <svg
                              data-prefix="fas"
                              data-icon="check"
                              className="svg-inline--fa fa-check text-green-600 mt-0.5"
                              role="img"
                              viewBox="0 0 448 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                              />
                            </svg>
                            <span>Free return shipping on defective items</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <svg
                              data-prefix="fas"
                              data-icon="check"
                              className="svg-inline--fa fa-check text-green-600 mt-0.5"
                              role="img"
                              viewBox="0 0 448 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                              />
                            </svg>
                            <span>Easy online return process</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
                      <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          data-prefix="fas"
                          data-icon="shield-halved"
                          className="svg-inline--fa fa-shield-halved text-2xl"
                          role="img"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Buyer Protection Guarantee
                        </h4>
                        <p className="text-sm text-gray-600">
                          Get a full refund if your order doesn&apos;t arrive or
                          isn&apos;t as described. We ensure your shopping
                          experience is safe and secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
