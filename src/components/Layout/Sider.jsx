import React from 'react'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Sider } = Layout 

const SiderMenu = () => (
  <Sider
    breakpoint="lg"
    collapsedWidth="0"
    theme="light"
  >
    <div className="logo">Logo</div>
    <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Beranda
      </Menu.Item>
      <Menu.Item key="2" icon={<UploadOutlined />}>
        Profil Penerbit
      </Menu.Item>
      <Menu.Item key="3" icon={<VideoCameraOutlined />}>
        Daftar Buku
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        Hasil Penilaian
      </Menu.Item>
    </Menu>
  </Sider>
)

export default SiderMenu
