'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderProps {
  slides?: {
    id: number;
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
  }[];
}

const defaultSlides = [
  {
    id: 1,
    title: 'Summer Collection 2024',
    description: 'Discover the latest trends in fashion',
    image: '/next.svg',
    buttonText: 'Shop Now',
    buttonLink: '#',
  },
  {
    id: 2,
    title: 'New Arrivals',
    description: 'Check out our newest products',
    image: '/vercel.svg',
    buttonText: 'Explore',
    buttonLink: '#',
  },
  {
    id: 3,
    title: 'Special Offers',
    description: 'Up to 50% off on selected items',
    image: '/next.svg',
    buttonText: 'View Deals',
    buttonLink: '#',
  },
];

export default function Slider({ slides = defaultSlides }: SliderProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-2xl overflow-hidden shadow-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-8 text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl drop-shadow-md">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !w-12 !h-12 !bg-white !rounded-full !shadow-lg after:!text-gray-900 after:!text-xl after:!font-bold hover:!bg-gray-100 !transition-all !duration-300"></div>
        <div className="swiper-button-next !w-12 !h-12 !bg-white !rounded-full !shadow-lg after:!text-gray-900 after:!text-xl after:!font-bold hover:!bg-gray-100 !transition-all !duration-300"></div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-6 [&_.swiper-pagination-bullet]:!w-3 [&_.swiper-pagination-bullet]:!h-3 [&_.swiper-pagination-bullet]:!bg-white [&_.swiper-pagination-bullet]:!opacity-60 [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet]:!duration-300"></div>
      </Swiper>

      {/* Custom Styles for better navigation */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          transition: all 0.3s ease;
        }
        
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          transform: scale(1.1);
        }

        .swiper-button-prev {
          left: 20px !important;
        }

        .swiper-button-next {
          right: 20px !important;
        }

        .swiper-pagination-bullet {
          border-radius: 10px;
        }

        .swiper-pagination-bullet-active {
          border-radius: 10px;
        }

        @media (max-width: 640px) {
          .swiper-button-prev,
          .swiper-button-next {
            width: 40px !important;
            height: 40px !important;
          }
          
          .swiper-button-prev {
            left: 10px !important;
          }

          .swiper-button-next {
            right: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
