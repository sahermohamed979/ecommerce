"use client";

import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/featuers/cart/hooks/useCart";

export default function BuyNo({ id }: { id: string }) {
  const router = useRouter();
  const { addProduct } = useCart();

  return (
    <>
      <button
        id="buy-now"
        onClick={async () => {
          await addProduct(id);
          router.push("/cart");
        }}
        className="flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        <FontAwesomeIcon icon={faBolt} />
        Buy Now
      </button>
    </>
  );
}
