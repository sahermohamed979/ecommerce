import { faHeart, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWishlist } from "../../../WishList/hooks/useWishlist";

export default function AddWishlist({ id }: { id: string }) {
  const { addToWish, isAdding: loading } = useWishlist();

  return (
    <>
      {" "}
      <button
        id="wishlist-button"
        onClick={async () => await addToWish(id)}
        disabled={loading}
        className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600"
      >
        {loading ? (
          <>
            <FontAwesomeIcon icon={faSpinner} spin />
            Adding...
          </>
        ) : (
          <>
            {" "}
            <FontAwesomeIcon icon={faHeart} />
            Add to Wishlist
          </>
        )}
      </button>
    </>
  );
}
