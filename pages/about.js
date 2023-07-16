import CustomSlider from "@/components/CustomSlider";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GoMail } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import {motion} from "framer-motion";

const about = () => {

  const { t } = useTranslation();

  const [data,setData] = useState({});
  const [partners ,setPartners] = useState([]);
  const [loading ,setLoading] = useState(true)



  useEffect(()=>{
const getAbout = async() =>{
    const res = await fetch("https://new.8plusit.com/api/home");
  const resData = await res.json();
  setData(resData.data.about_page);
  setLoading(false);
}

const getPartners = async() =>{
  const res = await fetch("https://new.8plusit.com/api/partners");
const resData = await res.json();
setPartners(resData.data);
setLoading(false)
}

getAbout();
getPartners()
  },[]);

  console.log(data.our_message ,'data');
  return (
<>

{
      loading ? (<p> loading ...</p>) :
      (
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
              <h3 className="text-[#1768ac] text-[20px] md:text-[36px]  font-[900] mb-[13px] ">
                {t("about")}
              </h3>
              <motion.p 
                initial={{ x: "-1000" }}
                animate={{ x: [900,0] }}
                transition={{ duration: 2 , delay:'1' }}
              className="text-[#000]  text-[14px] md:text-[18px] md:w-[503px] break-words text-right font-medium">
                {data.about}
              </motion.p>
            </Col>
  
            <Col md={{ span: 12 }} className="mb-[65px]">
              <img
                src="/images/about-img.png"
                className="w-[100%] h-[100%] object-cover hover:drop-shadow-[0_12px_12px_rgba(0,0,0,0.15)] transition-all ease duration-[1000ms] hover:scale-x-[-1]"
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
              <div
            
              >
                <div className="flex items-center gap-[17px]">
                  <GoMail className="text-[#1768ac] text-[26px] md:text-[35px]" />
                  <h3 className="text-[#1768ac] text-[20px] md:text-[36px]  font-[900] mb-[13px] ">
                    {t("our_message")}
                  </h3>
                </div>
              </div>
              <motion.p 
                  initial={{ x: "-1000" }}
                  animate={{ x: [900,0] }}
                  transition={{ duration: 2 , delay:'1' }}
              className="text-[#000] text-[14px] md:text-[18px] md:w-[503px] md:h-[211px] break-words text-right font-medium">
                {data.our_message}
              </motion.p>
            </Col>
  
            <Col md={{ span: 12 }} className="mb-[65px]">
              <div className="flex items-center gap-[17px]">
                <RxEyeOpen className="text-[#1768ac] text-[26px] md:text-[35px]" />
                <h3 className="text-[#1768ac] text-[20px] md:text-[36px] font-[900] mb-[13px] ">
                  {t("our_vision")}
                </h3>
              </div>
  
              <motion.p 
               initial={{ x: "-1000" }}
               animate={{ x: 0 }}
               transition={{ duration: 2 , delay:'1' }}
              className="text-[#000] text-[14px] md:text-[18px] md:w-[503px] md:h-[211px] break-words text-right font-[900]">
                {data.our_vision}
              </motion.p>
            </Col>
          </Row>
  
          <div className="md:mt-[65px] md:mb-[160px]">
            <h2 className="text-center text-[20px] md:text-[36px] text-[#1768ac] font-medium md:mb-[57px] mb-[7px]">
              {t("about-partners")}
            </h2>
  
            <CustomSlider partners={partners} />
          </div>
        </Wrapper>
      </div>
      )
    }
</>
    
  
  );
};

export default about;

// export async function getServerSideProps() {
//   const res = await fetch("https://new.8plusit.com/api");
//   const resData = await res.json();

//   return { props: { resData } };
// }
