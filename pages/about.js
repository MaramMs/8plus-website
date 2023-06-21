import CustomSlider from "@/components/CustomSlider";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { GoMail } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

const about = ({resData:{data:data}}) => {
  const {site:{about_page},partners} =data;
  const { t } = useTranslation();
  return (
    <div className="about">
      <Wrapper className="md:pt-[162px] pt-[162px]">
        <Row
          className="flex-col-reverse md:flex-row"
          gutter={{
            xs: 66,
            sm: 66,
            md: 72,
            lg: 72,
          }}
        >
          <Col md={{ span: 12 }} className="md:pt-[119px] gutter-row mb-[65px]">
            <h3 className="text-[#1768ac] text-[20px] md:text-[36px]  font-medium mb-[13px]">
              {t("about")}
            </h3>
            <p className="text-[#000]  text-[14px] md:text-[18px] md:w-[503px] break-words text-right font-medium">
            {about_page.about}
            </p>
          </Col>

          <Col md={{ span: 12 }} className="mb-[65px]">
            <img
              src="/images/about-img.png"
              className="w-[100%] h-[100%] object-cover"
            />
          </Col>

       
        </Row>

        <Row  
        
        gutter={{
          xs: 66,
          sm: 66,
          md: 72,
          lg: 72,
        }}
        >

        <Col md={{ span: 12 }} className="mb-[65px]">
            <div className="flex items-center gap-[17px]">
              <GoMail className="text-[#1768ac] text-[26px] md:text-[35px]" />
              <h3 className="text-[#1768ac] text-[20px] md:text-[36px]  font-medium mb-[13px] ">
                {t("our_message")}
              </h3>
            </div>

            <p className="text-[#000] text-[14px] md:text-[18px] md:w-[503px] md:h-[211px] break-words text-right font-medium">
             {about_page.our_message}
            </p>
          </Col>

          <Col md={{ span: 12 }} className="mb-[65px]">
            <div className="flex items-center gap-[17px]">
              <RxEyeOpen className="text-[#1768ac] text-[26px] md:text-[35px]" />
              <h3 className="text-[#1768ac] text-[20px] md:text-[36px] font-medium mb-[13px] ">
                {t("our_vision")}
              </h3>
            </div>

            <p className="text-[#000] text-[14px] md:text-[18px] md:w-[503px] md:h-[211px] break-words text-right font-medium">
           {about_page.our_vision}
            </p>
          </Col>
        </Row>


        <div className="md:mt-[65px] md:mb-[160px]">
          <h2 className="text-center text-[20px] md:text-[36px] text-[#1768ac] font-medium md:mb-[57px] mb-[7px]">
            {t("about-partners")}
          </h2>

          <CustomSlider partners={partners}/>
        </div>
      </Wrapper>
    </div>
  );
};

export default about;

export async function getServerSideProps() {
  const res = await fetch('https://new.8plusit.com/api');
  const resData= await res.json()
 
  return { props: { resData } }
}


