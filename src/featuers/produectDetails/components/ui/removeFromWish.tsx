import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWishlist } from "../../../WishList/hooks/useWishlist";

export default function RemoveFromWish({ id }: { id: string }) {
  const { removeFromWish, isRemoving: loading } = useWishlist();

  return (
    <>
      {" "}
      <button
        id="wishlist-button"
        onClick={async () => await removeFromWish(id)}
        disabled={loading}
        className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-red-200 text-red-600 bg-red-50"
      >
        <FontAwesomeIcon icon={faHeart} />
        Remove from Wishlist
      </button>
    </>
  );
}
