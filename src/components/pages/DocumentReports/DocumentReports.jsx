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
  Tabs,
  Button,
  Result,
} from "antd";

const { Content } = Layout;

const DocumentReports = (props) => {
  return (
    <>
      <Typography.Title
        level={3}
        style={{ margin: "16px 0 0 0", padding: "0" }}
      >
        Documents & Reports
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
        <Result title="No Documents/Reports Yet" />
      </Content>
    </>
  );
};

DocumentReports.propTypes = {};

export default DocumentReports;
