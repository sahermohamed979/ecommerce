"use client";
import { useCart } from "@/src/featuers/cart/hooks/useCart";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddToCart({ id }: { id: string }) {
  const { addProduct, isAdding } = useCart();
  return (
    <>
      <button
        className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-primary-600 text-white hover:bg-primary-700"
        onClick={async () => await addProduct(id)}
        disabled={isAdding}
      >
        <FontAwesomeIcon icon={faCartShopping} />

        <span className="md:hidden lg:inline">Add to Cart</span>
      </button>
    </>
  );
}
