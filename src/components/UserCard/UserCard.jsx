import React, { useState } from 'react'
import { Avatar, Button, Card, ConfigProvider } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from './UserCard.module.scss'

const UserCard = ({ photoUrl, name, phoneNumber, requisites, actives, statistics, id }) => {
  const [isBlocked, setIsBlocked] = useState(false)

  return (
    <Card>
      <div className={styles.container}>
        <Card.Meta
          avatar={
            <ConfigProvider theme={{ token: { borderRadius: 16 } }}>
              <Avatar src={photoUrl} size={220} shape="square" icon={<UserOutlined />} />
            </ConfigProvider>
          }
          title={<p>{name}</p>}
          className={styles.cardDescription}
          description={
            <div>
              <p>Номер: {phoneNumber}</p>
              <p>Реквизиты: {requisites}</p>
              <p>Активы: {actives}</p>
              <p>Статистика: {statistics}</p>
              <p>Идентификатор: {id}</p>
              {
                isBlocked ? (
                  <Button
                    className={styles.blockButton}
                    onClick={() => setIsBlocked(false)}
                  >
                    Разблокировать
                  </Button>
                ) : (
                  <Button
                    className={styles.blockButton}
                    onClick={() => setIsBlocked(true)}
                    danger
                  >
                    Заблокировать
                  </Button>
                )
              }
            </div>
          }
        />
      </div>
    </Card>
  )
}

export default UserCard
