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
  Form,
  Radio,
  Switch,
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
    age: 32 + i,
    address: `London, Park Lane no. ${i}`,
  });
}

const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const defaultTitle = () => "Here is title";
const defaultFooter = () => "Here is footer";

const OnlineLoansHub = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const componentRef = useRef();
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("large");
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelections, setRowSelections] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState(undefined);
  const [top, setTop] = useState("none");
  const [bottom, setBottom] = useState("bottomRight");
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState(undefined);
  const handleBorderChange = (enable) => {
    setBordered(enable);
  };
  const handleLoadingChange = (enable) => {
    setLoading(enable);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleTableLayoutChange = (e) => {
    setTableLayout(e.target.value);
  };
  const handleExpandChange = (enable) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };
  const handleEllipsisChange = (enable) => {
    setEllipsis(enable);
  };
  const handleTitleChange = (enable) => {
    setShowTitle(enable);
  };
  const handleHeaderChange = (enable) => {
    setShowHeader(enable);
  };
  const handleFooterChange = (enable) => {
    setShowFooter(enable);
  };
  const handleRowSelectionChange = (enable) => {
    setRowSelections(enable ? {} : undefined);
  };
  const handleYScrollChange = (enable) => {
    setYScroll(enable);
  };
  const handleXScrollChange = (e) => {
    setXScroll(e.target.value);
  };
  const handleDataChange = (newHasData) => {
    setHasData(newHasData);
  };
  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = "100vw";
  }

  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelections,
    scroll,
    tableLayout,
  };

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
      sorter: (a, b) => a.age - b.age,
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

  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  const exportColumns = columns.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  const exportPDF = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(exportColumns, data);
        doc.save("pending_applications.pdf");
      });
    });
  };

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
        <Space style={{ float: "right" }}>
          <Button type="primary">Loan Calculator</Button>
          <Button>Apply for a Loan</Button>
        </Space>

        <Space>
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
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: `My Pending Applications`,
              key: "1",
              children: (
                <>
                  <Form
                    layout="inline"
                    className="components-table-demo-control-bar"
                    style={{
                      marginBottom: 16,
                    }}
                  >
                    <Form.Item label="Bordered">
                      <Switch
                        checked={bordered}
                        onChange={handleBorderChange}
                      />
                    </Form.Item>
                    <Form.Item label="loading">
                      <Switch
                        checked={loading}
                        onChange={handleLoadingChange}
                      />
                    </Form.Item>
                    <Form.Item label="Title">
                      <Switch
                        checked={showTitle}
                        onChange={handleTitleChange}
                      />
                    </Form.Item>
                    <Form.Item label="Column Header">
                      <Switch
                        checked={showHeader}
                        onChange={handleHeaderChange}
                      />
                    </Form.Item>
                    <Form.Item label="Footer">
                      <Switch
                        checked={showfooter}
                        onChange={handleFooterChange}
                      />
                    </Form.Item>
                    <Form.Item label="Expandable">
                      <Switch
                        checked={!!expandable}
                        onChange={handleExpandChange}
                      />
                    </Form.Item>
                    {/* <Form.Item label="Checkbox">
          <Switch checked={!!rowSelections} onChange={handleRowSelectionChange} />
        </Form.Item> */}
                    <Form.Item label="Fixed Header">
                      <Switch
                        checked={!!yScroll}
                        onChange={handleYScrollChange}
                      />
                    </Form.Item>
                    <Form.Item label="Has Data">
                      <Switch checked={!!hasData} onChange={handleDataChange} />
                    </Form.Item>
                    {/* <Form.Item label="Ellipsis">
          <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
        </Form.Item> */}
                    <Form.Item label="Size">
                      <Radio.Group value={size} onChange={handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="middle">Middle</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Table Scroll">
                      <Radio.Group
                        value={xScroll}
                        onChange={handleXScrollChange}
                      >
                        <Radio.Button value={undefined}>Unset</Radio.Button>
                        <Radio.Button value="scroll">Scroll</Radio.Button>
                        <Radio.Button value="fixed">Fixed Columns</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Table Layout">
                      <Radio.Group
                        value={tableLayout}
                        onChange={handleTableLayoutChange}
                      >
                        <Radio.Button value={undefined}>Unset</Radio.Button>
                        <Radio.Button value="fixed">Fixed</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Pagination Top">
                      <Radio.Group
                        value={top}
                        onChange={(e) => {
                          setTop(e.target.value);
                        }}
                      >
                        <Radio.Button value="topLeft">TopLeft</Radio.Button>
                        <Radio.Button value="topCenter">TopCenter</Radio.Button>
                        <Radio.Button value="topRight">TopRight</Radio.Button>
                        <Radio.Button value="none">None</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Pagination Bottom">
                      <Radio.Group
                        value={bottom}
                        onChange={(e) => {
                          setBottom(e.target.value);
                        }}
                      >
                        <Radio.Button value="bottomLeft">
                          BottomLeft
                        </Radio.Button>
                        <Radio.Button value="bottomCenter">
                          BottomCenter
                        </Radio.Button>
                        <Radio.Button value="bottomRight">
                          BottomRight
                        </Radio.Button>
                        <Radio.Button value="none">None</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item></Form.Item>
                  </Form>
                  <div ref={componentRef}>
                    <Table
                      {...tableProps}
                      rowSelection={rowSelection}
                      columns={tableColumns}
                      dataSource={hasData ? data : []}
                      scroll={scroll}
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
