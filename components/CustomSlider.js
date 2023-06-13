import React from 'react'
import Slider from 'react-slick'

const CustomSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
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
      const partners = [
        {
          img: "/images/works/client-1.png",
        },
        {
          img: "/images/works/client-2.png",
        },
        {
          img: "/images/works/client-3.png",
        },
        {
          img: "/images/works/client-4.png",
        },
        {
          img: "/images/works/client-5.png",
        },
        {
          img: "/images/works/client-6.png",
        },
    
        {
          img: "/images/works/client-7.png",
        },
        {
          img: "/images/works/client-8.png",
        },
        {
          img: "/images/works/client-10.png",
        },
        {
          img: "/images/works/client-11.png",
        },
        {
          img: "/images/works/client-12.png",
        },
        {
          img: "/images/works/client-13.png",
        },
      ];
  return (
    <Slider {...settings}>
    {partners.map((partner, index) => (
      <img src={partner.img} key={index} />
    ))}
  </Slider>
  )
}

export default CustomSlider