"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import swiperImg from "../../../assets/images/home-slider-1.png";
export default function Slider() {
  return (
    <>
      <section>
        <Swiper navigation={true} modules={[Navigation]}>
          <SwiperSlide className="bg-green-300 ">
            <div
              className="swiper-slide swiper-slide-active"
              style={{ width: 1905 }}
            >
              <div
                style={{
                  backgroundImage: swiperImg && `url(${swiperImg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-[400px] flex items-center justify-center"
              >
                <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                  <div className="container h-full content-center">
                    <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                      Fast &amp; Free Delivery
                    </h2>
                    <p>Same day delivery available</p>
                    <div className="mt-4">
                      <a
                        className="btn bg-white border-2 border-white/50 text-purple-500"
                        href="/products"
                      >
                        Order Now
                      </a>
                      <a
                        className="btn bg-transparent border-2 border-white/50 text-white ml-2"
                        href="/delivery"
                      >
                        Delivery Info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-green-300"> <div
              className="swiper-slide swiper-slide-active"
              style={{ width: 1905 }}
            >
              <div
                style={{
                  backgroundImage: swiperImg && `url(${swiperImg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-[400px] flex items-center justify-center"
              >
                <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                  <div className="container h-full content-center">
                    <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                      Fast &amp; Free Delivery
                    </h2>
                    <p>Same day delivery available</p>
                    <div className="mt-4">
                      <a
                        className="btn bg-white border-2 border-white/50 text-purple-500"
                        href="/products"
                      >
                        Order Now
                      </a>
                      <a
                        className="btn bg-transparent border-2 border-white/50 text-white ml-2"
                        href="/delivery"
                      >
                        Delivery Info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide className="bg-green-300"> <div
              className="swiper-slide swiper-slide-active"
              style={{ width: 1905 }}
            >
              <div
                style={{
                  backgroundImage: swiperImg && `url(${swiperImg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-[400px] flex items-center justify-center"
              >
                <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                  <div className="container h-full content-center">
                    <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                      Fast &amp; Free Delivery
                    </h2>
                    <p>Same day delivery available</p>
                    <div className="mt-4">
                      <a
                        className="btn bg-white border-2 border-white/50 text-purple-500"
                        href="/products"
                      >
                        Order Now
                      </a>
                      <a
                        className="btn bg-transparent border-2 border-white/50 text-white ml-2"
                        href="/delivery"
                      >
                        Delivery Info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div></SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
