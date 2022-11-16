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
  Tag
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];  

const LoanCalculator = (props) => {
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
                  <Title level={5}>Loan Calculator</Title>
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
      <Row style={{marginTop:'10px'}}>
        <Col xs={24} sm={24} md={24} lg={24}>
        <Table
          scroll={{
            x: 1300,
          }}
          columns={columns}
          dataSource={data}
        />
        </Col>
      </Row>
    </Content>
  );
};

LoanCalculator.propTypes = {};

export default LoanCalculator;
