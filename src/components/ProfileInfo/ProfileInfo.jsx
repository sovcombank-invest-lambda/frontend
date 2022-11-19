import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from './ProfileInfo.module.scss'

const ProfileInfo = ({ name, avatarUrl }) => {
  return (
    <div className={styles.container}>
      <Avatar src={avatarUrl} size={64} icon={<UserOutlined />} />
      <p>{name}</p>
    </div>
  )
}

export default ProfileInfo
