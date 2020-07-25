import React from 'react';
import { Table, Empty, Skeleton } from 'antd';
import './style.css';

const TableDetails = props => {
  return (
    <div style={{ marginTop: '25px' }}>
      {props.loading && props.dataSource.length<31?
        <Skeleton 
          loading={true}
          active
        />
        : <Table 
        {...props}
        dataSource={props.dataSource}
        columns={props.columns}
        pagination={false}
        />}
    </div>
  );
};

export default TableDetails;
