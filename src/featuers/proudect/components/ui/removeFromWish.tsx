import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWishlist } from "../../../WishList/hooks/useWishlist";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function RemoveFromWish({ id }: { id: string }) {
  const { removeFromWish, isRemoving } = useWishlist();

  return (
    <>
      <button
        onClick={async () => await removeFromWish(id)}
        disabled={isRemoving}
        className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-red-500 hover:text-red-600"
        title="Remove from wishlist"
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faHeart} className="text-red-600" />
      </button>
    </>
  );
}
