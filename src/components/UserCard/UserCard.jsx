import React from 'react'
import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from './UserCard.module.scss'

const UserCard = ({ photoUrl, name, phoneNumber, requisites, actives, statistics, id }) => {
  return (
    <div className={styles.container}>
      <Avatar src={photoUrl} size={184} shape="square" icon={<UserOutlined />} />
      <div>
        <p>{name}</p>
        <p>{phoneNumber}</p>
        <p>{requisites}</p>
        <p>{actives}</p>
        <p>{statistics}</p>
        <p>{id}</p>
        <Button className={styles.blockButton} danger>
          Заблокировать
        </Button>
      </div>
    </div>
  )
}

export default UserCard
