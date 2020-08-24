import React from 'react'
import { Avatar } from 'antd'

const Header = () => (
  <div className="header-admin">
    <div className="profile-section">
      <Avatar 
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
        style={{ backgroundColor: '#fde3cf' }} size={40} />
    </div>
  </div>
)

export default Header