import Footer from "@/components/Footer";
import FormContact from "@/components/FormContact";
import Wrapper from "@/components/Wrapper";
import {Col,Row } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const services = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
const serviceData = async() =>{
  const res = await fetch("https://new.8plusit.com/api/services");
  const resData = await res.json();
setData(resData.data);

}

serviceData();
  },[]);
  console.log(data, 'data');
  return (
    <div className="overflow-x-hidden pt-[162px]">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-[#1768AC] text-[20px] md:text-[36px] font-semibold">
          Services
        </h1>
        <p className="text-[#949494] w-[350px] text-[12px] md:text-[16px] font-medium md:w-[728px] break-words text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos
        </p>
      </div>

      <div className="ser md:mt-[66px] mt-[34px]">
        <Wrapper>
          <Row
            gutter={{
              sm: 24,
            }}
          >

            {
              data.map((item) => {
                return (
                  <Col
                  span={12}
                  md={{ span: 8 }}
                  className="mb-[26px]  md:m-0 md:border-r-[0.5px] md:border-r-[#fff] md:border-l-[0.5px] md:border-l-[#fff] md:border-b-[0.5px] md:border-b-[#fff] "
                >
                  <div className="flex  gap-[8px] md:gap-[17px] md:px-[32px] md:pb-[76px] md:pt-[52px]">
                    <span>
                      <Image src={item.image}  width={40} height={40}/>
                      
                    </span>
                    <div>
                      <h2 className="text-[#fff]  text-[11px] md:text-[16px] font-semibold mb-[3px] break-words">
                     {item.name}
                      </h2>
                      <p className="text-[#fff]  text-[9px] w-[123px]  md:text-[12px] font-medium md:w-[237px] break-words">
                      {item.description}
                      </p>
                    </div>
                  </div>
                </Col>
                )
              })
            }
          
          </Row>
        </Wrapper>
      </div>
      <div className="flex  flex-col mt-[59px] md:mt-[119px] md:mb-[90px] px-[19px]">
        <h2 className="text-[#1768AC] font-medium text-[20px] md:text-center text-right md:text-[32px] mb-[4px]">
          Contact Us
        </h2>
        <p className="text-[#949494] text-[14px] font-[450] text-right break-all mb-[24px] md:hidden">
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
        </p>
        <FormContact data={data}/>
      </div>

    </div>
  );
};

export default services;

// export async function getServerSideProps() {
//   const res = await fetch("https://new.8plusit.com/api/services");
//   const resData = await res.json();

//   return { props: { resData } };
// }
