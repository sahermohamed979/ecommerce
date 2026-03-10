import { getProducts } from "../servers/Featured.product.actions";
import ProductCard from "./productCard";
import Link from "next/link";
export default async function FeaturedProducts() {
  const response = await getProducts();

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3 my-8">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
              <h2 className="text-3xl font-bold text-gray-800">
                Featured
                <span className="text-emerald-600"> Products </span>
              </h2>
            </div>{" "}
            <Link
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center cursor-pointer"
              href="/shop"
            >
              View All Product
              <svg
                data-prefix="fas"
                data-icon="arrow-right"
                className="svg-inline--fa fa-arrow-right ml-2"
                role="img"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {response?.data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
