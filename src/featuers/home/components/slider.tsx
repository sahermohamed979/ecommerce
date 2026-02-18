"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import swiperImg from "../../../assets/images/home-slider-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
  const slides = [
    {
      id: 1,
      title: "Fresh Products Delivered to your Door",
      description: "Get 20% off your first order",
      buttonPrimary: {
        text: "Shop Now",
        href: "/products",
        color: "text-green-500",
      },
      buttonSecondary: { text: "View Deals", href: "/deals" },
    },
    {
      id: 2,
      title: "Premium Quality Guaranteed",
      description: "Fresh from farm to your table",
      buttonPrimary: {
        text: "Shop Now",
        href: "/products",
        color: "text-blue-500",
      },
      buttonSecondary: { text: "Learn More", href: "/about" },
    },
    {
      id: 3,
      title: "Fast & Free Delivery",
      description: "Same day delivery available",
      buttonPrimary: {
        text: "Order Now",
        href: "/products",
        color: "text-purple-500",
      },
      buttonSecondary: { text: "Delivery Info", href: "/delivery" },
    },
  ];

  return (
    <div className="relative">
      <Swiper
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                backgroundImage: `url(${swiperImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="h-[400px] flex items-center justify-center"
            >
              <div className="overlay py-20 text-white p-4 w-full h-full bg-gradient-to-r from-green-500/90 to-green-400/50">
                <div className="container h-full content-center">
                  <h2 className="text-white text-3xl font-bold mb-4 max-w-96 animate-[slideInUp_0.8s_ease-out_0.2s_both]">
                    {slide.title}
                  </h2>
                  <p className="animate-[slideInUp_0.8s_ease-out_0.4s_both]">
                    {slide.description}
                  </p>
                  <div className="mt-4 animate-[slideInUp_0.8s_ease-out_0.6s_both]">
                    <a
                      className={`btn bg-white border-2 border-white/50 ${slide.buttonPrimary.color} inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                      href={slide.buttonPrimary.href}
                    >
                      {slide.buttonPrimary.text}
                    </a>
                    <a
                      className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-white/10"
                      href={slide.buttonSecondary.href}
                    >
                      {slide.buttonSecondary.text}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
        <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
      </div>

      <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
        <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
      </div>
    </div>
  );
}
