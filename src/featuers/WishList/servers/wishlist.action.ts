"use server";
import axios, { AxiosRequestConfig } from "axios";

import { cookies } from "next/headers";
import { WishlistResponse } from "../types/index";

export async function addToWish(
  productId: string,
): Promise<WishlistResponse | undefined> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      method: "POST",
      url: "https://ecommerce.routemisr.com/api/v1/wishlist",
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
    console.error("Error adding to wishlist:", error);
  }
}

export async function getWishlist(): Promise<WishlistResponse | undefined> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      method: "GET",
      url: "https://ecommerce.routemisr.com/api/v1/wishlist",
      headers: {
        token,
      },
    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
  }
}

export async function deleteWishItem(productId: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    throw new Error("User is not authenticated");
  }
  try {
    const option: AxiosRequestConfig = {
      method: "DELETE",
      url: `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      headers: {
        token,
      },
    };
    const { data } = await axios(option);
    return data;
  } catch (error) {
    console.error("Error deleting wishlist item:", error);
  }
}
