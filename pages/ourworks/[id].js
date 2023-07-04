import Wrapper from "@/components/Wrapper";
import { Col, Row, Image } from "antd";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

const Work = ({
  resData: {
    data: { name, description, photos, client, category_name, service_name,meta_title,meta_description,meta_keywords },
  },
}) => {
  const { t } = useTranslation();
  return (
    <>
    <Head >
      <title>{meta_title}</title>
      <meta name="description" content={meta_description}/>
      <meta name="keywords" content={meta_keywords}/>
    </Head>
      <Wrapper>
        <div className="md:pt-[162px] pt-[85px]">
          <Row>
            <Col span={24} md={{ span: 18 }}>
              <h1 className="text-[#1768ac] text-[16px] md:text-[36px] font-medium mb-[5px]">
                {name}
              </h1>
              <div className="flex gap-[5px] justify-center">
                <svg
                className="mt-[6px]"
                  width="8"
                  height="10"
                  viewBox="0 0 8 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 5.86603C-0.166667 5.48113 -0.166667 4.51887 0.5 4.13397L6.5 0.669873C7.16667 0.284973 8 0.766098 8 1.5359L8 8.4641C8 9.2339 7.16667 9.71503 6.5 9.33013L0.5 5.86603Z"
                    fill="#03256C"
                    fill-opacity="0.91"
                  />
                </svg>

                <p className="text-[#949494] text-[12px] md:text-[16px] font-medium break-all flex-1	m-0">
                  {description?.replace(/<p>|<\/p>/g, "")}
                </p>
              </div>

              <ul className="flex md:gap-[38px] gap-[10px] bg-[#F5F5F5] md:p-[13px] md:mt-[36px] mt-[9px] h-[36px] items-center py-[7px] px-[2px]">
                <div className="flex gap-[6px] items-center ">
                  <span className="w-[6px] h-[6px] bg-[#000] rounded-[6px]"></span>
                  <li className="text-[#000] md:text-[20px] text-[12px] font-medium">
                    {client}
                  </li>
                </div>

                <div className="flex gap-[6px] items-center ">
                  <span className="w-[6px] h-[6px] bg-[#000] rounded-[6px]"></span>
                  <li className="text-[#000] md:text-[20px] text-[12px] font-medium">
                    {category_name}
                  </li>
                </div>

                <div className="flex gap-[6px] items-center ">
                  <span className="w-[6px] h-[6px] bg-[#000] rounded-[6px]"></span>
                  <li className="text-[#000] md:text-[20px] text-[12px] font-medium">
                    {name}
                  </li>
                </div>
              </ul>
            </Col>
          </Row>

          <Row
            gutter={[24, 24]}
            className="md:mt-[84.74px] md:mb-[127.23px] mt-[31px]"
          >
            {photos.map((photo) => {
              return (
                <Col
                  md={{ span: 12 }}
                  className="hover:drop-shadow-[0px_12px_10px_rgba(0,0,0,0.15)] transition-all ease-in-out duration-[1000ms] hover:mt-[-20px]"
                >
                  <div className="rounded-[100px]">
                    <Image
                      width="100%"
                      height={600}
                      className="w-[100%] max-h-[100%] h-[600px] object-cover rounded-[100px]"
                      src={photo.image}
                      preview={{
                        src: photo.image,
                      }}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Wrapper>
    </>
  );
};

export default Work;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://new.8plusit.com/api/portfolios/${params.id}`
  );
  const resData = await res.json();
  return { props: { resData } };
}
