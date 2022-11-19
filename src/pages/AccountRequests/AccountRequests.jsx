import React from 'react';
import { Button, Space, Table, Tooltip } from 'antd';

const columns = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    render: (text) => (
      <Tooltip placement="topLeft" title={text}>
        {text}
      </Tooltip>
    ),
    width: 300,
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Информация',
    dataIndex: 'info',
    key: 'info',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    width: 260,
    render: (_, record) => (
      <Space size="middle">
        <Button>Принять</Button>
        <Button danger>Отклонить</Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 33,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 33,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 33,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
  },
];

const AccountRequests = () => {
  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default AccountRequests;