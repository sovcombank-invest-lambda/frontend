import React from 'react'
import styles from './Header.module.scss'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <div></div>
      <div className={styles.headerRight}>
        <div className={styles.switch}>
          <Button
            onClick={() => {
              dispatch(logout())
            }}
          >
            Выйти
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
