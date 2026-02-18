import { create } from "zustand";
import { VerifyToken, removeToken } from "../servers/Auth.actions";
import type { User, AuthStore } from "../types";

export const useAuthStore = create<AuthStore>()((set) => ({
  isAuthenticated: false,
  userInfo: null,
  isLoading: true,

  initializeAuth: async () => {
    try {
      const result = await VerifyToken();

      set({
        isAuthenticated: result.isAuthenticated,
        userInfo: result.userInfo,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error verifying token:", error);
      set({
        isAuthenticated: false,
        userInfo: null,
        isLoading: false,
      });
    }
  },

  login: (userInfo: User): void =>
    set({
      isAuthenticated: true,
      userInfo,
      isLoading: false,
    }),

  logout: async () => {
    try {
      await removeToken();

      set({
        isAuthenticated: false,
        userInfo: null,
        isLoading: false,
      });

      // Note: Components using useCart/useWishlist should handle their own cleanup or
      // we can clear the QueryClient cache in the component/provider that calls logout.
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  },
}));
