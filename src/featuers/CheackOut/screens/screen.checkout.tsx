"use client";
import {
  faArrowLeft,
  faBagShopping,
  faBox,
  faCheck,
  faCircleInfo,
  faCity,
  faCreditCard,
  faHouse,
  faLocationDot,
  faPhone,
  faReceipt,
  faShieldHalved,
  faSpinner,
  faTruck,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import checkOutSchema, { CheckOutFormData } from "../schemas/schema";
import { useCart } from "../../cart/hooks/useCart";
import { createCashOrder, createOnlineOrder } from "../servers/checkout.action";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function CheckoutScreen() {
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("cash");
  const {
    cartId,
    items,
    totalCartPrice,
    shipping: Shipping,
    clearCart,
  } = useCart();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
      postalCode: "",
    },
    resolver: zodResolver(checkOutSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<CheckOutFormData> = async (data) => {
    try {
      if (!cartId) {
        return;
      }
      if (paymentMethod === "cash") {
        const response = await createCashOrder(cartId, data);
        console.log(response);

        if (response.status === "success") {
          toast.success("Order placed successfully");
          reset();
          await clearCart();

          setTimeout(() => {
            router.push("/allorders");
          }, 500);
        }
      } else {
        const response = await createOnlineOrder(cartId, data, location.origin);
        console.log(response);

        if (response.status === "success") {
          toast.loading("Redirecting to payment...", { autoClose: 2000 });

          setTimeout(() => {
            location.href = response.session.url;
          }, 500);
        }
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  return (
    <>
      {" "}
      <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link className="hover:text-primary-600 transition" href="/">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <Link className="hover:text-primary-600 transition" href="/cart">
                Cart
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-medium">Checkout</span>
            </nav>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="bg-gradient-to-br from-primary-600 to-primary-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20">
                    <FontAwesomeIcon icon={faReceipt} className="text-xl" />
                  </span>
                  Complete Your Order
                </h1>
                <p className="text-gray-500 mt-2">
                  Review your items and complete your purchase
                </p>
              </div>
              <Link
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all"
                href="/cart"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back to Cart
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-linear-to-r from-primary-600 to-primary-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FontAwesomeIcon icon={faHouse} />
                      Shipping Address
                    </h2>
                    <p className="text-primary-100 text-sm mt-1">
                      Where should we deliver your order?
                    </p>
                  </div>
                  <div className="p-6 space-y-5">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          className=" text-blue-800 "
                        />
                      </div>
                      <div>
                        <p className="text-sm text-blue-800 font-medium">
                          Delivery Information
                        </p>
                        <p className="text-xs text-blue-600 mt-0.5">
                          Please ensure your address is accurate for smooth
                          delivery
                        </p>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        City <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <FontAwesomeIcon icon={faCity} />
                        </div>
                        <input
                          id="city"
                          className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                          placeholder="e.g. Cairo, Alexandria, Giza"
                          type="text"
                          {...register("city")}
                        />
                        {errors.city && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="details"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <textarea
                          id="details"
                          rows={3}
                          className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all resize-none border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                          placeholder="Street name, building number, floor, apartment..."
                          {...register("details")}
                        />
                        {errors.details && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.details.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <input
                          id="phone"
                          className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                          placeholder="01xxxxxxxxx"
                          type="tel"
                          {...register("phone")}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                          Egyptian numbers only
                        </span>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="postalCode"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Postal Code <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <FontAwesomeIcon icon={faHouse} />
                        </div>
                        <input
                          id="postalCode"
                          className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                          placeholder="01xxx"
                          type="number"
                          {...register("postalCode")}
                        />
                        {errors.postalCode && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.postalCode.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-linear-to-r from-primary-600 to-primary-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FontAwesomeIcon icon={faWallet} />
                      Payment Method
                    </h2>
                    <p className="text-primary-100 text-sm mt-1">
                      Choose how you&apos;d like to pay
                    </p>
                  </div>
                  <div className="p-6 space-y-4">
                    <input
                      type="hidden"
                      name="paymentMethod"
                      value={paymentMethod}
                    />
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("cash")}
                      className={`w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group cursor-pointer ${
                        paymentMethod === "cash"
                          ? "border-primary-500 bg-gradient-to-r from-primary-50 to-emerald-50 shadow-sm"
                          : "border-gray-200 hover:border-primary-200 hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                          paymentMethod === "cash"
                            ? "bg-linear-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30"
                            : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                        }`}
                      >
                        <svg
                          data-prefix="fas"
                          data-icon="money-bill"
                          className="svg-inline--fa fa-money-bill text-xl"
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
                      <div className="flex-1 text-left">
                        <h3
                          className={`font-bold ${paymentMethod === "cash" ? "text-primary-700" : "text-gray-900"}`}
                        >
                          Cash on Delivery
                        </h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Pay when your order arrives at your doorstep
                        </p>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          paymentMethod === "cash"
                            ? "bg-primary-600 text-white"
                            : "border-2 border-gray-200"
                        }`}
                      >
                        {paymentMethod === "cash" && (
                          <FontAwesomeIcon icon={faCheck} />
                        )}
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("online")}
                      className={`w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group cursor-pointer ${
                        paymentMethod === "online"
                          ? "border-primary-500 bg-gradient-to-r from-primary-50 to-emerald-50 shadow-sm"
                          : "border-gray-200 hover:border-primary-200 hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                          paymentMethod === "online"
                            ? "w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-linear-to-br from-primary-500 to-blue-600 text-white shadow-lg shadow-primary-500/30"
                            : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          className="text-xl"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <h3
                          className={`font-bold ${paymentMethod === "online" ? "text-primary-700" : "text-gray-900"}`}
                        >
                          Pay Online
                        </h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Secure payment with Credit/Debit Card via Stripe
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Image
                            alt="Visa"
                            width={24}
                            height={24}
                            className="h-5"
                            src="https://img.icons8.com/color/48/visa.png"
                          />
                          <Image
                            alt="Mastercard"
                            width={24}
                            height={24}
                            className="h-5"
                            src="https://img.icons8.com/color/48/mastercard.png"
                          />
                          <Image
                            alt="Amex"
                            width={24}
                            height={24}
                            className="h-5"
                            src="https://img.icons8.com/color/48/amex.png"
                          />
                        </div>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          paymentMethod === "online"
                            ? "bg-primary-600 text-white"
                            : "border-2 border-gray-200"
                        }`}
                      >
                        {paymentMethod === "online" && (
                          <svg
                            data-prefix="fas"
                            data-icon="check"
                            className="svg-inline--fa fa-check text-xs"
                            role="img"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                            />
                          </svg>
                        )}
                      </div>
                    </button>
                    <div className="flex items-center gap-3 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <svg
                          data-prefix="fas"
                          data-icon="shield-halved"
                          className="svg-inline--fa fa-shield-halved text-green-600"
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
                        <p className="text-sm font-medium text-green-800">
                          Secure &amp; Encrypted
                        </p>
                        <p className="text-xs text-green-600 mt-0.5">
                          Your payment info is protected with 256-bit SSL
                          encryption
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
                  <div className="bg-linear-to-r from-primary-600 to-primary-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FontAwesomeIcon icon={faBagShopping} />
                      Order Summary
                    </h2>
                    <p className="text-primary-100 text-sm mt-1">1 item</p>
                  </div>
                  <div className="p-5">
                    {items.map((item) => (
                      <div
                        key={item._id}
                        className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1"
                      >
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                          <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                            <Image
                              alt="Woman Shawl"
                              width={24}
                              height={24}
                              className="w-full h-full object-contain"
                              src={
                                item?.product?.imageCover ||
                                "https://via.placeholder.com/150"
                              }
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {item?.product?.title || ""}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {item?.count} x {item?.price} EGP
                            </p>
                          </div>
                          <p className="text-sm font-bold text-gray-900 shrink-0">
                            {item?.count * item?.price} EGP
                          </p>
                        </div>
                      </div>
                    ))}

                    <hr className="border-gray-100 my-4" />
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium">
                          {totalCartPrice} EGP
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faTruck} />
                          Shipping
                        </span>
                        <span className="font-medium">{Shipping} EGP</span>
                      </div>
                      <hr className="border-gray-100" />
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">
                          Total
                        </span>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary-600">
                            {totalCartPrice + Shipping}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">
                            EGP
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-6 bg-linear-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl font-bold hover:from-primary-700 hover:to-primary-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20 active:scale-[0.98]"
                    >
                      {" "}
                      {isSubmitting ? (
                        <>
                          {" "}
                          <FontAwesomeIcon
                            icon={faSpinner}
                            spin
                            className="text-xl"
                          />
                          Placing Order...
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faBox} className="text-xl" />
                          Placing Order{" "}
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon
                          icon={faShieldHalved}
                          className="text-green-500"
                        />
                        <span>Secure</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200" />
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon
                          icon={faTruck}
                          className="text-blue-500"
                        />
                        <span>Fast Delivery</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200" />
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon
                          icon={faBox}
                          className="text-orange-500"
                        />

                        <span>Easy Returns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
