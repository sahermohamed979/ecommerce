import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col items-center justify-center px-4 py-20">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative text-center max-w-lg mx-auto">
        {/* 404 number */}
        <div className="relative inline-block mb-6">
          <span className="text-[10rem] sm:text-[12rem] font-black leading-none bg-gradient-to-br from-primary-600 via-primary-500 to-emerald-400 bg-clip-text text-transparent select-none">
            404
          </span>
          {/* floating cart icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-3xl bg-white shadow-2xl shadow-primary-200 flex items-center justify-center ring-1 ring-primary-100 animate-bounce">
            <svg
              data-prefix="fas"
              data-icon="cart-shopping"
              className="svg-inline--fa fa-cart-shopping text-3xl text-primary-500"
              role="img"
              viewBox="0 0 576 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Oops! Page not found
        </h1>
        <p className="text-gray-500 text-base sm:text-lg mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to shopping!
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-200 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg
              data-prefix="fas"
              data-icon="house"
              className="svg-inline--fa fa-house text-sm"
              role="img"
              viewBox="0 0 576 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg
              data-prefix="fas"
              data-icon="bag-shopping"
              className="svg-inline--fa fa-bag-shopping text-sm text-primary-500"
              role="img"
              viewBox="0 0 448 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-46.9 0c-17 0-31.5 12.3-33.8 29.1l-32 256C-2.4 463.9 14.1 480 34.3 480l379.4 0c20.2 0 36.7-16.1 34.9-36.1l-32-256c-2.3-16.8-16.8-29.1-33.8-29.1L336 160l0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
              />
            </svg>
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
