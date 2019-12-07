import React from 'react';
import { users, Status } from '../../mock/mock-users';
import { Divider, Table, Tag } from 'antd';


const columns = [{

    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>
},
{
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
},
{
    title: 'Status',
    dataIndex: 'status',
    render: status => {
        let color;
        switch (status) {
            case Status.PANDDING: {
                color = 'orange'
                break;
            }
            case Status.DONE: {
                color = 'green';
                break;
            }
            case Status.SCHEDULED: {
                color = 'gray';
                break;
            }
            case Status.CANCELED: {
                color = 'red';
                break;
            }
            case Status.NOT_SCHEDULED: {
                color = 'volcano';
                break
            };
            default:
                color = 'black';
        }
        return (
            <Tag color={color} key={status}>{status}</Tag>
        )

    }
},
{
    title: 'Next treatment',
    dataIndex: 'nextTime',
    key: 'nextTratment',
    render: (nextTime, status) => {
        const color = status === Status.CANCELED ? 'red' : '';
        return (
            <span style={{ color: color }} key={nextTime}>{nextTime}</span>
        )
    }

},
{
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <a>Send Notification</a>
            <Divider type='vertical' />
            <a>Invite</a>
            <Divider type='vertical' />
            <a>Delete</a>

        </span>
    )
}

]
const UserTable = props => {

    return (
        <div>

            <Table columns={columns} dataSource={users} />
        </div>
    )

}

export default UserTable;