import Footer from "@/components/Footer";
import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import {GoMail} from 'react-icons/go'
import {RxEyeOpen} from 'react-icons/rx'

const about = () => {
  const {t} = useTranslation()
  return (
    <div className="about">
    <div className="container md:pt-[129px]">
    <Row gutter={[74,74]}>
        <Col md={{ span: 12 }} className="md:pt-[119px]">
          <h3 className="text-[#1768ac] text-[36px] font-medium mb-[13px]">{t('about')}</h3>
          <p className="text-[#000] text-[18px] w-[503px] break-words text-right font-medium">
            {/* Eight Plus provides a wide range of services that cater to different
            customer needs. In the field of marketing, the company provides
            strategic consultancy, brand development, market and competition
            analysis, design and implementation of digital marketing campaigns
            including social media management, online advertising and search
            engine optimization (SEO). */}

            {t('home-desc')}
          </p>
        </Col>

        <Col md={{ span: 12 }}>
          <img src="/images/about-img.png" className="max-w-[100%]"/>
        </Col>


        <Col md={{ span: 12 }} >
          <h3 className="text-[#1768ac] text-[36px] font-medium mb-[13px] flex items-center gap-[17px]">
            <GoMail />
            {t('about')}
            </h3>
          <p className="text-[#000] text-[18px] md:w-[503px] md:h-[211px] break-words text-right font-medium">
            {t('home-desc')}
          </p>
        </Col>

        <Col md={{ span: 12 }}>
          <h3 className="text-[#1768ac] text-[36px] font-medium mb-[13px] flex items-center gap-[17px]">
            <RxEyeOpen  className="text-[#1768ac]"/>
{t('about')}
          </h3>

          <p className="text-[#000] text-[18px] md:w-[503px] md:h-[211px] break-words text-right font-medium">
            {t('home-desc')}
          </p>
        </Col>
      </Row>


      <div className="md:mt-[65px]">
        <h2 className="text-center text-[36px] text-[#1768ac] font-medium">{t('about-partners')}</h2>


      </div>

    </div>

    <Footer />
    </div>
  );
};

export default about;
