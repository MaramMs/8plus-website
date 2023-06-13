import Link from "next/link";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Wrapper from "@/components/Wrapper";
import { Select } from "antd";
import Footer from "@/components/Footer";
import CustomSwiper from "@/components/CustomSwiper";
import CardProject from "@/components/CardProject";

const index = () => {
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      img: "/images/works/work3.png",
      title: "React Project",
      desc: "web site description",
    },
    {
      img: "/images/works/work3.png",
      title: "React Project",
      desc: "web site description",
    },
    {
      img: "/images/works/work3.png",
      title: "React Project",
      desc: "web site description",
    },
    {
      img: "/images/works/work3.png",
      title: "React Project",
      desc: "web site description",
    },
    {
      img: "/images/works/work3.png",
      title: "React Project",
      desc: "web site description",
    },
    {
      img: "/images/works/work3.png",
      title: "React Project",
      desc: "web site description",
    },
  ];

  const categories = [
    {
      id: 1,
      category: "Front End",
    },
    {
      id: 2,
      category: "UI/UX",
    },
    {
      id: 3,
      category: "Back End",
    },

    {
      id: 4,
      category: "Marketing",
    },

    {
      id: 5,
      category: "Mobile App",
    },
    {
      id: 6,
      category: "Social",
    },
  ];
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="pt-[162px] our-work">
      {isMobile ? (
        <>
          <Wrapper>
            <Select
              defaultValue="React Developer"
              onChange={handleChange}
              style={{
                border: "1px solid #1768AC",
                borderRadius: "29.5px",
                width: "242px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto auto 89px auto",
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />

            {projects.map((project) => {
              return (
                <div className="flex flex-col ">
                  <CardProject project={project} />
                </div>
              );
            })}
          </Wrapper>

        </>
      ) : (
        <>
          <ul className="flex m-auto items-center justify-around border border-[#1768AC] rounded-[39.5px] md:w-[850px]">
            {categories.map(({ id, category }) => {
              return (
                <li
                  key={id}
                  className={`${
                    activeCategory === id ? "category-active" : ""
                  } p-4 text-[#000] text-[16px] font-medium cursor-pointer`}
                  onClick={() => handleCategoryClick(id)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
          <Wrapper>
            <CustomSwiper projects={projects} />
          </Wrapper>
        </>
      )}
    </div>
  );
};

export default index;
