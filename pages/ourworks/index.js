import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Work from "@/components/Work";
import Wrapper from "@/components/Wrapper";

const index = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };
  return (
    <div className="pt-[162px]">
      <ul className="flex m-auto items-center justify-around border border-[#1768AC] rounded-[39.5px] md:w-[850px]">
        <Link href="/">
          <li className="p-4 text-[#000] text-[16px] font-medium">Home</li>
        </Link>

        <Link href="/">
          <li className="p-4 text-[#000] text-[16px] font-medium">Marketing</li>
        </Link>
        <Link href="/">
          <li className="p-4 text-[#000] text-[16px] font-medium">Home</li>
        </Link>
        <Link href="/">
          <li className="p-4 text-[#000] text-[16px] font-medium">Home</li>
        </Link>
      </ul>
      {/* <div className="container md:my-[72px]"> */}
      <Wrapper>

        <Swiper
          // effect={"coverflow"}
          spaceBetween={24}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            // depth: 100,
            // modifier: 2.5,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true, // Add this line for dots pagination
          }}
          onSlideChange={handleSlideChange}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide           
          >
            <img src="/images/works/work3.png" alt="slide_image" />
           <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
           <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
            <span className="text-[#1768AC] text-[24px] font-medium">design</span>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/works/work4.png" alt="slide_image" />

            <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
           <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
            <span className="text-[#1768AC] text-[24px] font-medium">design</span>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/works/work5.png" alt="slide_image" />
            <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
           <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
            <span className="text-[#1768AC] text-[24px] font-medium">design</span>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/works/work4.png" alt="slide_image" />
            <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
           <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
            <span className="text-[#1768AC] text-[24px] font-medium">design</span>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/works/work5.png" alt="slide_image" />
            <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
           <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
            <span className="text-[#1768AC] text-[24px] font-medium">design</span>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/works/work3.png" alt="slide_image" />
            <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
           <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
            <span className="text-[#1768AC] text-[24px] font-medium">design</span>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/works/work4.png" alt="slide_image" />
            <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
           <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
            <span className="text-[#1768AC] text-[24px] font-medium">design</span>
           </div>
          </SwiperSlide>

          <div className="swiper-pagination"></div>
        </Swiper>

{/* 
<Swiper
  effect={"coverflow"}
  spaceBetween={24} // Set the gap between items to 24px
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={3}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
  }}
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
  onSlideChange={handleSlideChange}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="swiper_container"
>
  <SwiperSlide
    style={{ marginTop: "217px" }} // Add margin-top to the middle item
  >
    <img src="/images/works/work3.png" alt="slide_image" />
    <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px]">
      <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
      <span className="text-[#1768AC] text-[24px] font-medium">design</span>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <img src="/images/works/work4.png" alt="slide_image" />
    <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px]">
      <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
      <span className="text-[#1768AC] text-[24px] font-medium">design</span>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <img src="/images/works/work5.png" alt="slide_image" />
    <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px]">
      <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
      <span className="text-[#1768AC] text-[24px] font-medium">design</span>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <img src="/images/works/work4.png" alt="slide_image" />
    <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px]">
      <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
      <span className="text-[#1768AC] text-[24px] font-medium">design</span>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <img src="/images/works/work5.png" alt="slide_image" />
    <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px]">
      <h3 className="text-[#000] text-[15px] font-semibold">marketing</h3>
      <span className="text-[#1768AC] text-[24px] font-medium">design</span>
    </div>
  </SwiperSlide>
   </Swiper> */}

      {/* </div> */}

      </Wrapper>

    </div>
  );
};

export default index;
