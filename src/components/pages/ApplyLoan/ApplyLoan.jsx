import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Row,
  Card,
  Form,
  Checkbox,
  Input,
  Typography,
  Breadcrumb,
  Layout,
  Menu,
  Avatar,
  Table,
  Space,
  Tag,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const ApplyLoan = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Content style={{ background: "transparent" }}>
      <Row
        style={{
          marginTop: "20px",
        }}
      >
        <Col
          xs={24}
          sm={24}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 12, offset: 6 }}
          xl={{ span: 12, offset: 6 }}
        >
          <Card bordered={false}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Row gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Title level={5}>Apply Loan</Title>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
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
                      style={{
                        border: "none",
                        borderBottom: "1px solid #30C1B9",
                      }}
                      placeholder="Full Name"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item
                    name="nationality"
                    rules={[
                      {
                        required: true,
                        message: "Please input your nationality!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        border: "none",
                        borderBottom: "1px solid #30C1B9",
                      }}
                      placeholder="Nationality"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item
                    name="idnumber"
                    rules={[
                      {
                        required: true,
                        message:
                          "Please input your National ID/Passport/Alien No!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        border: "none",
                        borderBottom: "1px solid #30C1B9",
                      }}
                      placeholder="National ID/Passort/Alien No"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item
                    name="dob"
                    rules={[
                      {
                        required: true,
                        message: "Please input your date of birth!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        border: "none",
                        borderBottom: "1px solid #30C1B9",
                      }}
                      placeholder="Date Of Birth"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item
                    name="bankname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your bank name!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        border: "none",
                        borderBottom: "1px solid #30C1B9",
                      }}
                      placeholder="Bank Name"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item
                    name="branch"
                    rules={[
                      {
                        required: true,
                        message: "Please input your bank branch!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        border: "none",
                        borderBottom: "1px solid #30C1B9",
                      }}
                      placeholder="Branch"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item
                    name="accountNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your account number!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        border: "none",
                        borderBottom: "1px solid #30C1B9",
                      }}
                      placeholder="Account Number"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item
                    name="accountNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your account number!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        border: "none",
                        borderBottom: "1px solid #30C1B9",
                      }}
                      placeholder="Account Number"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item
                    name="accountNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your account number!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        border: "none",
                        borderBottom: "1px solid #30C1B9",
                      }}
                      placeholder="Account Number"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item
                    name="accountNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your account number!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        border: "none",
                        borderBottom: "1px solid #30C1B9",
                      }}
                      placeholder="Account Number"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item wrapperCol={{ span: 16, offset: 4 }}>
                <Button
                  type="primary"
                  shape="round"
                  style={{ backgroundColor: "#30C1B9", border: "none" }}
                  block
                  htmlType="submit"
                >
                  Save Info
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

ApplyLoan.propTypes = {};

export default ApplyLoan;
