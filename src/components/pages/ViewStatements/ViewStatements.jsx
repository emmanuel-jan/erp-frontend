import React from "react";
import PropTypes from "prop-types";
import { DownloadOutlined } from '@ant-design/icons';
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
  Tabs,
  Button,
  Result
} from "antd";

const { Content } = Layout;

const ViewStatements = (props) => {
  return (
    <>
      <Typography.Title
        level={3}
        style={{ margin: "16px 0 0 0", padding: "0" }}
      >
        Member Statement
      </Typography.Title>
      <Content
        style={{
          padding: 24,
          marginTop: "10px",
          minHeight: 280,
          background: "#FFFFFF",
          borderRadius: "20px",
        }}
      >
        <Button type="primary" shape="round" icon={<DownloadOutlined />}>Download</Button>
        <Result title="No Statements Yet" />
      </Content>
    </>
  );
};

ViewStatements.propTypes = {};

export default ViewStatements;
