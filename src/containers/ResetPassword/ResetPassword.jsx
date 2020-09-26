import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchLogin } from 'store/actions/Auth'

import { 
  Card, Input, Button,
  Form 
} from 'antd'

import { RenderAnimation } from 'components'
 
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

const ResetPassword = ({ fetchLogin, history }) => (
  <RenderAnimation>
    <div className="container-auth">
      <div className="card-auth">
        <Card bordered={false} style={{ boxShadow: '0px 22px 106px rgba(0, 0, 0, 0.07)' }}>
          <h4>Masukan Password Baru Anda</h4>
          <Form
            {...layout}
            name='basic'
            onFinish={(val) => {
              fetchLogin(val)
              // history.push('/register')
            }}
          >
            <Form.Item
              label="Password"
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
              label="Konfirmasi Password"
              name="confirm_password"
              required={false}
              rules={[
                {
                  required: true,
                  message: 'Required!'
                }
              ]}
            >
              <Input.Password
                className="input-login"
                placeholder="Konfirmasi Password"
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

          <div className="info-footer">
            <Link to="/">Login</Link>
          </div>
        </Card>
      </div>
    </div>
  </RenderAnimation>
)

export default connect(
  null,
  { fetchLogin }
)(ResetPassword)