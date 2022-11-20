import React from 'react'
import Sider from 'antd/es/layout/Sider'
import { Layout, Menu } from 'antd'
import Header from '../Header/Header'
import { Content, Footer } from 'antd/es/layout/layout'
import { Outlet, useNavigate } from 'react-router-dom'
import { items } from './navItems'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import { faker } from '@faker-js/faker'

const PageLayout = () => {
  let navigate = useNavigate()

  function handleMenuClick(e) {
    navigate(e.key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={300}
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <ProfileInfo name={'Ширяева Е. Э.'} avatarUrl={faker.image.cats()} />
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={'users'}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </Layout>
  )
}

export default PageLayout
