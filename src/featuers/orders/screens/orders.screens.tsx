import Link from "next/link";
import CardOrder from "../components/cardOrder";
import { getOrders } from "../servers/order.action";
import { VerifyToken } from "../../auth/servers/Auth.actions";
import { Order } from "../types";

export default async function OrdersScreens() {
  const { userInfo } = await VerifyToken();
  const orders = await getOrders(userInfo?.id || "");

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link className="hover:text-primary-600 transition" href="/">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">My Orders</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/25">
                <svg
                  data-prefix="fas"
                  data-icon="box"
                  className="svg-inline--fa fa-box text-2xl text-white"
                  role="img"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  My Orders
                </h1>
                <p className="text-gray-500 text-sm mt-0.5">
                  Track and manage your {orders.length} orders
                </p>
              </div>
            </div>
            <Link
              className="self-start sm:self-auto text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-primary-50 transition-all text-sm"
              href="/"
            >
              <svg
                data-prefix="fas"
                data-icon="bag-shopping"
                className="svg-inline--fa fa-bag-shopping text-xs"
                role="img"
                viewBox="0 0 448 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          {orders?.map((order: Order) => (
            <CardOrder key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}
