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
  Tag,
  Table,
} from "antd";

const { Content } = Layout;

const onChange = (key) => {
  console.log(key);
};

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

const OnlineLoansHub = (props) => {
  return (
    <>
      <Typography.Title
        level={3}
        style={{ margin: "16px 0 0 0", padding: "0" }}
      >
        Online Loans Hub
      </Typography.Title>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Button type="primary">Loan Calculator</Button>
        <Button>Apply for a Loan</Button>
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: `My Pending Applications`,
              key: "1",
              children: (
                <Table
                  scroll={{
                    x: 1300,
                  }}
                  columns={columns}
                  dataSource={data}
                />
              ),
            },
            {
              label: `Member Loan Statement`,
              key: "2",
              children: `Table Content of Tab Pane 2`,
            },
          ]}
        />
      </Content>
    </>
  );
};

OnlineLoansHub.propTypes = {};

export default OnlineLoansHub;
