import Footer from "@/components/Footer";
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


     <Row className="md:mb-[230px] mb-[108px]">
        <Col span={24} md={{ span: 12 }} className="md:px-[128px] px-[19px]">
          <h1 className="text-[#1768ac] text-[16px] md:text-[32px] font-medium">contact us</h1>

          <p className="break-words text-[14px] md:text-[16px] text-[#949494] font-[450] mt-[9px] leading-[23px] mb-[36px]">
            {t("home-desc")}
          </p>

          <Form
            className="md:mt-[39px]"
            name="basic"
            // labelCol={{
            //   span: 8,
            // }}
            // wrapperCol={{
            //   span: 16,
            // }}

            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row span="24" gutter={[36, 10]}>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Name"
                    className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none"
                  />
                </Form.Item>
              </Col>

              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email / Phone Number"
                    className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none"
                  />
                </Form.Item>
              </Col>

              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Company/Organization"
                    className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none"
                  />
                </Form.Item>
              </Col>

              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  name="services"
                  rules={[
                    {
                      required: true,
                      message: "Please select gender!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Type of Services"
                    className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none"
                  >
                    <Option value="male">marketing</Option>
                    <Option value="female">web</Option>
                    <Option value="other">mobile</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Notes"
                    className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item className="flex justify-center md:mt-[95.51px]">
              <Button
                type="primary"
                htmlType="submit"
                className="md:w-[272px] w-[126px]  h-[48px] bg-[#1768ac] rounded-[24px] text-[#fff] font-semibold text-[14px] p-[12px] flex justify-center items-center"
              >
                Send
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col span={24} md={{ span: 12 }} className="flex justify-end px-[19px] md:px-0 ">
          <ul className="bg-[#1768AC] md:h-[477px] h-[284px] px-[37px] py-[39px] rounded-[8px] w-[350px] md:rounded-r-[50px] flex md:py-[127px] md:px-[101px] flex-col md:gap-[71px] gap-[31px] md:w-[507px]">
            <li className="flex items-center gap-[13px]">
              <HiLocationMarker className="text-[#fff] text-[19px]" />
              <span className="text-[#fff] font-medium text-[16px]">
                Palestine - Gaza
              </span>
            </li>
            <li className="flex items-center gap-[13px]">
              <BsTelephoneFill className="text-[#fff] text-[19px]" />
              <span className="text-[#fff] font-medium text-[16px]">
                +972595365842
              </span>
            </li>
            <li className="flex items-center gap-[13px]">
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
