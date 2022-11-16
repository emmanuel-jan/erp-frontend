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
  message,
  Steps,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const steps = [
  {
    title: "First",
    content: (
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
                <Col
                  xs={24}
                  sm={24}
                  md={{ span: 12, offset: 10 }}
                  lg={{ span: 12, offset: 10 }}
                >
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<UserOutlined />}
                  />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Title level={5}>Personal Details</Title>
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
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    ),
  },
  {
    title: "Second",
    content: (
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
                  <Title level={5}>Bank Details</Title>
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
                <Col xs={24} sm={24} md={16} lg={16}>
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
            </Form>
          </Card>
        </Col>
      </Row>
    ),
  },
  {
    title: "Last",
    content: (
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
                <Col
                  xs={24}
                  sm={24}
                  md={{ span: 12, offset: 10 }}
                  lg={{ span: 12, offset: 10 }}
                >
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<UserOutlined />}
                  />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Title level={5}>Personal Details</Title>
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
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Title level={5}>Bank Details</Title>
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
                <Col xs={24} sm={24} md={16} lg={16}>
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
            </Form>
          </Card>
        </Col>
      </Row>
    ),
  },
];

const { Header, Content, Footer } = Layout;

const MultiStepForm = (props) => {
  const [current, setCurrent] = React.useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <Content style={{margin:'40px'}}>
      <Steps current={current} items={items} />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </Content>
  );
};

MultiStepForm.propTypes = {};

export default MultiStepForm;
