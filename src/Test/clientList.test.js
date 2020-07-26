import React from 'react';
import { create } from "react-test-renderer";
import TableDetails from '../components/TableDetails/index';

test('Test Table Details Component in Client List', () => {
  const component = create(
    <TableDetails 
        dataSource={[{ key: '1', data1: 'ABC', data2: 'ABC' }]}
        columns={[{
            title: 'Column 1',
            dataIndex: 'data1',
            key: 'data1',
            render: (value, record) => (
                <div>{value}</div>
            ),
        },
        {
            title: 'Column 1',
            dataIndex: 'data2',
            key: 'data2',
            render: (value, record) => (
                <div>{value}</div>
            ),
        },
        ]}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});