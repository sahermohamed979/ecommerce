"use server";
import axios, { AxiosRequestConfig } from "axios";

import { cookies } from "next/headers";
import { CartItem, CartResponse } from "../types";
import { getSingle } from "../../produectDetails/servers/productdetails.server";

type GuestCartEntry = { id: string; count: number };

function getPendingCartItems(
  cookieStore: Awaited<ReturnType<typeof cookies>>,
): GuestCartEntry[] {
  const raw = cookieStore.get("pendingCart")?.value;
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    // support legacy format (plain string[])
    if (Array.isArray(parsed) && typeof parsed[0] === "string") {
      return (parsed as string[]).map((id) => ({ id, count: 1 }));
    }
    return parsed as GuestCartEntry[];
  } catch {
    return [];
  }
}

export async function addToCart(
  productId: string,
): Promise<CartResponse | undefined> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    const pending = getPendingCartItems(cookieStore);
    const existing = pending.find((e) => e.id === productId);
    if (existing) {
      existing.count += 1;
    } else {
      pending.push({ id: productId, count: 1 });
    }
    cookieStore.set("pendingCart", JSON.stringify(pending));
    return undefined;
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
    return undefined;
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
    const pending = getPendingCartItems(cookieStore).filter(
      (e) => e.id !== productId,
    );
    cookieStore.set("pendingCart", JSON.stringify(pending));
    return;
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
    cookieStore.delete("pendingCart");
    return;
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
    const pending = getPendingCartItems(cookieStore);
    const entry = pending.find((e) => e.id === productId);
    if (entry) entry.count = count;
    cookieStore.set("pendingCart", JSON.stringify(pending));
    return;
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

export async function getGuestCart(): Promise<CartResponse | undefined> {
  const cookieStore = await cookies();
  const pending = getPendingCartItems(cookieStore);
  if (pending.length === 0) return undefined;

  const results = await Promise.all(
    pending.map((entry) => getSingle({ id: entry.id }).catch(() => null)),
  );

  const products: CartItem[] = [];
  let totalCartPrice = 0;

  pending.forEach((entry, i) => {
    const p = results[i]?.data;
    if (!p) return;
    const unitPrice = p.priceAfterDiscount ?? p.price;
    totalCartPrice += unitPrice * entry.count;
    products.push({
      _id: entry.id,
      count: entry.count,
      price: unitPrice,
      product: {
        _id: p._id,
        id: p.id,
        title: p.title,
        slug: p.slug,
        quantity: p.quantity,
        imageCover: p.imageCover,
        category: p.category,
        brand: p.brand,
        ratingsAverage: p.ratingsAverage,
        subcategory: p.subcategory,
      },
    });
  });

  return {
    status: "success",
    message: "ok",
    numOfCartItems: products.length,
    cartId: "",
    data: {
      _id: "",
      cartOwner: "",
      products,
      createdAt: "",
      updatedAt: "",
      __v: 0,
      totalCartPrice,
    },
  };
}

export async function syncPendingCart(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return;

  const pending = getPendingCartItems(cookieStore);
  if (pending.length === 0) return;

  await Promise.all(
    pending.map((entry) =>
      axios({
        method: "POST",
        url: "https://ecommerce.routemisr.com/api/v2/cart",
        headers: { token, "content-type": "application/json" },
        data: { productId: entry.id },
      }).catch(() => null),
    ),
  );

  cookieStore.delete("pendingCart");
}
