import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation,Autoplay } from "swiper";
import Link from "next/link";
import CardProject from "./CardProject";
import { Empty } from "antd";
import Wrapper from "./Wrapper";
import { EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CustomSwiper = ({ portfolios, filterProjects }) => {
  console.log(filterProjects, "filter");
  console.log(filterProjects.length,'filterProjects.length');
  const num =Math.floor(filterProjects.length / 2);
 
  console.log(num , 'num');

  return (
    <Swiper
    initialSlide={num}
    pagination={{
      clickable: true,
    }}
    centeredSlidesBounds={true}
    centeredSlides={true}
    spaceBetween={50}
    // grabCursor={true}
    // centeredSlides={true}
    // loop={true}
    slidesPerView={3}
    // navigation={{
    //   nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //     clickable: true,
    //   }}
    //   pagination={{
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    //   }}
      // breakpoints={{
      //   640: {
      //     slidesPerView: 1,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //   },
      // }}
    
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination,Autoplay]}
      // className="swiper_container"
    >
      {filterProjects.map((filterProject, index) => {
        return (
           
          
          <SwiperSlide key={index}     className="swiper_container">
            <CardProject filterProject={filterProject} />
          </SwiperSlide>
 
        )
      })}

      {/* <div className="swiper-pagination"></div> */}
    </Swiper>

  
  );
};

export default CustomSwiper;
