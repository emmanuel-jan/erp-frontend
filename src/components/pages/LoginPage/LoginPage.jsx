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
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const LoginPage = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            // backgroundImage: "linear-gradient(#30C1B9, #F5F5F5)",
            padding: "10px",
            background: "#fff",
          }}
        >
          <Menu mode="horizontal">
            <Avatar size="large" icon={<UserOutlined />} />
            <Menu.Item>
              <Title level={3} style={{ color: "#494949" }}>
                CUEA SACCO
              </Title>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ background: "#F5F5F5" }}>
          <Row>
            <Col
              xs={{
                span: 24,
              }}
              sm={{
                span: 24,
              }}
              lg={{
                span: 12,
                offset: 6,
              }}
            >
              <Row
                style={{
                  boxShadow: "5px 10px 18px #888888",
                  position: "relative",
                  top: "60%",
                }}
              >
                <Col
                  xs={{
                    span: 24,
                  }}
                  sm={{
                    span: 24,
                  }}
                  lg={{
                    span: 12,
                  }}
                >
                  <Card bordered={false}>
                    <Meta
                      style={{ marginTop: "30px", marginBottom: "10px" }}
                      title="Secure - Online Members Portal"
                      description="Login to continue to our app"
                    />
                    <Form
                      name="basic"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
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
                          placeholder="Member/No"
                        />
                      </Form.Item>

                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password
                          style={{
                            border: "none",
                            borderBottom: "1px solid #30C1B9",
                          }}
                          placeholder="Password"
                        />
                      </Form.Item>

                      <Form.Item wrapperCol={{ span: 16 }}>
                        <Button
                          type="primary"
                          shape="round"
                          style={{ backgroundColor: "#30C1B9", border: "none" }}
                          block
                          htmlType="submit"
                        >
                          Login
                        </Button>
                      </Form.Item>
                    </Form>
                    <Button type="link" style={{ color: "#30C1B9" }}>
                      Forgot Password?
                    </Button>
                  </Card>
                </Col>
                <Col
                  xs={{
                    span: 0,
                  }}
                  sm={{
                    span: 0,
                  }}
                  lg={{
                    span: 12,
                  }}
                  style={{
                    backgroundImage: "linear-gradient(#30C1B9, #F5F5F5)",
                    margin: "0",
                    padding: "0",
                  }}
                ></Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
