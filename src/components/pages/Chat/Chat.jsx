import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Avatar, List, message, Layout, Button, Input } from "antd";
import VirtualList from "rc-virtual-list";
import { SendOutlined } from "@ant-design/icons";

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 300;
const ContainerHeight1 = 450;
const { Header, Footer, Sider, Content } = Layout;

const data1 = [
  {
    title: "John Doe",
  },
];

const data2 = [
    {
      title: "John Doe",
    },
    {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },  {
        title: "John Doe",
      },
  ];

const Chat = (props) => {
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };
  return (
    <>
      <Row
        style={{
          marginTop: "50px",
          background: "#FFFFFF",
          borderRadius: "10px",
        }}
      >
        <Col style={{ margin: "15px" }} xs={24} sm={24} md={8} lg={8}>
          <List>
            <VirtualList
              data={data}
              height={ContainerHeight1}
              itemHeight={47}
              itemKey="email"
              onScroll={onScroll}
            >
              {(item) => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} />}
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                </List.Item>
              )}
            </VirtualList>
          </List>
        </Col>
        <Col xs={0} sm={0} md={15} lg={15}>
          <Layout>
            <Header style={{ background: "#FFFFFF" }}>
              <List
                itemLayout="horizontal"
                dataSource={data1}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="last seen yesterday at 11:03 AM"
                    />
                  </List.Item>
                )}
              />
            </Header>
            <Content
              style={{
                padding: 24,
                margin: 0,
                maxHeight: 400,
              }}
            >
              <List>
                <VirtualList
                  data={data2}
                  height={ContainerHeight}
                  itemHeight={47}
                  itemKey="email"
                  onScroll={onScroll}
                >
                  {(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        description="Hello..."
                      />
                    </List.Item>
                  )}
                </VirtualList>
              </List>
            </Content>
            <Footer
                  style={{
                    background:'#FFFFFF'
                  }}
            >
              <Input.Group compact>
                <Input
                  style={{
                    width: "calc(100% - 200px)",
                    borderRadius: "10px",
                    margin:0,
                  }}
                />
                <Button type="primary"><SendOutlined />Send</Button>
              </Input.Group>
            </Footer>
          </Layout>
        </Col>
      </Row>
    </>
  );
};

Chat.propTypes = {};

export default Chat;
