import React from "react";
import PropTypes from "prop-types";
import { Alert, Spin, Row, Col } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import PuffLoader from "react-spinners/PuffLoader";

const LoadingPage = (props) => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div style={{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100vh'
    }}>
        <PuffLoader
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          color="#30C1B9"
        />
    </div>
  );
};

LoadingPage.propTypes = {};

export default LoadingPage;
