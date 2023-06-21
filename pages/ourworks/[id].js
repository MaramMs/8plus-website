import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import { Col, Row, Container, Image } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillCaretLeft } from "react-icons/ai";

const Work = ({
  resData: {
    data: { name, description, photos,client,category_name,service_name },
  },
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <div className="pt-[162px] ">
          <Row>
            <Col span={24} md={{ span: 18 }}>
              <h1 className="text-[#1768ac] text-[16px] md:text-[36px] font-medium">
                {name}
              </h1>
              <div className="flex gap-[5px] ">
                <AiFillCaretLeft className="text-[#03256C] text-[31px]" />
                <p className="text-[#949494] text-[12px] md:text-[16px] font-medium break-words ">
                  {description?.replace(/<p>|<\/p>/g ,'')}
                </p>
              </div>

              <div className="bg-[#F5F5F5] md:p-[13px] md:mt-[36px] mt-[9px]">
                <ul className="flex md:gap-[38px] list-disc list-inside">
                  <li className="text-[#000] md:text-[20px] text-[12px] font-medium">
                  {client}
                  </li>

                  <li className="text-[#000] md:text-[20px] text-[12px] font-medium">
                   {category_name}
                  </li>
                  <li className="text-[#000] md:text-[20px] text-[12px] font-medium">
                    {name}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row
            gutter={[24, 24]}
            className="md:mt-[84.74px] md:mb-[127.23px] mt-[31px]"
          >
            {photos.map((photo) => {
              return (
                <Col md={{ span: 12 }}>
                  <div className="rounded-[100px]">
                    <Image
                      width="100%"
                      height="100%"
                      className="w-[100%] h-[100%] object-cover"
                      src={photo.image}
                      preview={{
                        src: `{photo.image}`,
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
