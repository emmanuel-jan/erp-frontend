import React from 'react';
import PropTypes from 'prop-types';
import { Button, Result } from 'antd';

const PageNotFound = props => {
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" href='/' style={{ backgroundColor: "#30C1B9", border:'none' }} >Back Home</Button>}
  />
  )
}

PageNotFound.propTypes = {}

export default PageNotFound