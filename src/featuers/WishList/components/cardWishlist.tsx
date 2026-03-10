import Link from "next/link";
import { WishlistItem } from "../types";
import Image from "next/image";
import DeleteButton from "./ui/deletButton";
import AddToCart from "./ui/addTocart";
import InCart from "./ui/inCart";
import { useCart } from "../../cart/hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function WishlistCard({ item }: { item: WishlistItem }) {
  const { items } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors">
      <div className="md:col-span-6 flex items-center gap-4">
        <Link
          className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
          href={`/products/${item._id}`}
        >
          {item.imageCover ? (
            <Image
              src={item.imageCover}
              alt={item.title}
              width={100}
              height={100}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            "no image"
          )}
        </Link>
        <div className="min-w-0">
          <Link
            className="font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
            href={`/products/${item._id}`}
          >
            {item.title}
          </Link>
          <p className="text-sm text-gray-400 mt-1"> {item.category?.name}</p>
        </div>
      </div>
      <div className="md:col-span-2 flex md:justify-center items-center gap-2">
        <span className="md:hidden text-sm text-gray-500">Price:</span>
        <div className="text-right md:text-center">
          <div className="font-semibold text-gray-900">{item.price} EGP</div>
        </div>
      </div>
      <div className="md:col-span-2 flex md:justify-center">
        <span className="md:hidden text-sm text-gray-500 mr-2">Status:</span>
        {item.quantity > 0 ? (
          <>
            {" "}
            {!items.find((cartItem) => cartItem.product._id === item._id) ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                In Stock
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-green-700">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-green-500"
                />{" "}
                In Cart
              </span>
            )}
          </>
        ) : (
          <>
            {" "}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              out of Stock
            </span>
          </>
        )}
      </div>
      <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
        {!items.find((cartItem) => cartItem.product._id === item._id) ? (
          <AddToCart id={item._id} />
        ) : (
          <>
            <InCart />
          </>
        )}
        <DeleteButton id={item._id} />
      </div>
    </div>
  );
}
