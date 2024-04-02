"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SilderPerView: React.FC<Number> = ({ perpage }) => {
  return (
    <section className="h-auto w-[90vw]">
      <div className="h-auto w-full">
        <Swiper
          navigation
          slidesPerView={perpage}
          spaceBetween={10}
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="hidden md:block"
        >
          <SwiperSlide className=" bg-orange-300 text-center">
            <div className="flex h-[300px] items-center justify-center transition-all hover:scale-150">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-orange-300 text-center">
            <div className="flex h-[300px] items-center justify-center transition-all hover:scale-150">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-orange-300 text-center">
            <div className="flex h-[300px] items-center justify-center transition-all hover:scale-150">
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-orange-300 text-center">
            <div className="flex h-[300px] items-center justify-center transition-all hover:scale-150">
              Slide 4
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-orange-300 text-center">
            <div className="flex h-[300px] items-center justify-center transition-all hover:scale-150">
              Slide 5
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-orange-300 text-center">
            <div className="flex h-[300px] items-center justify-center transition-all hover:scale-150">
              Slide 6
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-orange-300 text-center">
            <div className="flex h-[300px] items-center justify-center transition-all hover:scale-150">
              Slide 7
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-orange-300 text-center">
            <div className="flex h-[300px] items-center justify-center transition-all hover:scale-150">
              Slide 8
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SilderPerView;
