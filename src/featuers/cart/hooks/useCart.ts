"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCartlog,
  getGuestCart,
  addToCart,
  deleteCartItem,
  deleteAllCartItems,
  UpdateQuantiy as updateQuantityApi,
} from "../servers/cart.action";
import { toast } from "react-toastify";
import { useAuthStore } from "../../auth/store/auth.slice";
import { CartResponse } from "../types";

export const CART_QUERY_KEY = ["cart"];

export function useCart() {
  const queryClient = useQueryClient();
  const { isAuthenticated } = useAuthStore();

  const cartQuery = useQuery({
    queryKey: CART_QUERY_KEY,
    queryFn: isAuthenticated ? getCartlog : getGuestCart,
    select: (data) => ({
      items: data?.data?.products ?? [],
      numOfCartItems: data?.numOfCartItems ?? 0,
      totalCartPrice: data?.data?.totalCartPrice ?? 0,
      cartId: data?.cartId ?? "",
      shipping: (data?.data?.totalCartPrice ?? 0) > 500 ? 0 : 100,
    }),
  });

  const addMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      toast.success("Product added to cart successfully");
      if (data) {
        queryClient.setQueryData(CART_QUERY_KEY, data);
      } else {
        queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
      }
    },
    onError: (error) => {
      toast.error("Failed to add product to cart");
      console.error("Error adding to cart:", error);
    },
  });

  const removeMutation = useMutation({
    mutationFn: deleteCartItem,
    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey: CART_QUERY_KEY });
      const previous = queryClient.getQueryData<CartResponse>(CART_QUERY_KEY);
      queryClient.setQueryData<CartResponse | undefined>(
        CART_QUERY_KEY,
        (old) => {
          if (!old) return old;
          const products = old.data.products.filter(
            (p) => p.product._id !== productId,
          );
          return {
            ...old,
            numOfCartItems: products.length,
            data: { ...old.data, products },
          };
        },
      );
      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(CART_QUERY_KEY, context.previous);
      }
      toast.error("Failed to remove product from cart");
    },
    onSuccess: (data) => {
      toast.success("Product removed from cart successfully");
      if (data) {
        queryClient.setQueryData(CART_QUERY_KEY, data);
      } else {
        queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
      }
    },
  });

  const updateQuantityMutation = useMutation({
    mutationFn: ({ productId, count }: { productId: string; count: number }) =>
      updateQuantityApi(productId, count),
    onMutate: async ({ productId, count }) => {
      await queryClient.cancelQueries({ queryKey: CART_QUERY_KEY });
      const previous = queryClient.getQueryData<CartResponse>(CART_QUERY_KEY);
      queryClient.setQueryData<CartResponse | undefined>(
        CART_QUERY_KEY,
        (old) => {
          if (!old) return old;
          const products = old.data.products.map((p) =>
            p.product._id === productId ? { ...p, count } : p,
          );
          return { ...old, data: { ...old.data, products } };
        },
      );
      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(CART_QUERY_KEY, context.previous);
      }
      toast.error("Failed to update quantity");
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.setQueryData(CART_QUERY_KEY, data);
      } else {
        queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
      }
    },
  });

  const clearMutation = useMutation({
    mutationFn: deleteAllCartItems,
    onSuccess: () => {
      queryClient.setQueryData(CART_QUERY_KEY, null);
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });
    },
    onError: (error) => {
      console.error("Error clearing cart:", error);
    },
  });

  return {
    ...cartQuery,
    items: cartQuery.data?.items ?? [],
    numOfCartItems: cartQuery.data?.numOfCartItems ?? 0,
    totalCartPrice: cartQuery.data?.totalCartPrice ?? 0,
    cartId: cartQuery.data?.cartId ?? "",
    shipping: cartQuery.data?.shipping ?? 100,
    addProduct: addMutation.mutateAsync,
    removeProduct: removeMutation.mutateAsync,
    updateQuantity: updateQuantityMutation.mutateAsync,
    clearCart: clearMutation.mutateAsync,
    isAdding: addMutation.isPending,
    isRemoving: removeMutation.isPending,
    isUpdating: updateQuantityMutation.isPending,
    isClearing: clearMutation.isPending,
  };
}
