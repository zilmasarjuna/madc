import React from 'react'
import { Layout } from 'antd'

import Sider from './Sider'
import Header from './Header'

const { Content } = Layout

const LayoutWrapper = ({ children }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Sider />

      <Layout>
        <Header />
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutWrapper