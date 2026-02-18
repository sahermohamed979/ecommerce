"use client";
import Link from "next/link";
import { ProductDetailsResponse } from "../types";
import ImageGallery from "react-image-gallery";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import AddCartButton from "./ui/AddCartButton";
import BuyNo from "./ui/BuyNo";
import AddWishlist from "./ui/addWishlist";
import RemoveFromWish from "./ui/removeFromWish";
import { useWishlist } from "../../WishList/hooks/useWishlist";
import { useAuthStore } from "../../auth/store/auth.slice";
export default function ProductInfo({
  product,
}: {
  product: ProductDetailsResponse | undefined;
}) {
  const [pice, setPice] = useState(1);
  const { items } = useWishlist();
  const { isAuthenticated } = useAuthStore();

  const {
    subcategory,
    title,
    price,
    _id,
    quantity,
    brand,
    reviews,
    description,
    images,
    priceAfterDiscount,
  } = product?.data || {};
  return (
    <>
      <section id="product-detail" className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div id="product-images" className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
                <ImageGallery
                  items={
                    images?.map((image) => {
                      return {
                        original: image,
                        thumbnail: image,
                      };
                    }) || []
                  }
                  showFullscreenButton={false}
                  showNav={false}
                  showPlayButton={false}
                />
              </div>
            </div>
            <div id="product-info" className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Link
                    className="bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full hover:bg-primary-100 transition"
                    href={`/categories/${subcategory?.[0]?._id}`}
                  >
                    {subcategory?.[0]?.name}
                  </Link>{" "}
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                    {" "}
                    {brand?.name}
                  </span>{" "}
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {title}
                </h1>
                <div className="flex items-center gap-3 mb-4">
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
                    </svg>{" "}
                  </div>{" "}
                  <span className="text-sm text-gray-600">
                    ({reviews?.length || 0} reviews)
                  </span>
                </div>{" "}
                <div className="flex items-center flex-wrap gap-3 mb-6">
                  {" "}
                  <span className="text-3xl font-bold text-gray-900">
                    {" "}
                    {priceAfterDiscount
                      ? priceAfterDiscount * pice
                      : (price ?? 0) * pice}{" "}
                    EGP
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {price} EGP
                  </span>
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                    Save
                    {Math.round(
                      (((price ?? 0) - (priceAfterDiscount ?? 0)) /
                        (price ?? 1)) *
                        100,
                    )}
                    %
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  {quantity && quantity > 0 ? (
                    <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      In Stock
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-red-50 text-red-700">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      Out of Stock
                    </span>
                  )}
                </div>
                <div className="border-t border-gray-100 pt-5 mb-6">
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                      <button
                        id="decrease-qty"
                        disabled={pice <= 1}
                        onClick={() => setPice(pice - 1)}
                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                      >
                        {" "}
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <input
                        min={1}
                        max={quantity}
                        className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
                        id="quantity"
                        type="number"
                        value={pice}
                        onChange={(e) => setPice(Number(e.target.value))}
                      />
                      <button
                        id="increase-qty"
                        disabled={pice >= (quantity ?? 0)}
                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                        onClick={() => setPice(pice + 1)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">{quantity}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Price:</span>
                    <span className="text-2xl font-bold text-primary-600">
                      {price ? price * pice : 0} EGP
                    </span>
                  </div>
                </div>
                {isAuthenticated ? (
                  <>
                    {" "}
                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                      <AddCartButton id={_id} quantity={pice} />

                      <BuyNo id={_id ?? ""} />
                    </div>
                    <div className="flex gap-3 mb-6">
                      {!items.find((item) => item._id === _id) ? (
                        <AddWishlist id={_id ?? ""} />
                      ) : (
                        <RemoveFromWish id={_id ?? ""} />
                      )}

                      <button className="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-primary-300 hover:text-primary-600 transition">
                        <svg
                          data-prefix="fas"
                          data-icon="share-nodes"
                          className="svg-inline--fa fa-share-nodes"
                          role="img"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <Link className="block w-full mb-6" href="/login">
                    <button className="w-full border-2 border-primary-100 text-white bg-primary-600 py-3.5 px-6 rounded-xl font-medium ">
                      Login to add to cart
                    </button>
                  </Link>
                )}
                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          data-prefix="fas"
                          data-icon="truck-fast"
                          className="svg-inline--fa fa-truck-fast"
                          role="img"
                          viewBox="0 0 640 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          Free Delivery
                        </h4>
                        <p className="text-xs text-gray-500">Orders over $50</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          data-prefix="fas"
                          data-icon="arrow-rotate-left"
                          className="svg-inline--fa fa-arrow-rotate-left"
                          role="img"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          30 Days Return
                        </h4>
                        <p className="text-xs text-gray-500">Money back</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          data-prefix="fas"
                          data-icon="shield-halved"
                          className="svg-inline--fa fa-shield-halved"
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
                        <h4 className="font-medium text-gray-900 text-sm">
                          Secure Payment
                        </h4>
                        <p className="text-xs text-gray-500">100% Protected</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
