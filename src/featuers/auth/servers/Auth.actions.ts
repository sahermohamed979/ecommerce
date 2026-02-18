"use server";

import axios from "axios";
import { cookies } from "next/headers";
import type { User } from "../types";

export async function setToken(
  token: string,
  rememberMe: boolean,
): Promise<void> {
  const cookeStore = await cookies();
  cookeStore.set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24,
  });
}

export async function getToken(): Promise<string | null> {
  const cookeStore = await cookies();
  const token = cookeStore.get("token")?.value || null;
  return token;
}

export async function removeToken(): Promise<void> {
  const cookeStore = await cookies();
  cookeStore.delete("token");
}

export async function VerifyToken(): Promise<{
  isAuthenticated: boolean;
  userInfo: User | null;
}> {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value || null;

  if (!token) {
    return {
      isAuthenticated: false,
      userInfo: null,
    };
  }

  try {
    const options = {
      method: "get",
      url: "https://ecommerce.routemisr.com/api/v1/auth/verifyToken",
      headers: {
        token,
      },
    };
    const { data } = await axios(options);
    const { id, name, role, email } = data.decoded;
    if (data.message === "verified") {
      return {
        isAuthenticated: true,
        userInfo: { id, name, role, email },
      };
    }
    return {
      isAuthenticated: false,
      userInfo: null,
    };
  } catch {
    return {
      isAuthenticated: false,
      userInfo: null,
    };
  }
}
