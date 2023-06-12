import { Button, Col, Form, Input, Row, Select } from 'antd'
import React from 'react'

const FormContact = () => {
    const [form] = Form.useForm();


    const handleKeyPress = (e) => {
      const charCode = e.which || e.keyCode;
      if ((charCode < 48 || charCode > 57) && charCode !== 46) {
        e.preventDefault();
        form.setFields([
          {
            name: 'phone',
            errors: ['رقم الهاتف يجب أن يحتوي على أرقام فقط'],
          },
        ]);
      
      }
      
    };
  return (
    <Form
    form={form}
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
              name="name"
              rules={[
                {
                  required: true,
                  message: "The filed is require",
                },
              ]}
            >
              <label className="text-[#949494] text-[16px]">Name</label>
              <Input
                className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none"
              />
            </Form.Item>
          </Col>

          <Col span={24} md={{ span: 12 }}>
          <Form.Item
    name="email"
    rules={[
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
      },
      {
        required: true,
        message: 'Please input your E-mail!',
      },
    ]}
  >

<div className="flex flex-col">
<label className="text-[#949494] text-[16px]">E-mail</label>

    <Input 
    
    className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none outline-0"

    />

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

            <label className="text-[#949494] text-[16px] ">Phone Number</label>
              <Input
                className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none outline-0"
                onKeyPress={handleKeyPress}
              />
            </div>
            </Form.Item>
          </Col>

          <Col span={24} md={{ span: 12 }}>
            <Form.Item
              name="services"
              rules={[
                {
                  required: true,
                  message: "The filed is require",
                },
              ]}
            >
              <label className="text-[#949494] text-[16px]">Type of Services</label>
              <Select
                    defaultValue="Front End"

                className="border-b-[#D1D1D1] border-t-0 border-r-0 border-l-0 rounded-none"
              >

                <Option value="male">marketing</Option>
                <Option value="female">web</Option>
                <Option value="other">mobile</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24} >
            <Form.Item
              name="note"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your password!",
              //   },
              // ]}
            >
                                <label className="text-[#949494] text-[16px]">Note</label>

              <Input
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
  )
}

export default FormContact