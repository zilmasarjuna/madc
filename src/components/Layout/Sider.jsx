import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';


const { Sider } = Layout 

const SiderMenu = ({ config }) => (
  <Sider
    breakpoint="lg"
    collapsedWidth="0"
    theme="light"
  >
    <div className="logo">Logo</div>
    <Menu theme="light" mode="inline" selectedKeys={[config.menu]}>
      <Menu.Item key="dashboard" icon={<UserOutlined />}>
        <Link to="/dashboard">
          Dashboard
        </Link>  
      </Menu.Item>
      <Menu.Item key="guest" icon={<UploadOutlined />}>
        <Link to="/guest">
          Daftar Tamu
        </Link>
      </Menu.Item>
      <Menu.Item key="users" icon={<UploadOutlined />}>
        <Link to="/users">
          Pengguna
        </Link>
      </Menu.Item>
      {/* <Menu.Item key="books" icon={<VideoCameraOutlined />}>
        <Link to="/books">
          Daftar Buku
        </Link>
      </Menu.Item>
      <Menu.Item key="judgement" icon={<UserOutlined />}>
        <Link to="/judgement">
          Hasil Penilaian
        </Link>
      </Menu.Item> */}
    </Menu>
  </Sider>
)

export default connect(
  ({bntp: { config }}) => ({ config }),
  null
)(SiderMenu)
