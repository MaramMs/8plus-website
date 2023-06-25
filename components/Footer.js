import { Col, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Wrapper from "./Wrapper";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const { t } = useTranslation();
  const [siteData, setSiteData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://new.8plusit.com/api/home");
      const {
        data: { site },
      } = await res.json();
      setSiteData(site);
      setLoading(false);
    }
    fetchData();
  }, [loading]);
  return (
    <>
      {loading ? (
        <Spin />
      ) : router.pathname === "/" ? (
        ""
      ) : (
        <footer className='bg-[#1768ac] bg-[url("/images/footer-img.png")] md:py-[70px] '>
          <Wrapper>
            <Row className="md:mb-[12px]">
              <Col span={18} md={{ span: 12 }}>
                <img
                  src={siteData.site_logo}
                  className="md:w-[140px] md:h-[43px] w-[80px] h-[24.83px] object-cover"
                />
                <p className="text-[8px] font-light md:text-[12px] md:font-medium text-[#fff] md:w-[300px] md:mt-[9px] w-[186px] h-[55px]">
                  {siteData.site_description}
                </p>
              </Col>

              <Col span={6} md={{ span: 12 }}>
                <div className="flex flex-wrap justify-between  md:space-y-[16px] space-y-[14px] md:m-0">
                  <div className="flex items-center gap-[4px] md:gap-[13px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2 md:mt-[12px]">
                    <span className="text-[#fff] font-medium text-[8px] md:text-[19px]">
                      {" "}
                      {siteData.site_email}
                    </span>
                    <IoMdMail className="text-[12px] md:text-[14px]" />
                  </div>
                  <div className="flex items-center gap-[5px] md:gap-[13px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2 md:mt-[0px] justify-end">
                    <span className="text-[#fff] font-medium text-[8px] md:text-[19px] mr-[22px] md:mr-0">
                      {siteData.site_address}
                    </span>

                    <HiLocationMarker className="text-[12px] md:text-[14px]" />
                  </div>

                  <div className="flex items-center gap-[4px] md:gap-[15px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2">
                    <span className="text-[#fff] font-medium text-[8px] md:text-[19px] md:mr-[34px] mr-[13px]">
                      {siteData.site_phone}
                    </span>
                    <BsTelephoneFill className="text-[12px] md:text-[14px]" />
                  </div>

                  <div className="flex items-center gap-[5px] md:gap-[10px] text-[#fff] text-[8px] md:text-[19px] md:w-1/2 justify-end">
                    <span className="text-[#fff] font-medium text-[8px] md:text-[19px] md:mr-[25px] mr-[28px]">
                      {siteData.work_hours}
                    </span>

                    <MdAccessTimeFilled className="text-[12px] md:text-[14px]" />
                  </div>
                </div>
              </Col>
            </Row>
          </Wrapper>
        </footer>
      )}
    </>
  );
};

// {
//   loading ? (
//     // Render your loading component here
//     <div>Loading...</div>
//   ) : router.pathname === '/' ? '' : (
//     <footer className='bg-[#1768ac] bg-[url("/images/footer-img.png")] md:py-[70px] '>
//       {/* ... */}
//     </footer>
//   )

export default Footer;
