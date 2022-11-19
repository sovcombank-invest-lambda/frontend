import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.heading}>Logo</h2>
      <div className={styles.headerRight}>
        <div className={styles.switch}>
          <label htmlFor="favorite" className={styles.favoriteLabel}>
            Show only favorite
          </label>
        </div>
        {/*<input className={styles.input} placeholder="Search for a picture..." />*/}
      </div>
    </header>
  )
}

export default Header
