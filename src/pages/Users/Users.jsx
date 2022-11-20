import React, { useEffect } from 'react'
import UserCard from '../../components/UserCard/UserCard'
import styles from './Users.module.scss'
import Search from 'antd/es/input/Search'
import { Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, selectUsers } from '../../features/users/users'

const Users = () => {
  const dispatch = useDispatch()
  const usersData = useSelector(selectUsers)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

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
        {usersData?.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            statistics={user.statistics}
            requisites={user.requisites}
            id={user.id}
            actives={user.actives}
            phoneNumber={user.number}
            photoUrl={user.avatar}
          />
        ))}
      </div>
      <Pagination className={styles.pagination} defaultCurrent={1} total={usersData?.length || 0} />
    </div>
  )
}

export default Users
