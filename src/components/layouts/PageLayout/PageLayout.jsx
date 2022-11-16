import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, Outlet, Link } from "react-router-dom";
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
  Button
} from "antd";
import {
  UserOutlined,
  HomeOutlined,
  MailOutlined,
  WifiOutlined,
  FileOutlined,
  CalendarOutlined,
  UsergroupAddOutlined,
  HistoryOutlined,
  DollarOutlined,
  FileDoneOutlined,
  BellOutlined,
  CloudUploadOutlined,
  DashboardOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import "../PageLayout/PageLayout.css";

const { Header, Footer, Sider, Content } = Layout;

const { Title, Text } = Typography;

const items1 = [
  { key: "messages", icon: <MailOutlined /> },
  { key: "chat", icon: <CommentOutlined /> },
  { key: "archives", icon: <CloudUploadOutlined /> },
  { key: "notifications", icon: <BellOutlined /> },
  { key: "recents", icon: <DashboardOutlined /> },
];

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <Link to="home" >
      Dashboard
    </Link>,
    "1",
    <HomeOutlined />
  ),
  getItem(
    <Link to="online-loans-hub" >
      Online Loans Hub
    </Link>,
    "2",
    <WifiOutlined />
  ),
  getItem(
    <Link to="events-calendar" >
      Events Calendar
    </Link>,
    "3",
    <CalendarOutlined />
  ),
  getItem(
    <Link to="gurantors-loans" >
      Gurantors & Loans
    </Link>,
    "4",
    <UsergroupAddOutlined />
  ),
  getItem(
    <Link to="transaction-history" >
      Transaction History
    </Link>,
    "5",
    <HistoryOutlined />
  ),
  getItem(
    <Link to="dividends-earnings" >
      Dividends/Earnings
    </Link>,
    "6",
    <DollarOutlined />
  ),
  getItem(
    <Link to="documents-reports" >
      Documents/Reports
    </Link>,
    "7",
    <FileOutlined />
  ),
  getItem(
    <Link to="view-statements" >
      View Statements
    </Link>,
    "8",
    <FileDoneOutlined />
  ),
  getItem(
    <Link to="account-profile" >
      Account Profile
    </Link>,
    "9",
    <UserOutlined />
  ),
];

const PageLayout = (props) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header style={{ background: "#fff" }} className="header">
        <div className="logo" />
        <Menu
          style={{ justifyContent: "flex-end" }}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          width={200}
          className="site-layout-background"
        >
          <Menu mode="inline" items={items} />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Outlet />
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            <Button type="link">About Us</Button>
            <Button type="link">Help Center</Button>
            <Button type="link">Privacy and Terms</Button>
            <br/>
            ERP Syst ©2022
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

PageLayout.propTypes = {};

export default PageLayout;
