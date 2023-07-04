import BlogCard from "@/components/BlogCard";
import Wrapper from "@/components/Wrapper";
import { Button, Row } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Blog = ({ resData: { data } }) => {
  const {t} = useTranslation();
  const [numItemsToShow , setNumItemsToShow] = useState(6);
  const handleShowMore =() =>{
    setNumItemsToShow(data.length);
  }
  return (
    <div className="pt-[85px] md:pt-[192px]">
      <Wrapper>
        <div className="bg-[#F9F9F9] h-[71px] mb-[50px]  pr-[20px] py-[18px] hidden md:block">
          <div className="flex items-center gap-[13px]">
            <span className="text-[#808080] text-[20px] font-medium">{t('home')}</span>

            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.83301 12.6667L0.999674 6.83333L6.83301 1"
                stroke="#808080"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-[#1768AC] text-[20px] font-medium">
              {t('blogs')}
            </span>
          </div>
        </div>
        <div className="md:flex items-center justify-center gap-[11px] text-center">
          <h1 className="text-[#1768AC] text-[36px] font-semibold md:w-[15%] w-[100%]">
            {t('last_blogs')}
          </h1>
          <div className="bg-[#D1D1D1] md:h-[1px]  w-[85%]"></div>
        </div>

        <Row gutter={[24, 35]} className="mt-[55px]">
          {data.slice(0,numItemsToShow).map((item) => {
            return <BlogCard item={item} blogTitle="blog" />;
          })}
        </Row>

        <Button
        onClick={handleShowMore}
        className="flex justify-center items-center my-20 mx-auto border cursor-pointer border-[#03256C] py-[9px] px-[29px] text-[#03256C] text-[14px] font-400 w-[130px] h-[50px]"
      >
        {t('show_more')}
      </Button>

     
      </Wrapper>
    </div>
  );
};
export default Blog;

export async function getServerSideProps() {
  const res = await fetch("https://new.8plusit.com/api/posts");
  const resData = await res.json();
  return { props: { resData } };
}
