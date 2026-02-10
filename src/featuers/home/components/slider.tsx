"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import swiperImg from "../../../assets/images/home-slider-1.png";
import styles from "./slider.module.css";

export default function Slider() {
  const slides = [
    {
      id: 1,
      title: "Fast & Free Delivery",
      description: "Same day delivery available",
      buttonPrimary: { text: "Order Now", href: "/products" },
      buttonSecondary: { text: "Delivery Info", href: "/delivery" },
    },
    {
      id: 2,
      title: "Premium Quality Products",
      description: "Handpicked items just for you",
      buttonPrimary: { text: "Shop Now", href: "/products" },
      buttonSecondary: { text: "Learn More", href: "/about" },
    },
    {
      id: 3,
      title: "Special Offers",
      description: "Get up to 50% off on selected items",
      buttonPrimary: { text: "View Deals", href: "/products" },
      buttonSecondary: { text: "Contact Us", href: "/contact" },
    },
  ];

  return (
    <section className={`relative ${styles.sliderContainer}`}>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                backgroundImage: swiperImg && `url(${swiperImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="h-[500px] flex items-center justify-center"
            >
              <div className={`${styles.slideOverlay} py-20 text-white p-4 w-full h-full`}>
                <div className="container h-full content-center">
                  <div className={styles.slideContent}>
                    <h2 className={`text-white text-4xl md:text-5xl font-bold mb-6 max-w-2xl ${styles.slideTitle}`}>
                      {slide.title}
                    </h2>
                    <p className={`text-lg md:text-xl mb-8 ${styles.slideDescription}`}>
                      {slide.description}
                    </p>
                    <div className={`flex flex-wrap gap-4 ${styles.slideButtons}`}>
                      <a
                        className="btn bg-white hover:bg-gray-100 border-2 border-white/50 text-purple-600 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        href={slide.buttonPrimary.href}
                      >
                        {slide.buttonPrimary.text}
                      </a>
                      <a
                        className="btn bg-transparent hover:bg-white/10 border-2 border-white/70 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                        href={slide.buttonSecondary.href}
                      >
                        {slide.buttonSecondary.text}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
