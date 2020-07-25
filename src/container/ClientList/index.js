import React from 'react';
import TableDetails from '../../components/TableDetails';
import { formatDateString } from '../../utils/dateFormatter';
import './style.css';

class ClientList extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      clientList: [
        {
            "id": "W012A3CDE",
            "real_name": "Egon Spengler",
            "tz": "America/Los_Angeles",
            "activity_periods": [
                {
                    "start_time": "Feb 1 2020  1:33PM",
                    "end_time": "Feb 1 2020 1:54PM"
                },
                {
                    "start_time": "Mar 1 2020  11:11AM",
                    "end_time": "Mar 1 2020 2:00PM"
                },
                {
                    "start_time": "Mar 16 2020  5:33PM",
                    "end_time": "Mar 16 2020 8:02PM"
                }
            ]
        },
        {
            "id": "W07QCRPA4",
            "real_name": "Glinda Southgood",
            "tz": "Asia/Kolkata",
            "activity_periods": [
                {
                    "start_time": "Feb 1 2020  1:33PM",
                    "end_time": "Feb 1 2020 1:54PM"
                },
                {
                    "start_time": "Mar 1 2020  11:11AM",
                    "end_time": "Mar 1 2020 2:00PM"
                },
                {
                    "start_time": "Mar 16 2020  5:33PM",
                    "end_time": "Mar 16 2020 8:02PM"
                }
            ]
        }
    ],
    };
  }

  componentDidMount () {

  }

  componentDidUpdate(prevProps) {

  }
  
  render () {
    const tabelColumns = [
    {
      title: 'Name',
      dataIndex: 'real_name',
      width: '300px',
      key: 'name',
      render: (value, record) => (
        <div className="client-name-column">{value}</div>
      ),
    },
    {
      title: 'Region',
      dataIndex: 'tz',
      key: 'region',
      render: (value, record) => (
        <div className="client-region-column">{value.split('/')[0]}</div>
      ),
    },
    {
      title: 'Area',
      dataIndex: 'tz',
      key: 'area',
      render: (value, record) => (
        <div className="client-area-column">{value.split('/')[1]}</div>
      ),
    },
    {
      title: 'Last Active',
      dataIndex: 'id',
      key: 'last_active',
      render: (value, record) => (
        <div className="client-last-active-column">{formatDateString(record.activity_periods[0].start_time)}</div>
      ),
    },
  ];
    return (
      <div className="client-list-wrapper">
        <TableDetails 
          dataSource={this.state.clientList}
          columns={tabelColumns}
        />
      </div>
    );
  }
}

export default  ClientList;
