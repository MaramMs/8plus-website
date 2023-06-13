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
          img: "/images/parenter.png",
        },
        {
          img: "/images/parenter.png",
        },
        {
          img: "/images/parenter.png",
        },
        {
          img: "/images/parenter.png",
        },
        {
          img: "/images/parenter.png",
        },
        {
          img: "/images/parenter.png",
        },
    
        {
          img: "/images/parenter.png",
        },
        {
          img: "/images/parenter.png",
        },
        {
          img: "/images/parenter.png",
        },
        {
          img: "/images/parenter.png",
        },
        {
          img: "/images/parenter.png",
        },
        {
          img: "/images/parenter.png",
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