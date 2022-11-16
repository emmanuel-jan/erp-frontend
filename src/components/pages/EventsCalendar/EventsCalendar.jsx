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
  Calendar
} from "antd";

const { Content } = Layout;

const EventsCalendar = (props) => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <>
      <Typography.Title
        level={3}
        style={{ margin: "16px 0 0 0", padding: "0" }}
      >
        Sacco Calendar
      </Typography.Title>
      <Content
        style={{
          padding: 24,
          margin: 10,
          minHeight: 280,
          borderRadius:'20px',
          background: '#ffffff'
        }}
      >
        <Calendar onPanelChange={onPanelChange} />
      </Content>
    </>
  );
};

EventsCalendar.propTypes = {};

export default EventsCalendar;
