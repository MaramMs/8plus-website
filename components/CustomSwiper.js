import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Link from "next/link";
import CardProject from "./CardProject";

const CustomSwiper = ({portfolios}) => {
  
 

  return (
    <Swiper
      spaceBetween={24}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {portfolios.map((protfolio, index) => {
        return (
          <SwiperSlide key={index}>
            <CardProject protfolio={protfolio}/>
          </SwiperSlide>
        );
      })}

      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default CustomSwiper;
