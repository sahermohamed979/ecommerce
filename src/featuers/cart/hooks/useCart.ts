"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCartlog,
  addToCart,
  deleteCartItem,
  deleteAllCartItems,
  UpdateQuantiy as updateQuantityApi,
} from "../servers/cart.action";
import { toast } from "react-toastify";

export const CART_QUERY_KEY = ["cart"];

export function useCart() {
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: CART_QUERY_KEY,
    queryFn: getCartlog,
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

      queryClient.setQueryData(CART_QUERY_KEY, data);
    },
    onError: (error) => {
      toast.error("Failed to add product to cart");
      console.error("Error adding to cart:", error);
    },
  });

  const removeMutation = useMutation({
    mutationFn: deleteCartItem,
    onSuccess: (data) => {
      toast.success("Product removed from cart successfully");
      queryClient.setQueryData(CART_QUERY_KEY, data);
    },
    onError: (error) => {
      toast.error("Failed to remove product from cart");
      console.error("Error removing from cart:", error);
    },
  });

  const updateQuantityMutation = useMutation({
    mutationFn: ({ productId, count }: { productId: string; count: number }) =>
      updateQuantityApi(productId, count),
    onSuccess: (data) => {
      toast.success("Product quantity updated successfully");
      queryClient.setQueryData(CART_QUERY_KEY, data);
    },
    onError: (error) => {
      toast.error("Failed to update quantity");
      console.error("Error updating cart item quantity:", error);
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
