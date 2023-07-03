import BlogCard from "@/components/BlogCard";
import CustomModal from "@/components/CustomModal";
import Wrapper from "@/components/Wrapper";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const BlogDetails = ({ resData: { data } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();
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

  const handleClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="pt-[160px]">
      <Wrapper>
        <div className="bg-[#F9F9F9] h-[71px] mb-[50px]  pr-[20px] py-[18px] hidden md:block">
          <div className="flex items-center gap-[13px]">
            <Link href="/blog">
              <span className="text-[#808080] text-[20px] font-medium">
                {t("blogs")}
              </span>
            </Link>

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
              {data.title}
            </span>
          </div>
        </div>
        <Row gutter={[24, 24]}>
          <Col md={{ span: 14 }}>
            <h1
              className={
                isMobile
                  ? "text-[#000] text-[20px] font-semibold text-center mb-[35px]"
                  : "text-[#03256C] md:text-[36px] font-semibold md:mb-[12px] text-center md:text-right"
              }
            >
              {data.title}
            </h1>

            <div className="flex flex-col">
              <Image
                src={data.image}
                width={781}
                height={423}
                className="	object-cover max-w-[100%] w-[100%] h-[423px]"
              />

              <div className="bg-[#1768AC] px-[19px] py-[12px] flex items-center justify-end gap-[6px]">
                <Button 
                onClick={handleClick}
                className="border-none"
                >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.86 4.6528L11.5266 0.152797C11.4574 0.0811748 11.3685 0.0318135 11.2711 0.011027C11.1737 -0.00975958 11.0724 -0.00102629 10.98 0.0361098C10.8875 0.0734432 10.8082 0.137555 10.7524 0.220225C10.6966 0.302895 10.6667 0.400355 10.6666 0.50011V2.66686H10.5C6.916 2.66686 4 5.58286 4 9.16686V10.1669C4 10.3988 4.16331 10.5922 4.38928 10.6449C4.42603 10.6542 4.46266 10.6582 4.49928 10.6582C4.688 10.6582 4.86866 10.5475 4.95594 10.3735C5.89331 8.49814 7.77794 7.33349 9.87462 7.33349H10.6666V9.50011C10.6666 9.59981 10.6964 9.69724 10.7523 9.77983C10.8081 9.86242 10.8874 9.92638 10.98 9.96349C11.1673 10.0401 11.3853 9.99352 11.5266 9.8468L15.86 5.3468C16.0466 5.15283 16.0466 4.84752 15.86 4.65283V4.6528Z"
                    fill="white"
                  />
                  <path
                    d="M14 16.0001H2C0.897344 16.0001 0 15.1029 0 14.0001V4.66684C0 3.56418 0.897344 2.66684 2 2.66684H4C4.36866 2.66684 4.66663 2.96481 4.66663 3.33346C4.66663 3.70212 4.36866 4.00009 4 4.00009H2C1.63197 4.00009 1.33325 4.29881 1.33325 4.66684V14.0001C1.33325 14.3681 1.63197 14.6668 2 14.6668H14C14.3679 14.6668 14.6666 14.3681 14.6666 14.0001V8.66684C14.6666 8.29818 14.9646 8.00009 15.3333 8.00009C15.702 8.00009 16 8.29818 16 8.66684V14.0001C16 15.1029 15.1027 16.0001 14 16.0001Z"
                    fill="white"
                  />
                </svg>

                </Button>

                <span
                  className="text-[#fff] text-[14px]"
               
                >
                  Share the blog
                </span>
              </div>
              {
                isModalOpen && <CustomModal setIsModalOpen={setIsModalOpen} handleClick={handleClick} isModalOpen={isModalOpen} url={`https://gleaming-crumble-a6b5ed.netlify.app/blog/${data.id}`} title={data.title}/>
              }
              <div
                dangerouslySetInnerHTML={{ __html: data.description }}
                className="md:mt-[26px] text-[#808080] text-[14px] md:text-[16px] md:mb-[224px] break-words"
              />
            </div>
          </Col>

          <Col md={{ span: 9 }} className="md:pt-[5rem]">
            <h5 className="text-[#000] font-semibold text-[20px] pb-[6px]">
              Related Blogs
            </h5>
            <div className="w-full h-[1px] bg-[#D1D1D1] mb-[24px]"></div>

            {isMobile ? (
              <>
                {data.post_related.map((item) => {
                  return (
                    <div className="mb-[22px]" key={item.id}>
                      <BlogCard item={item} />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {data.post_related.map((post) => {
                  return (
                    <Link href={`/blog/${post.id}`}>
                      <div className="flex gap-[12px] mb-[25px] h-[150px] hover:border p-2 transition-all ease-in-out duration-[4000ms]">
                        <div className="flex-shrink-0">
                          <Image
                            src={post.image}
                            width={179}
                            height={109}
                            className="w-[178px] h-[109px] object-cover"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className="text-[#0A0A0A] text-opacity-[90] text-[14px]">
                            {" "}
                            {post.title}
                          </h3>

                          <p
                            className="text-[#808080] text-[10px] break-all	"
                            dangerouslySetInnerHTML={{
                              __html: post.description.slice(0, 287),
                            }}
                          ></p>

                          <div className="flex mb-[6px] gap-[4px] items-center">
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.8846 11.1777L10.2354 9.19091V5.14369C10.2354 4.73674 9.90649 4.40781 9.49955 4.40781C9.09261 4.40781 8.76367 4.73674 8.76367 5.14369V9.55889C8.76367 9.79067 8.87259 10.0092 9.05802 10.1476L12.0015 12.3552C12.1285 12.4509 12.2832 12.5025 12.4422 12.5024C12.6667 12.5024 12.8875 12.4015 13.0317 12.2073C13.2761 11.8827 13.2098 11.4213 12.8846 11.1777Z"
                                fill="#949494"
                              />
                              <path
                                d="M9.5 0C4.26138 0 0 4.26138 0 9.5C0 14.7386 4.26138 19 9.5 19C14.7386 19 19 14.7386 19 9.5C19 4.26138 14.7386 0 9.5 0ZM9.5 17.5283C5.07378 17.5283 1.47172 13.9262 1.47172 9.5C1.47172 5.07378 5.07378 1.47172 9.5 1.47172C13.927 1.47172 17.5283 5.07378 17.5283 9.5C17.5283 13.9262 13.9262 17.5283 9.5 17.5283Z"
                                fill="#949494"
                              />
                            </svg>
                            <span className="text-[10px] text-[#949494]">
                              {post.created_at.split(" ").slice(0, 3)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            )}
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default BlogDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`https://new.8plusit.com/api/posts/${params.id}`);
  const resData = await res.json();
  return {
    props: {
      resData,
    },
  };
}
