import Image from "next/image";
import person from "../../../../assets/images/review-author.png";
import { faShield, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SignupHero() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-primary-600">FreshCart</span>
        </h1>
        <p className="text-xl mt-2 mb-4">
          Join thousands of happy customers who enjoy fresh groceries delivered
          right to their doorstep.
        </p>
        <ul className="*:flex *:items-start *:gap-4 space-y-6 my-8">
          <li>
            <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={faStar} className="text-primary-600" />
            </div>
            <div className="content">
              <h2 className="text-lg font-semibold">Premium Quality</h2>
              <p className="text-gray-600">
                Premium quality products sourced from trusted suppliers.
              </p>
            </div>
          </li>
          <li>
            <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={faTruck} className="text-primary-600" />
            </div>
            <div className="content">
              <h2 className="text-lg font-semibold">Fast Delivery</h2>

              <p className="text-gray-600">
                Same-day delivery available in most areas
              </p>
            </div>
          </li>
          <li>
            <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
              {" "}
              <FontAwesomeIcon icon={faShield} className="text-primary-600" />
            </div>
            <div className="content">
              <h2 className="text-lg font-semibold">Secure Shopping</h2>
              <p className="text-gray-600">
                Your data and payments are completely secure
              </p>
            </div>
          </li>
        </ul>
        <div className="review bg-white shadow-sm p-4 rounded-md">
          <div className="author flex items-center gap-4 mb-4">
            <Image
              alt=""
              loading="lazy"
              width="512"
              height="512"
              decoding="async"
              data-nimg="1"
              className="size-12 rounded-full"
              src={person}
              style={{ color: "transparent" }}
            />
            <div>
              <h3>Sarah Johnson</h3>
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />

              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />

              <div className="rating *:text-yellow-300"></div>
            </div>
          </div>
          <blockquote>
            <p className="italic text-gray-600">
              &ldquo;FreshCart has transformed my shopping experience. The
              quality of the products is outstanding, and the delivery is always
              on time. Highly recommend!&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </>
  );
}
