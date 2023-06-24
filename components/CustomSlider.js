import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick'

const CustomSlider = ({partners}) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
      };

  return (
    <Slider {...settings}>
    {partners.map((partner) => (
      <Image src={partner.image} key={partner.id} width={178} height={100} className='w-[178px] h-[200px] object-contain'/>
    ))}
  </Slider>
  )
}

export default CustomSlider





