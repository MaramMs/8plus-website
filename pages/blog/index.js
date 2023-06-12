import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import { Row } from "antd";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogs = [
    {
      img: "/images/works/blog1.png",
      date: " 31-5-2023",
      title:
        "Means of transportation between the client and the senior financial management",
      desc: "Means of transportation between the client and the senior financial managementMeans of transportation between the client and the senior financial management",
    },
    {
      img: "/images/works/blog1.png",
      date: " 31-5-2023",
      title:
        "Means of transportation between the client and the senior financial management",
      desc: "Means of transportation between the client and the senior financial managementMeans of transportation between the client and the senior financial management",
    },
    {
      img: "/images/works/blog1.png",
      date: " 31-5-2023",
      title:
        "Means of transportation between the client and the senior financial management",
      desc: "Means of transportation between the client and the senior financial managementMeans of transportation between the client and the senior financial management",
    },
    {
      img: "/images/works/blog1.png",
      date: " 31-5-2023",
      title:
        "Means of transportation between the client and the senior financial management",
      desc: "Means of transportation between the client and the senior financial managementMeans of transportation between the client and the senior financial management",
    },
    {
      img: "/images/works/blog1.png",
      date: " 31-5-2023",
      title:
        "Means of transportation between the client and the senior financial management",
      desc: "Means of transportation between the client and the senior financial managementMeans of transportation between the client and the senior financial management",
    },
    {
      img: "/images/works/blog1.png",
      date: " 31-5-2023",
      title:
        "Means of transportation between the client and the senior financial management",
      desc: "Means of transportation between the client and the senior financial managementMeans of transportation between the client and the senior financial management",
    },
  ];
  return (
    <div className="pt-[192px]">
      <Wrapper>
        <div className="bg-[#F9F9F9] h-[71px] mb-[50px]  pr-[20px] py-[18px] hidden md:block">
          <div className="flex items-center gap-[13px]">
            <span className="text-[#808080] text-[20px] font-medium">Home</span>

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

            <span className="text-[#808080] text-[20px] font-medium">
              Blogs
            </span>
          </div>
        </div>
        <div className="md:flex items-center justify-center gap-[11px] text-center">
          <h1 className="text-[#1768AC] md:text-[36px] font-semibold md:w-[15%] w-[100%]">
            Last Blogs
          </h1>
          <div className="bg-[#D1D1D1] md:h-[1px]  w-[85%]"></div>
        </div>

        <Row gutter={[24, 35]} className="mt-[55px]">
          {blogs.map((blog) => {
            return <BlogCard blog={blog} blogTitle="blog" />;
          })}
        </Row>

        <Link
          href={"/"}
          className="flex justify-center items-center my-20 mx-auto border cursor-pointer border-[#03256C] py-[9px] px-[29px] text-[#03256C] text-[14px] font-400 w-[130px] h-[50px]"
        >
          Show More
        </Link>
      </Wrapper>
    </div>
  );
};
export default Blog;
