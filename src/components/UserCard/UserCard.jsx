import React from 'react'
import { Avatar, Button, Card } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from './UserCard.module.scss'

const UserCard = ({ photoUrl, name, phoneNumber, requisites, actives, statistics, id }) => {
  return (<Card>
      <div className={styles.container}>
        <Card.Meta
          avatar={<Avatar src={photoUrl} size={220} shape="square" icon={<UserOutlined />} />}
          title={<p>{name}</p>}
          className={styles.cardDescription}
          description={<div>
           <p>{phoneNumber}</p>
           <p>{requisites}</p>
           <p>{actives}</p>
           <p>{statistics}</p>
           <p>{id}</p>
           <Button className={styles.blockButton} danger >
             Заблокировать
           </Button>
          </div>}
        />
      </div>
    </Card>)
}

export default UserCard
