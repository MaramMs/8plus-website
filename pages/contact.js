import Footer from "@/components/Footer";
import FormContact from "@/components/FormContact";
import Wrapper from "@/components/Wrapper";
import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

const contact = () => {
  const { t } = useTranslation();
  return (
<>
    <div className="pt-[162px] overflow-x-hidden">


     <Row className="md:mb-[230px] mb-[108px] flex-col-reverse 	md:flex-row">
        <Col span={24} md={{ span: 12 }} className="md:px-[128px] px-[19px]">
          <h1 className="text-[#1768ac] text-[16px] md:text-[32px] font-medium">contact us</h1>

          <p className="break-words text-[14px] md:text-[16px] text-[#949494] font-[450] mt-[9px] leading-[23px] mb-[36px]">
            {t("home-desc")}
          </p>
     <FormContact />
        </Col>

        <Col span={24} md={{ span: 12 }} className="flex justify-end px-[19px] md:px-0 mb-[122px]">
          <ul className="bg-[#1768AC] md:h-[477px] h-[284px] px-[37px] py-[39px] rounded-[8px] w-[350px] md:rounded-r-[50px] flex md:py-[61px] md:px-[101px] flex-col  md:w-[507px]">
          <li className="list-disc text-white text-[14px] font-medium mb-[21px] md:mb-[51px]">{t('form-contact')}</li>
            <li className="flex items-center gap-[13px] md:mb-[71px] mb-[31px] flex-row-reverse	md:flex-row">
              <HiLocationMarker className="text-[#fff] text-[19px]" />
              <span className="text-[#fff] font-medium text-[16px]">
                Palestine - Gaza
              </span>
            </li>
            <li className="flex items-center gap-[13px] md:mb-[71px] mb-[31px] flex-row-reverse	md:flex-row">
              <BsTelephoneFill className="text-[#fff] text-[19px]" />
              <span className="text-[#fff] font-medium text-[16px]">
                +972595365842
              </span>
            </li>
            <li className="flex items-center gap-[13px] md:mb-[71px] mb-[31px] flex-row-reverse	md:flex-row">
              <IoMdMail className="text-[#fff] text-[19px]" />
              <span className="text-[#fff] font-medium text-[16px]">
                8pluscompany@info
              </span>
            </li>
          </ul>
        </Col>
      </Row>

    
    </div>
      <Footer />
</>
  );
};

export default contact;
