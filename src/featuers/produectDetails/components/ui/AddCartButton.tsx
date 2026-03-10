import { useCart } from "@/src/featuers/cart/hooks/useCart";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function AddCartButton({
  id,
  quantity,
}: {
  id: string | undefined;
  quantity?: number;
}) {
  const { addProduct, isAdding, updateQuantity } = useCart();

  return (
    <button
      onClick={async () => {
        await addProduct(id!);
        updateQuantity({ productId: id!, count: quantity ? quantity : 1 });
      }}
      disabled={isAdding}
      id="add-to-cart"
      className="flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-primary-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25 bg-primary-600 disabled:opacity-50"
    >
      <FontAwesomeIcon icon={faCartShopping} />
      {isAdding ? "Adding..." : "Add to Cart"}
    </button>
  );
}
