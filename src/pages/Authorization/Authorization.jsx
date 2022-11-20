import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import styles from './Authorization.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authorize, selectIsAuthorized } from '../../features/auth/authSlice'

const Authorization = () => {
  let navigate = useNavigate()
  let location = useLocation()
  const dispatch = useDispatch()
  const isAuthorized = useSelector(selectIsAuthorized)
  function handleSubmit(event) {
    dispatch(authorize({ name: event.username, password: event.password }))
  }

  useEffect(() => {
    if (isAuthorized) {
      let from = location.state?.from?.pathname || '/'
      navigate(from, { replace: true })
    }
  }, [isAuthorized, navigate, location.state])

  return (
    <div className={styles.container}>
      <Form
        className={styles.form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Имя пользователя"
          name="username"
          rules={[{ required: true, message: 'Пожалуйста введите своё имя пользователя!' }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Пожалуйста введите свой пароль!' }]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Authorization
