import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="w-full">
        {/* Hero Slider Section */}
        <section className="bg-white dark:bg-gray-800 shadow-md">
          <Slider />
        </section>

        {/* Additional Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Our E-Commerce Store
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience a modern shopping interface with our interactive slider featuring navigation buttons and pagination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Fast Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quick delivery to your doorstep
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Quality Products</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Premium selection for our customers
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Best Prices</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Competitive pricing on all items
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
