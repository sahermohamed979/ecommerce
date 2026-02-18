"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getWishlist,
  addToWish,
  deleteWishItem,
} from "../servers/wishlist.action";
import { toast } from "react-toastify";

export const WISHLIST_QUERY_KEY = ["wishlist"];

export function useWishlist() {
  const queryClient = useQueryClient();

  const wishlistQuery = useQuery({
    queryKey: WISHLIST_QUERY_KEY,
    queryFn: getWishlist,
    select: (data) => ({
      items: data?.data ?? [],
      count: data?.count ?? data?.data?.length ?? 0,
    }),
  });

  const addMutation = useMutation({
    mutationFn: addToWish,
    onSuccess: () => {
      toast.success("Product added to wishlist successfully");
      queryClient.invalidateQueries({ queryKey: WISHLIST_QUERY_KEY });
    },
    onError: (error) => {
      toast.error("Failed to add product to wishlist");
      console.error("Error adding to wishlist:", error);
    },
  });

  const removeMutation = useMutation({
    mutationFn: deleteWishItem,
    onSuccess: () => {
      toast.success("Product removed from wishlist successfully");
      queryClient.invalidateQueries({ queryKey: WISHLIST_QUERY_KEY });
    },
    onError: (error) => {
      toast.error("Failed to remove product from wishlist");
      console.error("Error removing from wishlist:", error);
    },
  });

  return {
    ...wishlistQuery,
    items: wishlistQuery.data?.items ?? [],
    count: wishlistQuery.data?.count ?? 0,
    addToWish: addMutation.mutateAsync,
    removeFromWish: removeMutation.mutateAsync,
    isAdding: addMutation.isPending,
    isRemoving: removeMutation.isPending,
  };
}
