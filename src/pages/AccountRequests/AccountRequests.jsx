import React, { useEffect } from 'react'
import { Button, Space, Table, Tooltip } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getRequests, selectRequests } from '../../features/accountRequests/accountRequestsSlice'

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
    width: 260,
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
    width: 90,
  },
  {
    title: 'Номер',
    dataIndex: 'phone',
    key: 'phone',
    width: 160,
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
    title: 'Гражданство',
    dataIndex: 'status',
    key: 'status',
    width: 260,
    ellipsis: {
      showTitle: false,
    },
    render: (status) => (
      <Tooltip placement="topLeft" title={status}>
        {status}
      </Tooltip>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    width: 260,
    render: (_) => (
      <Space size="middle">
        <Button>Принять</Button>
        <Button danger>Отклонить</Button>
      </Space>
    ),
  },
]

const AccountRequests = () => {
  const dispatch = useDispatch()
  const accountRequests = useSelector(selectRequests)

  useEffect(() => {
    dispatch(getRequests())
  }, [dispatch])

  return <Table columns={columns} dataSource={accountRequests} />
}

export default AccountRequests
