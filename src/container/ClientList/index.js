import React from 'react';
import TableDetails from '../../components/TableDetails';
import ClientModal from '../../components/ClientModal';
import { formatDateString } from '../../utils/dateFormatter';
import axios from '../../utils/axios';
import './style.css';

class ClientList extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      clientList: [],
      showModal: false,
      currentClient: {},
    };
  }

  componentDidMount () {
    axios.get('/api/clients', {})
    .then(res => {
      this.setState({ clientList: res.data.members.map(member => (
        {
          ...member,
          region: member.tz.split('/')[0].split('_').reduce((accumulator, currentValue) => accumulator + ' ' + currentValue),
          area: member.tz.split('/')[1].split('_').reduce((accumulator, currentValue) => accumulator + ' ' + currentValue),
        }))
      });
    });
  }

  render () {
    const tableColumns = [
      {
        title: <div className="client-list-header">Name</div>,
        dataIndex: 'real_name',
        width: '300px',
        key: 'name',
        render: (value, record) => (
          <div className="client-name-column" onClick={() => this.setState({ showModal: true, currentClient: record })}>{value}</div>
        ),
      },
      {
        title: <div className="client-list-header">Region</div>,
        dataIndex: 'region',
        key: 'region',
        render: (value, record) => (
          <div className="client-region-column">{value}</div>
        ),
      },
      {
        title: <div className="client-list-header">Area</div>,
        dataIndex: 'area',
        key: 'area',
        render: (value, record) => (
          <div className="client-area-column">{value}</div>
        ),
      },
      {
        title: <div className="client-list-header">Last Active</div>,
        dataIndex: 'id',
        key: 'last_active',
        render: (value, record) => (
          <div className="client-last-active-column">{formatDateString(record.activity_periods[record.activity_periods.length-1].start_time)}</div>
        ),
      },
    ];
    return (
      <div className="client-list-wrapper">
        <TableDetails 
          dataSource={this.state.clientList}
          columns={tableColumns}
        />
        <ClientModal
          titleText={this.state.currentClient.real_name}
          subTitleText={`from ${this.state.currentClient.region}, ${this.state.currentClient.area}`}
          visible={this.state.showModal}
          client={this.state.currentClient}
          onCancel={() => this.setState({ showModal: false })}
        />
      </div>
    );
  }
}

export default  ClientList;
