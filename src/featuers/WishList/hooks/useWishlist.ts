"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getWishlist,
  getGuestWishlist,
  addToWish,
  deleteWishItem,
} from "../servers/wishlist.action";
import { toast } from "react-toastify";
import { useAuthStore } from "../../auth/store/auth.slice";
import { WishlistResponse } from "../types";

export const WISHLIST_QUERY_KEY = ["wishlist"];

export function useWishlist() {
  const queryClient = useQueryClient();
  const { isAuthenticated } = useAuthStore();

  const wishlistQuery = useQuery({
    queryKey: WISHLIST_QUERY_KEY,
    queryFn: isAuthenticated ? getWishlist : getGuestWishlist,
    select: (data) => ({
      items: data?.data ?? [],
      count: data?.count ?? data?.data?.length ?? 0,
    }),
  });

  const addMutation = useMutation({
    mutationFn: addToWish,
    onSuccess: (data) => {
      toast.success("Product added to wishlist successfully");
      if (data) {
        queryClient.setQueryData(WISHLIST_QUERY_KEY, data);
      } else {
        queryClient.invalidateQueries({ queryKey: WISHLIST_QUERY_KEY });
      }
    },
    onError: (error) => {
      toast.error("Failed to add product to wishlist");
      console.error("Error adding to wishlist:", error);
    },
  });

  const removeMutation = useMutation({
    mutationFn: deleteWishItem,
    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey: WISHLIST_QUERY_KEY });
      const previous =
        queryClient.getQueryData<WishlistResponse>(WISHLIST_QUERY_KEY);
      queryClient.setQueryData<WishlistResponse | undefined>(
        WISHLIST_QUERY_KEY,
        (old) => {
          if (!old) return old;
          const data = old.data.filter((item) => item._id !== productId);
          return { ...old, data, count: data.length };
        },
      );
      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(WISHLIST_QUERY_KEY, context.previous);
      }
      toast.error("Failed to remove product from wishlist");
    },
    onSuccess: (data) => {
      toast.success("Product removed from wishlist successfully");
      if (data) {
        queryClient.setQueryData(WISHLIST_QUERY_KEY, data);
      } else {
        queryClient.invalidateQueries({ queryKey: WISHLIST_QUERY_KEY });
      }
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
