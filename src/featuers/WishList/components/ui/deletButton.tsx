"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWishlist } from "../../hooks/useWishlist";

export default function DeleteButton({ id }: { id: string }) {
  const { removeFromWish, isRemoving: loading } = useWishlist();

  return (
    <>
      <button
        onClick={async () => await removeFromWish(id)}
        disabled={loading}
        className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
}
