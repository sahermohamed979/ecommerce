"use server";
import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { WishlistItem, WishlistResponse } from "../types/index";
import { getSingle } from "../../produectDetails/servers/productdetails.server";

function getPendingWishItems(
  cookieStore: Awaited<ReturnType<typeof cookies>>,
): string[] {
  const raw = cookieStore.get("pendingWish")?.value;
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as string[];
    return [parsed as string];
  } catch {
    return [raw];
  }
}

export async function addToWish(
  productId: string,
): Promise<WishlistResponse | undefined> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    const pending = getPendingWishItems(cookieStore);
    if (!pending.includes(productId)) {
      pending.push(productId);
    }
    cookieStore.set("pendingWish", JSON.stringify(pending));
    return undefined;
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
    return undefined;
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
    const pending = getPendingWishItems(cookieStore).filter(
      (id) => id !== productId,
    );
    cookieStore.set("pendingWish", JSON.stringify(pending));
    return;
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

export async function getGuestWishlist(): Promise<
  WishlistResponse | undefined
> {
  const cookieStore = await cookies();
  const pending = getPendingWishItems(cookieStore);
  if (pending.length === 0) return undefined;

  const results = await Promise.all(
    pending.map((id) => getSingle({ id }).catch(() => null)),
  );

  const items: WishlistItem[] = results
    .map((r) => {
      const p = r?.data;
      if (!p) return null;
      const { reviews: _, ...rest } = p;
      void _;
      return rest as WishlistItem;
    })
    .filter((item): item is WishlistItem => item !== null);

  return { status: "success", count: items.length, data: items };
}

export async function syncPendingWishlist(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return;

  const pending = getPendingWishItems(cookieStore);
  if (pending.length === 0) return;

  await Promise.all(
    pending.map((productId) =>
      axios({
        method: "POST",
        url: "https://ecommerce.routemisr.com/api/v1/wishlist",
        headers: { token, "content-type": "application/json" },
        data: { productId },
      }).catch(() => null),
    ),
  );

  cookieStore.delete("pendingWish");
}
