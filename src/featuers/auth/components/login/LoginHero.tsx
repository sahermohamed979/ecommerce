import Image from "next/image";
import cartPic from "../../../../assets/images/2e5810ff3e-e750761ebcd4ae5907db.png";

export default function LoginHero() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <Image src={cartPic} alt="Cart" />
            <h2 className="text-3xl font-bold text-gray-800">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <svg
                  data-prefix="fas"
                  data-icon="truck"
                  className="svg-inline--fa fa-truck text-primary-600 mr-2"
                  role="img"
                  viewBox="0 0 576 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                  ></path>
                </svg>
                Free Delivery
              </div>
              <div className="flex items-center">
                <svg
                  data-prefix="fas"
                  data-icon="shield-halved"
                  className="svg-inline--fa fa-shield-halved text-primary-600 mr-2"
                  role="img"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                  ></path>
                </svg>
                Secure Payment
              </div>
              <div className="flex items-center">
                <svg
                  data-prefix="fas"
                  data-icon="clock"
                  className="svg-inline--fa fa-clock text-primary-600 mr-2"
                  role="img"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                  ></path>
                </svg>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
