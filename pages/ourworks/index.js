import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Wrapper from "@/components/Wrapper";
import { Select } from "antd";
import Footer from "@/components/Footer";

const index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="pt-[162px] our-work">
  {
    isMobile ? (
      
 <>
   <Wrapper>
   <Select
      defaultValue="React Developer"
      onChange={handleChange}
      style={
        {
          border:'1px solid #1768AC',
          borderRadius:'29.5px',
          width:'242px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          margin:'auto'

        }
      }
      // className="border border-[#1768AC] rounded-[29.5px] m-auto  w-[242px] flex"
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />

    <div className="flex flex-col mt-[75px]">

    <img src="/images/works/mb-work.png" alt="slide_image" />

<div className="flex justify-center items-center flex-col mt-[43.5px] mb-[63px] ">
  <h3 className="text-[#000] text-[15px] font-semibold">
    marketing
  </h3>
  <span className="text-[#1768AC] text-[24px] font-medium">
    design
  </span>
</div>
    </div>

    <div className="flex flex-col ">

<img src="/images/works/mb-work.png" alt="slide_image" />

<div className="flex justify-center items-center flex-col mt-[43.5px] mb-[63px]  ">
<h3 className="text-[#000] text-[15px] font-semibold">
marketing
</h3>
<span className="text-[#1768AC] text-[24px] font-medium">
design
</span>
</div>
</div>


<div className="flex flex-col">

<img src="/images/works/mb-work.png" alt="slide_image" />

<div className="flex justify-center items-center flex-col mt-[43.5px] mb-[63px]  ">
<h3 className="text-[#000] text-[15px] font-semibold">
marketing
</h3>
<span className="text-[#1768AC] text-[24px] font-medium">
design
</span>
</div>
</div>


<div className="flex flex-col ">

<img src="/images/works/mb-work.png" alt="slide_image" />

<div className="flex justify-center items-center flex-col mt-[43.5px] mb-[63px]  ">
<h3 className="text-[#000] text-[15px] font-semibold">
marketing
</h3>
<span className="text-[#1768AC] text-[24px] font-medium">
design
</span>
</div>
</div>
   </Wrapper>

   <Footer />
 </>
    ) :(

      <>
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
  <Wrapper>
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
        dynamicBullets: true, // Add this line for dots pagination
      }}
      breakpoints={{
        // For screens smaller than 640px
        640: {
          slidesPerView: 1,
        },
        // For screens between 640px and 768px
        768: {
          slidesPerView: 2,
        },
        // For larger screens
        1024: {
          slidesPerView: 3,
        },
      }}
      // onSlideChange={handleSlideChange}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src="/images/works/work3.png" alt="slide_image" />
        <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
          <h3 className="text-[#000] text-[15px] font-semibold">
            marketing
          </h3>
          <span className="text-[#1768AC] text-[24px] font-medium">
            design
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/works/work4.png" alt="slide_image" />

        <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
          <h3 className="text-[#000] text-[15px] font-semibold">
            marketing
          </h3>
          <span className="text-[#1768AC] text-[24px] font-medium">
            design
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/works/work5.png" alt="slide_image" />
        <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
          <h3 className="text-[#000] text-[15px] font-semibold">
            marketing
          </h3>
          <span className="text-[#1768AC] text-[24px] font-medium">
            design
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/works/work4.png" alt="slide_image" />
        <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
          <h3 className="text-[#000] text-[15px] font-semibold">
            marketing
          </h3>
          <span className="text-[#1768AC] text-[24px] font-medium">
            design
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/works/work5.png" alt="slide_image" />
        <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
          <h3 className="text-[#000] text-[15px] font-semibold">
            marketing
          </h3>
          <span className="text-[#1768AC] text-[24px] font-medium">
            design
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/works/work3.png" alt="slide_image" />
        <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
          <h3 className="text-[#000] text-[15px] font-semibold">
            marketing
          </h3>
          <span className="text-[#1768AC] text-[24px] font-medium">
            design
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/works/work4.png" alt="slide_image" />
        <div className="flex justify-center items-center flex-col mt-[61px] mb-[261px] ">
          <h3 className="text-[#000] text-[15px] font-semibold">
            marketing
          </h3>
          <span className="text-[#1768AC] text-[24px] font-medium">
            design
          </span>
        </div>
      </SwiperSlide>

      <div className="swiper-pagination"></div>
    </Swiper>
  </Wrapper>
  </>
    )
  }
    </div>
  );
};

export default index;
