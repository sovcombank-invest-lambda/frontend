import React from 'react'
import { USERS } from '../../mockData'
import UserCard from '../../components/UserCard/UserCard'
import styles from './Users.module.scss'
import Search from 'antd/es/input/Search'

const Users = () => {
  function handleSearch(e) {
    console.log(e)
  }

  return (
    <div>
      <Search
        className={styles.search}
        placeholder="введите текст для поиска"
        onSearch={handleSearch}
        enterButton
        size="large"
      />
      <div className={styles.usersContainer}>
        {USERS.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            statistics={user.statistics}
            requisites={user.requisites}
            id={user.id}
            actives={user.actives}
            phoneNumber={user.number}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
