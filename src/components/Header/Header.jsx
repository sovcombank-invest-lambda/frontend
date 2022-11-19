import React from 'react'
import styles from './Header.module.scss'
import { Button } from 'antd';
import { useAuth } from '../../App';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let auth = useAuth()
  let navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h2>Logo</h2>
      <div className={styles.headerRight}>
        <div className={styles.switch}>
          <Button onClick={() => {
            auth.signout(() => navigate('/login'));
          }}>Выйти</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
