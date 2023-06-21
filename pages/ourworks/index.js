import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Wrapper from "@/components/Wrapper";
import { Empty, Select } from "antd";
import CustomSwiper from "@/components/CustomSwiper";
import CardProject from "@/components/CardProject";

const index = ({
  resData: {
    data: { portfolios, categories },
  },
}) => {

  const [isMobile, setIsMobile] = useState(false);
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
  const [activeCategory, setActiveCategory] = useState(1);
  
  const [filterProjects, setFilteredProjects] = useState([]);

 
const handleCategoryClick = (id) => {
  setActiveCategory(id);
  if (id === 1) {
    setFilteredProjects(portfolios);
  } else {
    const filter = portfolios.filter(
      (portfolio) => portfolio.category_id === id
    );
    setFilteredProjects(filter);
  }
};
useEffect(()=>{
  setFilteredProjects(portfolios);

},[])
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="pt-[162px] our-work ">
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
            {categories.map((category) => {
              return (
                <li
                  key={category.id}
                  className={`${
                    activeCategory === category.id ? "category-active" : ""
                  } p-4 text-[#000] text-[16px] font-medium cursor-pointer`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </li>
              );
            })}
          </ul>
          <Wrapper>
            {
              filterProjects.length != 0 ? (
                <CustomSwiper
                filterProjects={filterProjects}
              />
              )
              : <Empty />
            }
          
          </Wrapper>
        </>
      )}
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await fetch("https://new.8plusit.com/api");
  const resData = await res.json();

  return { props: { resData } };
}
