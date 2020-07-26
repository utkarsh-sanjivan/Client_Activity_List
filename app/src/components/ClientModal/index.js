import React from 'react';
import { Modal } from 'antd';
import TableDetails from '../TableDetails/index';
import { CloseOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { calculateDuration } from '../../utils/dateFormatter';
import './style.css';

const ClientModal = props => {
    const tableColumns = [
        {
            title: <div className="client-list-header">Start Time</div>,
            dataIndex: 'start_time',
            key: 'start_time',
            render: (value, record) => (
                <div className="client-start-time-column">{value || ''}</div>
            ),
        },
        {
            title: <div className="client-list-header">End Time</div>,
            dataIndex: 'end_time',
            key: 'end_time',
            render: (value, record) => (
                <div className="client-end-time-column">{value || ''}</div>
            ),
        },
        {
            title: <div className="client-list-header">Duration</div>,
            dataIndex: 'duration',
            key: 'duration',
            render: (value, record) => (
                <div className="client-duration-column">{record.start_time && record.end_time? calculateDuration(record.start_time, record.end_time): ''}</div>
            ),
        },
    ];
    return (
        <Modal
            {...props}
            title={
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '10%', padding: '10px 0px 0px 10px' }}>
                        <FieldTimeOutlined className="timeline-icon"/>
                    </div>
                    <div style={{ width: '80%' }}>
                        <div className="client-modal-title">{props.titleText}</div>
                        <div className="client-modal-sub-title">{props.subTitleText}</div>
                    </div>
                    <div style={{ width: '10%' }}>
                        <CloseOutlined 
                            className="close-icon"
                            onClick={() => props.onCancel()}
                        />
                    </div>
                </div>
            }
            closable={false}
            footer={null}
        >
            <TableDetails 
                width={600}
                dataSource={props.client.activity_periods || []}
                columns={tableColumns}
            />
        </Modal>
    );
};

export default ClientModal;
