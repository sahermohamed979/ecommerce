"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../../hooks/useCart";

export default function ClearButton() {
  const { clearCart, isClearing } = useCart();

  return (
    <>
      <button
        onClick={async () => await clearCart()}
        disabled={isClearing}
        className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
      >
        <FontAwesomeIcon icon={faTrash} />

        <span>Clear all items</span>
      </button>
    </>
  );
}
