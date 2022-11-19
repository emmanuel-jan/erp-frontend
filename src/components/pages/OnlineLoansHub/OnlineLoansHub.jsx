import React, { useRef, useState } from "react";
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
  Input,
} from "antd";
import { SearchOutlined, FilePdfOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";

const { Content } = Layout;

const onChange = (key) => {
  console.log(key);
};

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const OnlineLoansHub = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      field: "name",
      header: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      field: "age",
      header: "age",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      field: "address",
      header: "address",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  const exportColumns = columns.map((col) => ({
    title: col.header,
    dataKey: col.field
  }))

  const exportPDF = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0,0);
        doc.autoTable(exportColumns, data);
        doc.save("pending_applications.pdf")
      })
    } )
  }

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
                <>
                  <Space style={{ float: "right" }}>
                    <Button type="primary">
                      <CSVLink
                        filename={"Pending_Applications.csv"}
                        data={data}
                        className="btn btn-primary"
                        onClick={() => {
                          console.log("The file is downloading");
                        }}
                      >
                        Export to CSV
                      </CSVLink>
                    </Button>
                    <Button onClick={exportPDF} type="primary" danger>
                      <FilePdfOutlined /> Export to PDF{" "}
                    </Button>
                  </Space>
                  <div ref={componentRef}>
                    <Table
                      rowSelection={rowSelection}
                      columns={columns}
                      dataSource={data}
                    />
                  </div>
                </>
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
