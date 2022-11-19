import { MessageOutlined, UserOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

export const items = [
  {
    key: 'users',
    icon: <UserOutlined />,
    label: (
      <Tooltip placement="right" title={'Клиенты'}>
        Клиенты
      </Tooltip>
    ),
  },
  {
    key: 'requests',
    icon: <MessageOutlined />,
    label: (
      <Tooltip placement="right" title={'Заявки на открытие брокерского счета'}>
        Заявки на открытие брокерского счета
      </Tooltip>
    ),
  },
]
