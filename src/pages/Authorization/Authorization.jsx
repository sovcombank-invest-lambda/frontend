import React from 'react'
import { Button, Form, Input } from 'antd'
import styles from './Authorization.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../App'

const Authorization = () => {
  // const dispatch = useDispatch()
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()

  let from = location.state?.from?.pathname || '/'

  function handleSubmit(event) {
    auth.signin(event.username, () => {
      navigate(from, { replace: true })
    })
  }

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
          <Input />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Пожалуйста введите свой пароль!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Authorization
