import React from 'react';
import { ContainerOutlined } from '@ant-design/icons';
import './style.css';

const IssueHeader = props => {
  return (
    <div className="client-page-header-wrapper">
      <ContainerOutlined className="client-bars-icon"/>
      <span className="client-page-header-title">Client List</span>
    </div>
  );
}

export default IssueHeader;
