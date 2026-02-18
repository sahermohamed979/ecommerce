"use server";

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { CheckOutFormData } from "../schemas/schema";

export const createCashOrder = async (
  cartId: string,
  shippingAddress: CheckOutFormData,
) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const options: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
      method: "POST",
      headers: {
        token: token,
      },
      data: {
        shippingAddress: shippingAddress,
      },
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw error;
  }
};
export const createOnlineOrder = async (
  cartId: string,
  shippingAddress: CheckOutFormData,
  url: string,
) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const options: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
      method: "POST",
      headers: {
        token: token,
      },
      data: {
        shippingAddress: shippingAddress,
      },
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw error;
  }
};
