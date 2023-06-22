import { Button, Col, Form, Input, Row, Select, notification } from "antd";
import React, { useState } from "react";

const FormContact = ({ data }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, message) => {
    api[type]({
      message,
    });
  };
  const handleKeyPress = (e) => {
    const charCode = e.which || e.keyCode;
    if ((charCode < 48 || charCode > 57) && charCode !== 46) {
      e.preventDefault();
      form.setFields([
        {
          name: "phone",
          errors: ["رقم الهاتف يجب أن يحتوي على أرقام فقط"],
        },
      ]);
    }
  };
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const res = await fetch("https://new.8plusit.com/api/post-services", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === "success") {
      console.log("maram");
      openNotificationWithIcon("success", data.message);
    } else {
      openNotificationWithIcon("error", data.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSelected = (e) => {
    form.setFieldsValue({ service_id: e });
  };
  return (
    <>
      {contextHolder}
      <Form
        form={form}
        className="md:mt-[39px]"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row span="24" gutter={[36, 10]}>
          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "The filed is require",
                },
              ]}
            >
              <div className="flex flex-col">
                <label className="text-[#949494] text-[16px]">Name</label>
                <Input className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none" />
              </div>
            </Form.Item>
          </Col>

          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <div className="flex flex-col">
                <label className="text-[#949494] text-[16px]">E-mail</label>

                <Input className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none outline-0" />
              </div>
            </Form.Item>
          </Col>

          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "The filed is require",
                },
                {
                  pattern: /^\d+$/,
                  message: "The phone number must only contain digits",
                },
              ]}
            >
              <div className="flex flex-col">
                <label className="text-[#949494] text-[16px] ">
                  Phone Number
                </label>
                <Input
                  className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none outline-0"
                  onKeyPress={handleKeyPress}
                />
              </div>
            </Form.Item>
          </Col>

          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="service_id"
              rules={[
                {
                  required: true,
                  message: "The filed is require",
                },
              ]}
            >
              <div className="flex flex-col">
                <label className="text-[#949494] text-[16px]">
                  Type of Services
                </label>
                <Select
                  onChange={(e) => handleSelected(e)}
                  defaultValue="select your service"
                  className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none"
                >
                  {data.map((item) => {
                    return <Option value={item.id}>{item.name}</Option>;
                  })}
                </Select>
              </div>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="note"
              rules={[
                {
                  required: true,
                  message: "The filed is require",
                },
              ]}
            >
              <div className="flex flex-col">
                <label className="text-[#949494] text-[16px]">Note</label>

                <Input className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none" />
              </div>
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
    </>
  );
};

export default FormContact;
