import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchLogin } from 'store/actions/Auth'

import { 
  Card, Input, Button,
  Form 
} from 'antd'

import { RenderAnimation } from 'components'

import Logo from 'assets/img/logo.svg';
 
const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24
  }
}

const buttonLayout = {
  wrapperCol: {
    span: 24
  }
}

const Login = ({ fetchLogin, history }) => (
  <RenderAnimation>
    <div className="container-auth">
      
      <div className="card-auth">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <Card bordered={false} style={{ boxShadow: '0px 22px 106px rgba(0, 0, 0, 0.07)' }}>
          <h4>Halaman Login</h4>
          <Form
            {...layout}
            name='basic'
            onFinish={(val) => {
              fetchLogin(val)
              // history.push('/register')
            }}
          >
            <Form.Item
              label="Email"
              name="email"
              required={false}
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Format email tidak valid!'
                }
              ]}
            >
              <Input 
                className="input-login"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              label="Kata sandi"
              name="password"
              required={false}
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
            >
              <Input.Password 
                className="input-login"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              {...buttonLayout}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

          {/* <div className="info-footer">
            <Link to="/register">Buat akun baru ?</Link>
            <Link to="/forgot-password">Lupa password?</Link>
          </div> */}
        </Card>
      </div>
    </div>
  </RenderAnimation>
)

export default connect(
  null,
  { fetchLogin }
)(Login)