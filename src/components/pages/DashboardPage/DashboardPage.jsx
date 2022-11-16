import React from "react";
import PropTypes from "prop-types";
import {
  Breadcrumb,
  Layout,
  Typography,
  Avatar,
  Menu,
  Col,
  Row,
  Card,
  Space,
  Table,
} from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "../DashboardPage/DashboardPage.css";

const { Content } = Layout;

const { Title, Text, Link } = Typography;

const items1 = [
  { label: "HFCK +0.87", key: "1", icon: <ArrowUpOutlined /> },
  { label: "HFCK -0.22", key: "2", icon: <ArrowDownOutlined /> },
  { label: "HFCK +0.76", key: "3", icon: <ArrowUpOutlined /> },
  { label: "HFCK -0.13", key: "4", icon: <ArrowDownOutlined /> },
  { label: "HFCK +0.34", key: "5", icon: <ArrowUpOutlined /> },
  { label: "HFCK +0.87", key: "6", icon: <ArrowUpOutlined /> },
  { label: "HFCK -0.22", key: "7", icon: <ArrowDownOutlined /> },
  { label: "HFCK +0.76", key: "8", icon: <ArrowUpOutlined /> },
  { label: "HFCK -0.13", key: "9", icon: <ArrowDownOutlined /> },
];

const columns = [
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Rate",
    dataIndex: "rate",
  },
];
const data = [
  {
    key: "1",
    product: "Normal",
    rate: "0.01%",
  },
  {
    key: "2",
    product: "Emergency",
    rate: "0.01%",
  },
  {
    key: "3",
    product: "School Fees",
    rate: "0.01%",
  },
];

const DashboardPage = (props) => {
  return (
    <>
      <Typography.Title
        level={3}
        style={{ margin: "16px 0 0 0", padding: "0" }}
      >
        My Dashboard/ John Doe
      </Typography.Title>
      <Text type="secondary">Click to Hide/Show Balances</Text>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Row gutter={[16, { xs: 16, sm: 16, md: 16, lg: 16 }]}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card
              style={{ borderRadius: "10px", background: "#A1D488" }}
              bordered={false}
            >
              <Text type="secondary">Share Capital</Text>
              <Title style={{ margin: "0" }} type="secondary" level={2}>
                Kes.
                <br /> 1,000,000.00
              </Title>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card
              style={{ borderRadius: "10px", background: "#7BB3D2" }}
              bordered={false}
            >
              <Text type="secondary">Members Deposit</Text>
              <Title style={{ margin: "0" }} type="secondary" level={2}>
                Kes.
                <br /> 5,000,000.00
              </Title>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card
              style={{ borderRadius: "10px", background: "#E8F54A" }}
              bordered={false}
            >
              <Text type="secondary">Loan Balance</Text>
              <Title style={{ margin: "0" }} type="secondary" level={2}>
                Kes.
                <br /> 20,000.00
              </Title>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card
              style={{ borderRadius: "10px", background: "#EAAD53" }}
              bordered={false}
            >
              <Text type="secondary">Holiday Savings</Text>
              <Title style={{ margin: "0" }} type="secondary" level={2}>
                Kes.
                <br /> 400,000.00
              </Title>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, { xs: 16, sm: 16, md: 16, lg: 16 }]} style={{ marginTop: "20px" }}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="News title" bordered={false}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quo neque corrupti saepe molestias minima eligendi? Alias
                repellat eius optio doloribus quam modi asperiores minus natus
                dolor quos, veniam sunt.
              </p>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="News title" bordered={false}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quo neque corrupti saepe molestias minima eligendi? Alias
                repellat eius optio doloribus quam modi asperiores minus natus
                dolor quos, veniam sunt.
              </p>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
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
            <Typography.Title
              level={5}
              style={{ margin: "16px 0 0 0", padding: "0" }}
            >
              Product Lending Rates
            </Typography.Title>
            <Table columns={columns} dataSource={data} size="small" pagination={false} />
          </Col>
        </Row>
      </Content>
    </>
  );
};

DashboardPage.propTypes = {};

export default DashboardPage;
