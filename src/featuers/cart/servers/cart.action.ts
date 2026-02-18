"use server";
import axios, { AxiosRequestConfig } from "axios";

import { cookies } from "next/headers";
import { CartResponse } from "../types";

export async function addToCart(
  productId: string,
): Promise<CartResponse | undefined> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      method: "POST",
      url: "https://ecommerce.routemisr.com/api/v2/cart",
      headers: {
        token,
        "content-type": "application/json",
      },
      data: {
        productId,
      },
    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
}

export async function getCartlog(): Promise<CartResponse | undefined> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      method: "GET",
      url: "https://ecommerce.routemisr.com/api/v2/cart",
      headers: {
        token,
      },
    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    console.error("Error fetching cart log:", error);
  }
}

export async function deleteCartItem(productId: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      method: "DELETE",
      url: `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
      headers: {
        token,
      },
    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    console.error("Error deleting cart item:", error);
  }
}
export async function deleteAllCartItems() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      method: "DELETE",
      url: `https://ecommerce.routemisr.com/api/v2/cart`,
      headers: {
        token,
      },
    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    console.error("Error deleting cart item:", error);
  }
}

export async function UpdateQuantiy(productId: string, count: number) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      method: "PUT",
      url: `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
      headers: {
        token,
      },
      data: {
        count,
      },
    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
  }
}
