import { create } from "zustand";
import { VerifyToken, removeToken } from "../servers/Auth.actions";
import type { User, AuthState, AuthActions, AuthStore } from "../types";

export const useAuthStore = create<AuthStore>()((set) => {
  const initializeWithToken = async () => {
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
  };

  initializeWithToken();

  return {
    isAuthenticated: false,
    userInfo: null,
    isLoading: true,

    login: (userInfo: User): void =>
      set({
        isAuthenticated: true,
        userInfo,
        isLoading: false,
      }),

    logout: async () => {
      await removeToken();
      set({
        isAuthenticated: false,
        userInfo: null,
        isLoading: false,
      });
    },
  };
});
